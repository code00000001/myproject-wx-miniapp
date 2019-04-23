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

  onShow: function (options) {
    this.globalData.scene = options.scene; // 保存小程序进入方式
  },

  prepareLogin: function () {
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
  
  doLogin: function (callback) {
    this.prepareLogin()
      .then(res => {
        this.globalData.userInfo = res.data.user;
        this.globalData.token = res.data.token;
        this.globalData.isSigned = true;
        wx.hideLoading();
      })
      .then(() => {
        callback;
        wx.switchTab({
          url: '../user/user'
        });
      })
      .catch(err => {
        console.error(err);
        wx.hideLoading();
        wx.showModal({
          title: '登录失败',
          content: err,
          showCancel: true,
          confirmText: '重新登录',
          success: res => {
            if (res.confirm) {
              this.doLogin();
            } else {
              wx.navigateBack();
            }
          }
        });
      })
    wx.showLoading({
      mask: true,
      title: '登录中'
    });
  },
  globalData: {
    isSigned: false,
    userInfo: null,
    token: null,
    scene: null,
  }
})