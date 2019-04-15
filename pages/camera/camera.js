/**
 * Title: 发现界面
 * Author: Masaki
 * Date: xxxx-xx-xx xx:xx
 */
const app = getApp();
import route from '../../utils/router.js'

Page({
  data: {
    msg: '相机',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function(){
    wx.startDeviceMotionListening({
      interval: 'ui'
    })
    wx.onDeviceMotionChange(res => {
      console.log(res)
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  onShow: function(){
  },
  camera: function(){
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        let url = '../edit/edit?path=' + tempFilePaths;

        route(url, 'navigateTo').then(res => {
          console.log('success')
        }).catch(res => {
          console.log('fail')
        })
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  camera: function () {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: function (res) {
        console.log('new I camera');
        wx.navigateTo({
          url: '../edit/edit?path=' + res.tempImagePath,
        }) 
      }
    })
   
  },

})