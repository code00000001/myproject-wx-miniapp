/**
 * Title: 我的页面的数据请求接口封装
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */

import { request } from '../utils/request.js';

const baseRoute = 'http://maps.mapsong.com:2000/wap/user';


// Login to get token and some userinfo 
export const login = ({ 
  code, 
  appId, 
  signature, 
  rawData, 
  encryptedData, 
  iv 
}) => {
  const params = { code, appId, signature, rawData, encryptedData, iv, };
  console.log(params);
  return request(`${baseRoute}/login`, {
    body: params,
  });
};