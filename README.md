# 游鱼崽旅行记录
游鱼崽旅行记录客户端 (微信小程序)



## Conventions

### Naming

- camelCase  (Both functions and variables)
- No using "e" as parameter of functions. Use `error/err` for errors, `event/evt` for events or you can use deconstruction assignment in ES6.

### Coding Style

- Try to "reduce" the code.





## Authors

<details>
<summary>View details</summary>
<pre><code>
├── pages
│   ├── find
│   │   ├── Author: 姚老师
</code></pre>
</details>





## Bugs

### Detection of direction of device

#### Symptoms

`wx.stopDeviceMotionListening` (which's used to stop detecting the change of direction of the device) doesn't work on iOS

#### Cause

Official doc says it's a bug of minapp itself that has been there for centuries.

#### Solvation

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

