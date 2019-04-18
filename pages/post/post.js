// pages/post/post.js

import { fetchPosts } from '../../services/user';

const postsTestData = [{
  name: '我是标题',
  readCount: 250,
  commentCount: 25,
  wowCount: 56,
  publishTime: '2019-04-01',
  description: '',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
}, {
  name: '我是个长标题',
  readCount: 250,
  commentCount: 25,
  wowCount: 56,
  publishTime: '2019-04-01',
  description: '',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
}, {
  name: '我是个超级长的标题',
  readCount: 250,
  commentCount: 25,
  wowCount: 56,
  publishTime: '2019-04-01',
  description: '',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
}, {
  name: '标题一',
  readCount: 250,
  commentCount: 25,
  wowCount: 56,
  publishTime: '',
  description: '',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
}, {
  name: '标题一',
  readCount: 250,
  commentCount: 25,
  wowCount: 56,
  publishTime: '',
  description: '',
  url: 'https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa',
}];

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
    fetchPosts({
      pageSize: 15,
      pageIndex: 1
    }).then(res => this.setData({
      posts: res.data.list,
      pageCount: res.data.pageCount
    }))
      .catch(err => console.error(err));
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