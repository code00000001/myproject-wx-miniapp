/**
 * Title: 发现页面的数据请求接口封装
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */

import upload from '../utils/request';
// import {} from '';

const baseRoute = 'https://maps.mapsong.com:8081/wap/user'

const uploadFind = ({filePath, name}, ...formData) => {
  return upload(`${url}/uploadMtl`, { filePath, name }, {
    token: getApp().globalData.token,
    appId,
  })
}

export default uploadFind;