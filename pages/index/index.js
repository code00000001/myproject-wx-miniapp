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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.userLogin()
      .then(res => {
        app.globalData.userInfo = res.data.user;
        app.globalData.token = res.data.token;
        app.globalData.isSigned = true;
        wx.hideLoading();
      })
      .catch(err => {
        console.error(err);
        wx.showToast({
          title: err,
          icon: 'none'
        })
      })
    wx.showLoading({
      mask: true,
      title: '登录中'
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
    console.log(app.globalData.isSigned)
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