export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
};