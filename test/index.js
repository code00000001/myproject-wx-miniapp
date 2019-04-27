import { formatTimestamp, formatTime } from '../utils/util';

const st = '1556289943000';

const tp = '1556331051649'

const explainTimestamp = function(timestamp) {
  const now = new Date().getTime();
  const interval = parseInt(now) - parseInt(timestamp);
  console.log(now);
  console.log(interval);
  // x * 1000 毫秒时间戳
  if (interval > 2592000 * 1000) {
    return '30天前';
  } else if (interval > 129600 * 1000) {
    return '15天前';
  } else if (interval > 604800 * 1000) {
    return '一周前';
  } else if (interval > 259200 * 1000) {
    return '3天前';
  } else if (interval > 172800 * 1000) {
    return '2天前';
  } else if (interval > 86400 * 1000) {
    return '昨天';
  } else if (interval > 60 * 60 * 1000) {
    return  `${Math.floor(interval / 1000 / 60 / 60)}小时前`;
  } else {
    return `${Math.floor(interval / 1000 / 60)}分钟前`;
  }
}

console.log(explainTimestamp(st));

