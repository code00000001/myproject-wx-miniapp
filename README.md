# convergency-3d
集视三维客户端(小程序)




## Bugs

### Detection of direction of divice

#### Symptoms

wx.stopDeviceMotionListening (which used to stop detecting the change of direction of the divice) doesn't work on iOS

#### Cause

Office doc says it's bug of minapp.

#### 解决

Our boss of products let us first detect which OS the user is using. If not iOS, continue to detect the change of diretion of the divice, otherwise ...233

Method that detects which the OS
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

