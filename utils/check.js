const getSystem = () => {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}
export default getSystem;