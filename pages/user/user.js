/**
 * Title: 我的页面
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */
const app = getApp();

const userInfoTest = {
  name: '游客',
  url: '../../assets/icons/avatar_default.png',
  level: 3,
  followings: {
    count: '--',
    lastOne: {}
  },
  publishedSections: {
    count: '--',
  },
  myMtl: {
    count: '--',
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: userInfoTest,
  },

  handleNavpadClick: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.jumpto,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    app.globalData.isSigned &&
    this.setData({
      userinfo: app.globalData.userInfo,
    })
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
    return {
      title: '我是自定义小程序名称',
      path: '/pages/index/index',
      imageUrl: '/assets/icons/user_active.png'
    }
  },

  navgateToFeedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  }
})