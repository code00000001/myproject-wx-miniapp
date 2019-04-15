/**
 * Title: 看点页面
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */

import { fetchTestData } from '../../services/views.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.checkSession({
    //   success () {
    //     console.log('code 未过期');
    //   },
    //   fail () {
    //     console.log('code 已过期');
    //   }
    // })
    wx.login({
      timeout: 3000,
      success (res) {
        wx.request({
          url: 'http://maps.mapsong.com:2000/wap/user/login',
          data: {
            code: res.code,
            appId: 'wxcb35adbd2eeb9490'
          },
          success (res) {
            console.log(res);
          },
          fail (err) {
            console.error(err);
          }
        })
      },
      fail (err) {
        console.error(err);
      }
    })
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