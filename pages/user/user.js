import { fetchLatestUserInfo } from "../../services/user";

/**
 * Title: 我的页面
 * Author: Mivinci
 * Date: I cannot remember
 */

const app = getApp();

const userInfoTest = {
  name: '游客 (点击头像登录)',
  url: '../../assets/icons/avatar_default.png',
  level: '∞',
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
    isAuthModalShown: false
  },

  handleNavpadClick: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.jumpto,
    });
  },

  handleConfirm: function () {
    this.setData({ isAuthModalShown: false }, () => 
      app._login(() => {
        wx.setStorageSync('authorized', 'true');
        wx.reLaunch({ url: './user' });
      }));
  },

  handleManualLogin: function () {
    wx.getStorageSync('authorized') === 'true'
    ? !app.globalData.isSigned && app._login(() => 
      wx.reLaunch({ url: './user' })
    )
    : this.setData({ isAuthModalShown: true });
  },

  _reduceUserInfo: function (userInfo, followings, publishedSections, myMtl) {
    return {
      ...userInfo,
      myMtl,
      followings,
      publishedSections
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu();
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
    fetchLatestUserInfo()
      .then(({ data }) => 
        this.setData({ 
          userinfo: this._reduceUserInfo(
            app.globalData.userInfo,
            data.followings,
            data.publishedSections,
            data.myMtl
        )}))
      .catch(() => wx.showToast({ title: '信息更新失败', icon: 'none' }));
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