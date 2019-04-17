# convergency-3d
集视三维客户端(小程序)




## Bugs

### 相机问题

#### 现象

wx.stopDeviceMotionListening (停止监听设备方向的变化) iOS上不能调用

#### 原因

未知

#### 解决

按照产品大哥说的, 先判断当前是否是iOS系统, 不是就调用接口监听设备方向, 是就...233

判断设备操作系统方法
```javascript
const isIOS = () => {
  let result;
  wx.getSystemInfo({
    success: res => {
      result = res.platform === 'ios';
    },
  });
  return result;
};
```

