/**
 * Title: 我的页面
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */
const app = getApp();

const userInfoTest = {
  name: '小白',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
  level: 3,
  followings: {
    count: '--',
    lastOne: {}
  },
  publishedSections: {
    count: '--',
  },
  myMtl: {
    count: '--',
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: userInfoTest,
  },

  handleNavpadClick: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.jumpto,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    console.log(app.globalData);
    app.globalData.isSigned &&
    this.setData({
      userinfo: app.globalData.userInfo,
    })
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

  }
})