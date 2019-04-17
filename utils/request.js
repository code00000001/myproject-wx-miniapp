/**
 * Title: 请求接口封装
 * Author: XJJ
 * Date: 2019-04-02 15:57
 */

const request = (url, {method, header, body}) => {
  const _method = method || 'GET';
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: _method,
      header: header,
      data: body,
      
      success: res => resolve(res),
      fail: err => reject(err),
    });
  });
};

const upload = (url, {filePath, name}, { token, appId, gps, posture, createTime, title, description }) => {
  return new Promise((resolve, reject) => {
      wx.uploadFile({
        url,
        filePath,
        name,
        formData: {
          token,
          appId,
          gps,
          posture,
          createTime,
          title,
          description
        },
        success: res => resolve(res),
        fail: err => reject(err),
      })
  })
}

export { upload, request }

