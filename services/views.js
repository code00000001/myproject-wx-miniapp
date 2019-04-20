/**
 * Title: 看点页面的数据请求接口封装
 * Author: XJJ
 * Date: 2019-04-02 15:57
 */

import { request }  from '../utils/request.js';
import baseUrl from '../config/proxy.config';
import { appId } from '../config/secret.config';

const baseRoute = `${baseUrl}:2000/wap/user`;

export const fetchViewPointUrl = () => 
  request(`${baseRoute}/viewPoint`, {
    body: {
      appId,
      token: getApp().globalData.token
    }
  });
