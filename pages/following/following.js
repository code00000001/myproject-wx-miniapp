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
}];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    followings: followingTestData,
    pullTip: '上拉获取更多'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // fetchFollowings(getApp().globalData.token, {
    //   pageSize: 5,
    //   pageIndex: 1
    // }).then(res => console.log(res))
    //   .catch(err => console.error(err));
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

    let currentFollowings = this.data.followings;

    // if not fetchedDat: this.data.pullTip = '我是有底线的~'

    currentFollowings.push({
      last: {},
      name: "芽生三月",
      id: 10,
      url: "https://wx.qlogo.cn/mmopen/vi_32/C6fI3RLRvzqnSOCHM2nSttNb8Po2eDuuOicficVFKPNVbOrjX5XzAkZibkSDDylgib5lzrF1pJBI4ZbmHcwiabfOIEQ/132"
    }, {
      last: {},
      name: "Masaki",
      id: 11,
      url: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqldtIfUdIuL7GLJLf94uBdwtvAFAhWzjU77Auuxvfy4ibicByYMVelPKT04HcgWEQdVBg/132"
    });
    setTimeout(() => {
      this.setData({ followings: currentFollowings });
      wx.hideNavigationBarLoading();
    }, 1000);

    wx.showNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})