// pages/record/record.js

import { fetchRecordPointUrl } from '../../services/user';
import { isAuthorized } from '../../utils/check';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewUrl: null,
    isAuthModalShown: true
  },

  handleConfirm: function () {
    this.setData({ isAuthModalShown: false }, () => {
        wx.setStorageSync('authorized', 'true');
        app._login();
    });
  },

  fetchWebview: function () {
    fetchRecordPointUrl()
      .then(({ data }) => {
        data.code === 200 &&
        this.setData({ webviewUrl: `${data.url}&t=${new Date().getTime()}` });
      })
      .catch(err => wx.showToast({ title: '服务器走丢啦', icon: 'none', image: '/assets/icons/sad.png', duration: 2000 }));
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
    isAuthorized()
    && this.setData({ isAuthModalShown: false }, () => 
      ! app.globalData.isSigned 
      ? app._login(() => this.fetchWebview())
      : this.fetchWebview()
    )
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