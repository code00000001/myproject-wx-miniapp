// pages/edit/edit.js

import { isIOS } from '../../utils/check';
import uploadFind from '../../services/find';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: null,
    src: null,
    isiOS: false,
    disabled: false,
    title:null,
    content:null,
    x: wx.getSystemInfoSync().windowWidth*0.68,
    y: wx.getSystemInfoSync().windowWidth*0.35
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    console.log(this.data.src)
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
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success:res => {
        this.setData({
          src:res.tempFilePaths
        },() => {
          this.onShow()
        })
      }
    })
  },

  preview: function(){
    if(this.data.src){
      wx.previewImage({
        urls: this.data.src
      })
    }
  },

  getTitle: function(e){
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(() => {
      this.setData({
        title: e.detail.value
      })
  },800)
  },


  getContent: function(e){
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(() => {
      this.setData({
        content: e.detail.value
      })
  },800)
  },

  uploadFn: function(){
    
  }
  
})