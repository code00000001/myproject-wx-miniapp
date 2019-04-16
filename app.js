//app.js

import { login } from './services/user.js';
import { appId } from './config/secret.config.js';

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  userLogin: function () {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            !this.globalData.isSigned &&
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo;

                const { signature, rawData, encryptedData, iv } = res;
                
                wx.login({
                  success: res => {
                    const { code } = res;

                    login({ code, appId, signature, rawData, encryptedData, iv })
                      .then(res => res.data.code === 200 ? resolve(res) : reject(res.data.msg))
                      .catch(err => reject(err));
                   
                  }
                }) 
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        },
        fail: err => reject(err),
      })
    })
  },
  globalData: {
    isSigned: false,
    userInfo: null,
    token: null
  }
})