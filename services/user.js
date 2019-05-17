/**
 * Title: 我的页面的数据请求接口封装
 * Author: xxx
 * Date: xxxx-xx-xx xx:xx
 */
import { request } from '../utils/request';
import { appId } from '../config/secret.config';
import baseUrl from '../config/proxy.config';

const baseRoute = `${baseUrl}:2000/wap/user`;


// Login to get token and some userinfo 
const login = ({ 
  code, 
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


const fetchPosts = ({ pageSize, pageIndex }) =>
  request(`${baseUrl}:8082/wap/user/publishedSections`, {
    body: {
      token: getApp().globalData.token,
      appId,
      pageSize,
      pageIndex
    }
  });


const fetchRecordPointUrl = () =>
  request(`${baseRoute}/getMtlManagePage`, {
    body: {
      appId,
      token: getApp().globalData.token
    }
  });


const fetchSectionPointUrl = sectionId =>
  request(`${baseRoute}/sectionPage`, {
    body: {
      appId,
      token: getApp().globalData.token,
      sectionId
    }
  });


const fetchLatestUserInfo = () => 
  request(`${baseRoute}/uniteFollowingSectionMtl`, {
    body: {
      appId,
      token: getApp().globalData.token
    }
  })

const fetchRemoveFollowId = followId =>
  request(`${baseUrl}:8082/wap/user/removeFollowId`, {
    body: {
      appId,
      token: getApp().globalData.token,
      followId
    }
  })

export { 
  login, 
  fetchPosts, 
  fetchFollowings,
  fetchLatestUserInfo, 
  fetchRecordPointUrl, 
  fetchSectionPointUrl,
  fetchRemoveFollowId
};