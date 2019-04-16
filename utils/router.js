const route = (urL, method) => {
  switch(method) {
    case 'switchTab':
      return new Promise((resolve, reject) => {
      wx.switchTab({
        url: urL,
        success: res => resolve(res),
        fail: res => reject(res)
      })
    })

    case 'reLaunch':
      return new Promise((resolve, reject) => {
        wx.reLaunch({
          url: urL,
          success: res => resolve(res),
          fail: res => reject(res)
        })
      })

    case 'redirectTo':
      return new Promise((resolve, reject) => {
        wx.redirectTo({
          url: urL,
          success: res => resolve(res),
          fail: res => reject(res)
        })
      })

    case 'navigateTo':
      return new Promise((resolve, reject) => {
        wx.navigateTo({
          url: urL,
          success: res => resolve(res),
          fail: res => reject(res)
        })
      })

    case 'navigateBack':
      return new Promise((resolve, reject) => {
        wx.navigateBack({
          url: urL,
          success: res => resolve(res),
          fail: res => reject(res)
        })
      })
  }
}

export default route;