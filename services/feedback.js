import { request } from '../utils/request';
import { appId } from '../config/secret.config';
import baseUrl from '../config/proxy.config';

const baseRoute = `${baseUrl}:2000/wap/user`;

const sendFeedback = content => 
  request(`${baseRoute}/feedback`, {
    body: {
      appId,
      token: getApp().globalData.token,
      content
    }
  });

export { sendFeedback };