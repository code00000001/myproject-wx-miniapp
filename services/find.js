/**
 * Title: 发现页面的数据请求接口封装
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */

import { upload } from '../utils/request';
import { appId } from '../config/secret.config';
import baseUrl from '../config/proxy.config';

const baseRoute = `${baseUrl}:8082/wap/user`;

const uploadFind = ({filePath, name}, { gps, posture, createTime, title, description }) => {
  return upload(`${baseRoute}/uploadMtl`, { filePath, name }, {
    token: getApp().globalData.token,
    appId,
    gps,
    posture,
    createTime,
    title,
    description
  })
}

export { uploadFind };