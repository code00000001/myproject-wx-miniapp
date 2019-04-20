// pages/webview/webview.js

// Login Free !!!
// Login Free !!!
// Login Free !!!

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareTitle: '我是自定义分享小题',
    shareImagePath: '',
    webviewUrl: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { webviewUrl } = options;
    this.setData({ webviewUrl });
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
    const { webviewUrl } = options;
    return {
      title: this.data.shareTitle,
      imageUrl: this.data.shareImagePath,
      path: `/pages/webview/webview?webviewUrl=${webviewUrl}`
    }
  }
})