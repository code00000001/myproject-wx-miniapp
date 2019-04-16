// pages/edit/edit.js

import { isIOS } from '../../utils/check';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: null,
    isiOS: false,
    disabled: false,
    x: 0,
    y: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.path)
    wx.getImageInfo({
      src: options.path,
      success: function (res2) {
        console.log(res2.orientation);
      }
    })
    this.setData({
      src: options.path
    });

    isIOS() && this.setData({isiOS: true});
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

  jump_camera: function(){
    let _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success(res) {
        _this.setData({
          src:res.tempFilePaths
        })
      }
    })
  }
  
})