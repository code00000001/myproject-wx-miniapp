/**
 * Title: 编辑页面
 * Author: 姚老师
 * Date: NaN
 */

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
    title: null,
    description: null,
    gps: null,
    posture: null,
    createTime: null,
    x: wx.getSystemInfoSync().windowWidth * 0.68,
    y: wx.getSystemInfoSync().windowWidth * 0.35
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu();
    isIOS() && this.setData({ isiOS: true });
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
    let postureArr = [];
    wx.startDeviceMotionListening()
    isIOS() ? console.log('isIOS') : wx.onDeviceMotionChange(res => {
        postureArr.push(res)
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
            const length_posture = postureArr.length;
            if(postureArr.length > 1){
              const posture = `(${postureArr[length_posture-1].alpha},${postureArr[length_posture-1].beta},${postureArr[length_posture-1].gamma})`
              this.setData({ posture })
            }
            wx.stopDeviceMotionListening()
            const gps = `(${res.latitude},${res.longitude},${res.altitude})`
            this.setData({ gps })
          }
        })
        this.setData({
          createTime: date,
          src: res.tempFilePaths,
          srcImage:res.tempFilePaths[0]
        })
      },
    })
  },

  preview: function(){
    if(this.data.src){
      wx.previewImage({
        urls: this.data.src
      })
    }
  },

  getTitle: function(event){
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(() => {
      this.setData({
        title: event.detail.value
      })
  },800)
  },


  getContent: function(event){
    clearTimeout(this.data.timer);
    this.data.timer = setTimeout(() => {
      this.setData({
        description: event.detail.value
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
    }).then(res => {
      const Json = JSON.parse(res.data)
      Json.code == 200 ? 
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1500,
        success: res => {
          setTimeout(res => {
            wx.reLaunch({ url: './find' })
          }, 1500)
        }
      }) : 
      wx.showToast({ title: '上传失败', icon: 'none', })
    }).catch(err => {
      wx.showToast({
        title: '上传失败',
        icon: 'none',
        duration: 1500,
      })
    }).finally(() => wx.hideLoading());
    wx.showLoading();
  }
})