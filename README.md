# convergency-3d
集视三维客户端(小程序)




## Bugs

### Detection of direction of device

#### Symptoms

`wx.stopDeviceMotionListening` (which's used to stop detecting the change of direction of the device) doesn't work on iOS

#### Cause

Official doc says it's a bug of minapp itself that has been there for centuries.

#### 解决

Our boss of products let us first detect which OS the user is using. If not iOS, continue to detect the change of diretion of the device, otherwise ...233

Method that detects which the OS is
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

