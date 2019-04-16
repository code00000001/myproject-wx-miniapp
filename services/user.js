/**
 * Title: 我的页面的数据请求接口封装
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */
import { request } from '../utils/request';
import { appId } from '../config/secret.config';

const baseRoute = 'https://maps.mapsong.com:2000/wap/user';


// Login to get token and some userinfo 
const login = ({ 
  code, 
  appId, 
  signature, 
  rawData, 
  encryptedData, 
  iv 
}) => {
  return request(`${baseRoute}/login`, {
    body: { code, appId, signature, rawData, encryptedData, iv, },
  });
};

const fetchFollowings = ({ pageSize, pageIndex }) => 
  request(`${baseRoute}/getFollowings`, {
    body: {
      token: getApp().globalData.token,
      appId,
      pageSize,
      pageIndex
    }
  });

module.exports = { login, fetchFollowings }