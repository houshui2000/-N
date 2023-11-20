// // 入口文件
// import { childrenCase } from './modules/case/index.js'
// import shoppingCentrechildren from './modules/shoppingCentre'
// import gxsChildrenRouter from './modules/gxsChildrenRouter/index.js'
// /**有登陆 */
// export const ToLogin = [
//   {
//     path: '/cardDetail3D',//3D
//     name: 'cardDetail3D',
//     component: () => import('@/views/cardDetail3D/index.vue'),
//     props: true,
//     meta: {
//       immediate: false, // 路由显示
//       name: 'app下载页',
//       scrollTheSubtitles: true // 滚动字幕开启，关闭
//     },
//   }, {
//     path: '/pptiform',//3D
//     name: 'pptiform',
//     component: () => import('@/views/pptiform/index.vue'),
//     props: true,
//     meta: {
//       immediate: false, // 路由显示
//       name: 'pptiform',
//       rightDao: true, // 右侧菜单栏 true 关闭 false 开启
//       scrollTheSubtitles: true // 滚动字幕开启，关闭
//     },
//   },

//   ...gxsChildrenRouter
// ]

// // 无登陆
// export const NoLogin = [
//   {
//     path: '/app',
//     name: 'app',
//     component: () => import('@/views/app/index.vue'),
//     meta: {
//       name: 'app下载',
//       immediate: false, // 路由显示
//       rightDao: true, // 右侧菜单栏 true 关闭 false 开启
//       gundong: true, // 实时左侧滚动组件false 开启，true关闭
//       scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
//     },
//   },
//   ...childrenCase,
//   ...shoppingCentrechildren
// ]