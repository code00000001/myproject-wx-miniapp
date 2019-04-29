
const isIOS = () => {
  let result;
  wx.getSystemInfo({
    success: ({ platform }) => {
      result = platform === 'ios';
    },
    fail: () => { result = false }
  });
  return result;
};

const isAuthorized = () => {
  let result;
  wx.getSetting({
    success: ({ authSetting }) => {
      result = authSetting['scope.userInfo'];
    },
    fail: () => { result = false }
  });
  return result;
};

export { isIOS, isAuthorized };
