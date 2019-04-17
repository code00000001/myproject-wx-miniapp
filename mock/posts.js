import Mock from 'mockjs';

const posts = () => {
  return Mock.mock({
    'posts|1-10': [{
      "name": "我是专题名称",
      "readCount|+20": 120,
      "wowCount|+4": 25,
      "commentCount|+2": 56,
      "publishTime": "2019-04-01",
      "url": "https://drscdn.500px.org/photo/302204265/q%3D80_m%3D2000/v2?webp=true&sig=25925bef24d12cd04266cad17707c6908b7eb3bb6d20ae3409b8162244901daa",
      "description": "我是专题描述"
    }]
  })
};

export default posts;