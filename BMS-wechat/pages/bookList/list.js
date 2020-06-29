// pages/bookList/list.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
	  array: [],
    tstatus:null,
    isbn:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var tstatus = options.tstatus;
    this.setData({
      tstatus:options.tstatus
    })
    console.log("--" + tstatus)
    if (this.data.tstatus==1){
      wx.request({
        url: 'http://' + app.globalData.ipaddr +':8080/bms/status/status',
        data: {
          status: 1,
          userOpenid: app.openid
        },
        success: function (res) {
          that.setData({
            array: res.data
          })
          console.log("lsit--" + res)
        },
        fail: function (res) {
          console.log("---查询状态失败")
        }
      })
      

    }
    if (this.data.tstatus == 2) {
      wx.request({
        url: 'http://' + app.globalData.ipaddr +':8080/bms/status/status',
        data: {
          status: 2,
          userOpenid: app.openid
        },
        success: function (res) {
          that.setData({
            array: res.data
          })
          console.log("lsit--" + res)
        },
        fail: function (res) {
          console.log("---查询状态失败")
        }
      })
    }
    if (this.data.tstatus == 3){
      wx.request({
        url: 'http://' + app.globalData.ipaddr +':8080/bms/status/status',
        data: {
          status: 3,
          userOpenid: app.openid
        },
        success: function (res) {
          that.setData({
            array: res.data
          })
          console.log("lsit--" + res)
        },
        fail: function (res) {
          console.log("---查询状态失败")
        }
      })
    }
    
   
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  detail:function(event){

    console.log(event.currentTarget.dataset.isbn,'第一个')
    var isbn = event.currentTarget.dataset.isbn
    
	  console.log("list-->detail"),
	  wx.navigateTo({
		  url:'../bookDetail/detail'+'?isbn='+isbn
	  })
  },
  


})