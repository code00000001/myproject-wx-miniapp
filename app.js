//app.js

import { login } from './services/user.js';

App({
  onLaunch: function () {

    Promise.prototype.finally = function (callback) {
      let P = this.constructor;
      return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
      );
    };

  },

  onShow: function (options) {
    this.globalData.scene = options.scene; // 保存小程序进入方式
  },

  _prepareLogin: function () {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: ({ authSetting }) => {
          
          !this.globalData.isSigned &&
            wx.getUserInfo({
              success: res => {

                this.globalData.userInfo = res.userInfo;

                const { signature, rawData, encryptedData, iv } = res;

                wx.login({
                  success: res => {
                    const { code } = res;

                    login({ code, signature, rawData, encryptedData, iv })
                      .then(res => res.data.code === 200 ? resolve(res) : reject(res.data.msg))
                      .catch(err => reject(err.errMsg));

                  }
                })

                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              },
              fail: err => wx.showToast({ title: '请先授权哦', icon: 'none' })
            })
        },
        fail: err => reject(err),
      })
    })
  },

  _login: function (callback, cancelRetry) {
    this._prepareLogin()
      .then(({ data }) => {
        this.globalData.userInfo = data.user;
        this.globalData.token = data.token;
        this.globalData.isSigned = true;
        wx.hideLoading();
      }).then(() => {
        typeof (callback) === 'function' && callback();
        wx.switchTab({ url: '../user/user' });
      }).catch(err => {
        wx.hideLoading();
        console.log(err)
        wx.showModal({
          title: '登录失败',
          content: err || '服务器走丢了',
          cancelColor: '#BABABA',
          confirmText: '重新登录',
          confirmColor: '#8ECDA9',
          success: ({ confirm }) => confirm 
            ? this._login() 
            : typeof(cancelRetry) === 'function'
            ? cancelRetry() 
            : wx.navigateBack()
        });
      })
    wx.showLoading({ mask: true, title: '登录中' });
  },
  globalData: {
    authorized: false,
    isSigned: false,
    userInfo: null,
    token: null,
    scene: null,
  }
})