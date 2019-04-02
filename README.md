# convergency-3d
集视三维客户端(小程序)



#### find界面

查询登录状态，在无权限的情况下无法进行相机访问

```javascript
<button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
<button wx:else></button>
```



相机确定后跳转edit界面

```javascript
const tempFilePaths = res.tempFilePaths;
wx.navigateTo({
  url: '../edit/edit?path='+tempFilePaths
})
```



edit组件在onLoad时解析options.path作为image的src

```javascript
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.path)
    this.setData({
      src: options.path
    })
  }
```

