// pages/record/record.js

import { fetchRecordPointUrl } from '../../services/user';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewUrl: null,
    isAuthModalShown: false
  },

  handleConfirm: function () {
    this.setData({ isAuthModalShown: false }, () => 
      app._login(() => {
        wx.setStorageSync('authorized', 'true');
        wx.reLaunch({ url: './record' });
      }));
  },

  fetchWebview: function () {
    console.log(2)
    fetchRecordPointUrl()
      .then(res => {
        res.data.code === 200 &&
        this.setData({ webviewUrl: res.data.url });
      })
      .catch(err => console.error(err));
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorageSync('authorized') === 'true'
    ? !app.globalData.isSigned 
    ? app._login(() => this.fetchWebview())
    : this.fetchWebview()
    : this.setData({ isAuthModalShown: true });
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

  }
})