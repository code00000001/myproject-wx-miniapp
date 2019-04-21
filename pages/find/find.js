// pages/edit/edit.js

import { isIOS } from '../../utils/check';
import { uploadFind } from '../../services/find';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: null,
    src: null,
    srcImage: null,
    isiOS: false,
    disabled: false,
    title:null,
    content:null,
    gps:null,
    posture:null,
    createTime:null,
    x: wx.getSystemInfoSync().windowWidth*0.68,
    y: wx.getSystemInfoSync().windowWidth*0.35
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(EXIF)
    isIOS() && this.setData({isiOS: true});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on show', this.data.src);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('on show', this.data.src);
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
    // wx.startDeviceMotionListening({
    //   success: res => console.log('ready listening')
    // })

    // isIOS ? console.log('isIOS') : wx.onDeviceMotionChange(res => {
    //     console.log(res)
    // })
    
    // wx.stopDeviceMotionListening({
    //   success: res => console.log('stop listening')
    // })
    console.log('before listening')
    wx.startGyroscope({
      success: res => console.log('ready to listening'),
      fail: res => console.log('fail to')
    })


    console.log('start listening')
    wx.onGyroscopeChange(res => {
      console.log(res)
    })


    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['camera'],
      success: res => {
        const date = new Date().getTime()

        wx.getLocation({
          type: 'wgs84',
          altitude: true,
          success: res => {
            console.log('before stop listening')
            wx.stopGyroscope({
              success: res => console.log('success stop')
            })
            const gps = `(${res.latitude},${res.longitude},${res.altitude})`
            console.log(gps)
            this.setData({
              gps: gps
            })
          }
        })
        this.setData({
          createTime: date,
          src: res.tempFilePaths,
          srcImage:res.tempFilePaths[0]
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


  uploadFn: function() {
    const { title, description, gps, posture, createTime } = this.data;
    uploadFind({
      filePath: this.data.src[0],
      name: 'image'
    },{
      gps,
      posture,
      createTime,
      title,
      description
    } 
    ).then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


})