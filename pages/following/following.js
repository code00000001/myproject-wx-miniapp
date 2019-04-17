// pages/following/following.js

import { fetchFollowings } from '../../services/user';

const followingTestData = [{
  last: {},
  name: "Masaki",
  id: 11,
  url: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqldtIfUdIuL7GLJLf94uBdwtvAFAhWzjU77Auuxvfy4ibicByYMVelPKT04HcgWEQdVBg/132"
}, {
  last: {},
  name: "芽生三月",
  id: 10,
  url: "https://wx.qlogo.cn/mmopen/vi_32/C6fI3RLRvzqnSOCHM2nSttNb8Po2eDuuOicficVFKPNVbOrjX5XzAkZibkSDDylgib5lzrF1pJBI4ZbmHcwiabfOIEQ/132"
}, {
  last: {},
  name: "Masaki",
  id: 11,
  url: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqldtIfUdIuL7GLJLf94uBdwtvAFAhWzjU77Auuxvfy4ibicByYMVelPKT04HcgWEQdVBg/132"
}, {
  last: {},
  name: "芽生三月",
  id: 10,
  url: "https://wx.qlogo.cn/mmopen/vi_32/C6fI3RLRvzqnSOCHM2nSttNb8Po2eDuuOicficVFKPNVbOrjX5XzAkZibkSDDylgib5lzrF1pJBI4ZbmHcwiabfOIEQ/132"
}, {
  last: {},
  name: "Masaki",
  id: 11,
  url: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqldtIfUdIuL7GLJLf94uBdwtvAFAhWzjU77Auuxvfy4ibicByYMVelPKT04HcgWEQdVBg/132"
}];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    followings: followingTestData,
    currentPageIndex: 1,
    pageCount: 0,
    pullTip: '上拉获取更多'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetchFollowings(getApp().globalData.token, {
      pageSize: 15,
      pageIndex: 1
    }).then(res => this.setData({
      followings: res.data.list,
      pageCount: res.data.pageCount
    }))
      .catch(err => console.error(err));

    console.log(this.data);
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
    console.log('bottom touched');

    if (this.data.pageCount === this.data.currentPageIndex) {
      this.setData({pullTip: '我是有底线的'})
      return false;
    }

    this.setData({
      currentPageIndex: this.data.currentPageIndex + 1,
    }, () => {
      fetchFollowings(getApp().globalData.token, {
        pageSize: 15,
        pageIndex: this.data.currentPageIndex
      }).then(res => {
        console.log(res);
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