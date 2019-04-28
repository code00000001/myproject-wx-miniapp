// pages/feedback/feedback.js
import { sendFeedback } from '../../services/feedback';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: null,
    isBarClicked: false
  },

  handleTextOnChange: function (event) {
    const { value } = event.detail;
    this.setData({ value });
  },

  handleClearText: function () {
    this.data.value !== null &&
    wx.showModal({
      title: '提示',
      content: '确定要清空已输入的内容吗?',
      confirmText: '清空',
      confirmColor: '#8ECDA9',
      cancelText: this.data.isBarClicked ? '手又滑了' : '手滑了',
      cancelColor: '#BABABA',
      success: ({ confirm }) => confirm && this.setData({ value: null }),
      complete: () => this.setData({ isBarClicked: true })
    });
  },

  handleConfirm: function () {
    this.data.value !== null &&
    wx.showModal({
      title: '提示',
      content: '确定提交反馈?',
      confirmText: '提交',
      confirmColor: '#8ECDA9',
      cancelText: this.data.isBarClicked ? '手又滑了' : '手滑了',
      cancelColor: '#BABABA',
      success: ({ confirm }) => confirm && this._submit(),
      complete: () => this.setData({ isBarClicked: true })
    });
  },

  _submit: function () {
    const { value } = this.data;
    sendFeedback(value)
      .then(({ data }) => data.code === 200 ?
        wx.showToast({ title: data.msg, complete: () => setTimeout(() => wx.reLaunch({ url: './feedback' }), 1500)}) 
        : wx.showToast({ title: data.msg, icon: 'none' }))
      .catch(err => wx.showToast({ title: '提交失败', icon: 'none' }))

    wx.showLoading({ title: '提交中' });
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