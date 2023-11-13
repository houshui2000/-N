// // rem等比适配配置文件
// // 基准大小
// const baseSize = 10;
// // 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
//   let body = document.querySelector("body")
//   let scale = body.clientWidth
//   if (scale <= 1200) {
//     scale = 1200
//     body.style.overflowX = 'auto'
//   } else {
//     body.style.overflowX = 'hidden'
//   }
//   // if (scale > 1920) {
//   //   scale = 1920
//   // }

//   const shiji = scale / 1920;
//   // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
//   document.documentElement.style.fontSize =
//     baseSize * Math.min(shiji, 2) + "px";
// }
// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem();
// };

