
const Myevent = () => {
  window.addEventListener('mousewheel', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  }, { passive: false });

  //firefox
  window.addEventListener('DOMMouseScroll', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  }, { passive: false });
  document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey === true || event.metaKey === true)
      && (event.which === 61 || event.which === 107
        || event.which === 173 || event.which === 109
        || event.which === 187 || event.which === 189)) {
      event.preventDefault();
    }
  }, false);
}
if (import.meta.env.MODE !== 'development') {
  Myevent()
}

/**
 *判断设备
 * @returns true pc ,false 移动
 */
export const _isMobile = () => {
  // let flag = window.navigator.userAgent.match(
  //   /(phone|pad|pod|iPhone|iPod|iPad|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  // );
  // if (flag) store.commit('phoneModel/saveModel', flag[0] ? flag[0] : null)
  // console.log(store.state.phoneModel.model)
  // if (flag == 'iPad,iPad') {
  //   return true // pc
  // }
  // if (flag) {
  //   return false// 移动
  // }
  // return true
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    return false
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    return false
  } else {
    //pc
    return true
  }
}