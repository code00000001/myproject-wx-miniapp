import { formatTimestamp, formatTime } from '../utils/util';

const st = '1563528645000';


console.log(formatTimestamp(st));



const testList = [{
  name: 'acv'
}, {
  name: 'gfh'
}, {
  name: 'yru'
}]

const format = list => {
  list.forEach(item => item.name = 'aaa');
  return list;
};

console.log(format(testList));
console.log(testList);