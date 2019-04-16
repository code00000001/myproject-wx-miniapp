
const isIOS = () => {
  let result;
  wx.getSystemInfo({
    success: res => {
      result = res.platform === 'ios';
    },
  });
  return result;
};
export { isIOS }
