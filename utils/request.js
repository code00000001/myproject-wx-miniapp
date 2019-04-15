/**
 * Title: 请求接口封装
 * Author: XJJ
 * Date: 2019-04-02 15:57
 */

export const request = (url, {method, header, body}) => {
  const _method = method || 'GET';
  console.log(body);
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