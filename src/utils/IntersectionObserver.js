
const MYIntersectionObserver = (el, callBack, callElseBack = () => { }) => {
  // const src =
  //   console.log(src)
  const intersectionObserver = new IntersectionObserver((entries) => {
    // 如果 intersectionRatio 为 0，则目标在视野外，
    // 我们不需要做任何事情。
    if (entries[0].intersectionRatio <= 0) {
      // console.log('不可见')
      callElseBack()
      return
    }
    // intersectionObserver.unobserve(el)

    // console.log('可见')
    callBack()
  }, {
    threshold: 0
  })
  // 开始监听
  intersectionObserver.observe(el)

}
export default MYIntersectionObserver