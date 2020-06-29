//index.js
//获取应用实例
var app = getApp()

Page({

  data: {
    openid: '---',
    ipaddr:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
		
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },


  getUserInfo: function(e) {
	var that =this;
  var openid;
  var nickName;
  var gender;
  var imageUrl;

  
  wx.login({
		success: (res) => {
      wx.getUserInfo({
        success:function(res){
          nickName = res.userInfo.nickName
          gender = res.userInfo.gender
          imageUrl = res.userInfo.avatarUrl
        }
      }),

			wx.request({
				url:'https://api.weixin.qq.com/sns/jscode2session',
				data:{
					appid: app.globalData.appId,
					secret: app.globalData.appSecret,
					js_code: res.code,
					grant_type: 'authorization_code'
				},
				method:'GET',
				header:{'content-type':'application/json'},
				success: (res) => {
          openid = res.data.openid
          console.log("写入数据库" + openid + "--" + nickName + "--" + gender + "--" + imageUrl)
          // this.data.openid = openid
          //  app.globalData.openid = res.data.openid
		      
          wx.setStorage({
            key: "openid",
            data: openid
          })
          this.setData({
            openid: res.data.openid
          })

          app.openid = res.data.openid
          console.log(app.openid+"----test1")
          wx.request({
            // url: 'http://172.17.8.116:8080/bms/users/insert',
            url: 'http://'+app.globalData.ipaddr+':8080/bms/users/insert',
            data: {
              openid: res.data.openid,
              nickname: nickName,
              gender: gender,
              imageUrl: imageUrl
            },
            method: 'GET',
            header: { 'content-type': 'json' }
          })
				}


			})
		}
	})
 

    // this.data.userInfo=e.detail.userInfo
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    
  },


  ordering:function(){
    console.log("预约中....")
    var tstatus=1;
    wx.navigateTo({
      url: '../bookList/list'+'?tstatus='+tstatus,
    })
    
    

  },
  reading:function(){
	  console.log("借阅中")
    var tstatus = 2;
	  wx.navigateTo({
      url: '../bookList/list' + '?tstatus=' + tstatus,
       
	  })
  },
  outOfDate:function(){
  	  console.log("已过期")
      var tstatus = 3;
  	  wx.navigateTo({
        url: '../bookList/list' + '?tstatus=' + tstatus,   
  	  })
  },
  search:function(){
  	  console.log("书目检索"),
  	  wx.navigateTo({
  		  url:'../search/search'
  	  })
  },
  orderOnline:function(){
  	  console.log("线上预约"),
  	  wx.navigateTo({
  		  url:'../search/search'
  	  })
  },
  bookRenew:function(){
  	console.log("图书续借")
    var tstatus = 3;
    wx.navigateTo({
      url: '../bookList/list' + '?tstatus=' + tstatus,
    })
  }
})
