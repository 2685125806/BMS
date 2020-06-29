//app.js
App({
  
  globalData: {
    userInfo: null,
    appId: 'wx115d170c6715f78c',/* 小程序id */
    appSecret: '18f51ce98c4556ed02c44c39af04e5f0', /* 小程序秘钥*/
    openid: null,
    // ipaddr:'172.17.9.55'
    ipaddr: '192.168.0.101'
  },
  onLaunch: function () {
    // 展示本地存储能力
    const app = getApp()
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("--登录前--")

   
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  getOpenid:function(){
    wx.getStorageSync("openid")
  }
})