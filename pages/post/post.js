// pages/post/post.js

import { fetchPosts } from '../../services/user';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: null,
    currentPageIndex: 1,
    pageCount: 0,
    pullTip: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    !app.globalData.isSigned && app.doLogin();

    fetchPosts({
      pageSize: 15,
      pageIndex: 1
    }).then(res => this.setData({
      posts: res.data.list,
      pageCount: res.data.pageCount
    })).then(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }).catch(err => console.error(err));

    wx.startPullDownRefresh();
    wx.showNavigationBarLoading();
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
    console.log('Bottom touched');

    if (this.data.pageCount === this.data.currentPageIndex) {
      this.setData({pullTip: '我是有底线的'})
      return false;
    }

    this.setData({
      currentPageIndex: this.data.currentPageIndex + 1,
    }, () => {
      fetchPosts({
        pageSize: 15,
        pageIndex: this.data.currentPageIndex
      }).then(res => {

        wx.hideNavigationBarLoading();

        this.setData({
          posts: this.data.posts.concat(res.data.list)
        });

      }).catch(err => console.error(err));
    })

    wx.showNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  previewImage: function (event) { 
    wx.previewImage({
      urls: [event.currentTarget.dataset.src],
    });
  },
})