// pages/following/following.js

import { fetchFollowings } from '../../services/user';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    followings: null,
    currentPageIndex: 1,
    pageCount: 0,
    pullTip: ''
  },

  _init: function () {
    !app.globalData.isSigned && app._login();

    fetchFollowings({
      pageSize: 15,
      pageIndex: 1
    }).then(({ data }) => this.setData({
      followings: data.list.length > 0 ? data.list : null,
      pageCount: data.pageCount || 0
    })).then(() => {
        wx.hideNavigationBarLoading();
    }).catch(err => console.error(err));

    wx.showNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._init();
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
    this._init();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    if (this.data.pageCount === this.data.currentPageIndex) {
      this.setData({pullTip: '我是有底线的'})
      return false;
    }

    this.setData({
      currentPageIndex: this.data.currentPageIndex + 1,
    }, () => {
      fetchFollowings({
        pageSize: 15,
        pageIndex: this.data.currentPageIndex
      }).then(res => {

        wx.hideNavigationBarLoading();

        this.setData({
          followings: this.data.followings.concat(res.data.list)
        });

      }).catch(err => console.error(err));
    })

    wx.showNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})