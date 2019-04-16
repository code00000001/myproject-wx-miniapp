const isIos = () => {
  let result;
    wx.getSystemInfo({
      success: res => {
      result == res.platform === 'ios'
      }
    })
    return result
}
export default isIos;