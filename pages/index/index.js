import { fetchViewPointUrl } from "../../services/views";

/**
 * Title: 看点页面
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */


const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewSrc: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    !app.globalData.isSigned && app.doLogin();

    // if (webviewSrc) {
    //   this.setData({ webviewSrc });
    // } else {
    //   fetchViewPointUrl().then(res => {
    //     res.code === 200 &&
    //     this.setData({ webviewSrc: res.url });
    //   }).catch(err => console.error(err));
    // }
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
  onShareAppMessage: function (options) {
    const { webViewUrl } = options;
    return {
      path: `/pages/webview/webview?webviewUrl=${webViewUrl}`
    }
  }
})