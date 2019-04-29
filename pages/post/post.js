// pages/post/post.js

import { fetchPosts, fetchSectionPointUrl } from '../../services/user';

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

  handleItemClick: function (event) {
    const { sectionid } = event.currentTarget.dataset;
    fetchSectionPointUrl(sectionid)
      .then(({ data }) => {
        data.code === 200
        ? wx.navigateTo({
            url: `../webview/webview?webviewUrl=${encodeURIComponent(data.url + '&t=' + new Date().getTime())}`
          })
        : wx.showToast({ title: '获取失败', icon: 'none' })
      })
      .catch(() => wx.showToast({ title: '服务器走丢啦~', icon: 'none' }));
  },

  _init: function () { 
    !app.globalData.isSigned && app._login();

    fetchPosts({
      pageSize: 15,
      pageIndex: 1
    }).then(({ data }) => 
      data.code === 200
      ? this.setData({
        posts: data.list || null,
        pageCount: data.pageCount || 0
      })
      : wx.showToast({ title: data.msg, icon: 'none', image: '/assets/icons/unauthorized.png', duration: 2000 })
    )
    .catch(() => wx.showToast({ title: '服务器走丢啦', icon: 'none', image: '/assets/icons/sad.png', duration: 2000 }))
    .finally(() => {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    });

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