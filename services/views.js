/**
 * Title: 看点页面的数据请求接口封装
 * Author: XJJ
 * Date: 2019-04-02 15:57
 */

import { request }  from '../utils/request.js';

const baseRoute = 'https://jsonplaceholder.typicode.com';

const fetchTestData = params => {
  return request(`${baseRoute}/todos`, {
    method: 'GET',
    body: params,
  });
}

export default fetchTestData;