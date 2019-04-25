import { fetchViewPointUrl } from "../../services/views";

/**
 * Title: 看点页面
 * Author: Mivinci
 * Date: Connot remember
 */

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewUrl: null,
    isAuthorizationModalShown: true
  },

  handleModalBtnClick: function (event) {
    this.setData({ isAuthorizationModalShown: false }, () => {
      wx.setStorageSync('authorized', 'true');
      app._login();
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const authorized = wx.getStorageSync('authorized');
    authorized === 'true' 
    && this.setData({ isAuthorizationModalShown: false }, () => app._login())
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
    fetchViewPointUrl().then(res => {
      res.data.code === 200 ?
        this.setData({
          webviewUrl: res.data.url
        })
      : wx.showToast({ title: res.data.msg, icon: 'none' })
    }).catch(err => wx.showToast({
      title: err
    }))
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
  onShareAppMessage: function (options) {
    const {
      webViewUrl
    } = options;
    return {
      path: `/pages/webview/webview?webviewUrl=${webViewUrl}`
    }
  }
})