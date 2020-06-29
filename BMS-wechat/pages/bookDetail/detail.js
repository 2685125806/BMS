// pages/bookDetail/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbn:null,
    bauthor:null,
    bpublisher:null,
    bimageurl:null,
    bname:null,
    bdescription:null,
    bpublishTime:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var isbn = options.isbn
    var that = this
    wx.request({
      url: 'http://' + app.globalData.ipaddr +':8080/bms/books/book'+'?isbn='+isbn,
      success: function (res) {
        console.log(res,'res--')
        that.setData({
          isbn: res.data.bisbn,
          bname: res.data.bname,
          bauthor: res.data.bauthor,
          bpublisher: res.data.bpublisher,
          bimageurl:res.data.bimageurl,
          bdescription:res.data.bdescription,
          bpublishTime:res.data.bpublishTime
        })
        console.log("lsit--", res)
      },
      fail: function (res) {
        console.log("---查询状态失败")
      }
    })
    
    
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
  setStatus:function(event){
    console.log(event)
    var that = this;
    var status = event.currentTarget.dataset.status
    if(status==1){
      // 预约
      wx.request({
        url: 'http://' + app.globalData.ipaddr +':8080/bms/status/order'+'?isbn='+that.data.isbn+'&openid='+app.openid,
        success: function () {
          wx.redirectTo({
            url: '../index/index',
          })
        },
        fail:function(){
          console.log('预约失败')
        }
      })
      
      
    }
    if(status == 2){
      // 续期
    }
  }
})