//app.js

import { login } from './services/user';

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              const { signature, rawData, encryptedData, iv } = res;
              // 登录
              wx.login({
                success: res => {
                  const { code } = res,
                        appId = 'wxcb35adbd2eeb9490';
                  // 发送 res.code 到后端换取 token
                  login({ code, appId, signature, rawData, encryptedData, iv })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      },
      fail: err => console.log(err),
    })
  },
  globalData: {
    userInfo: null
  }
})