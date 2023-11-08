// 入口文件
import { childrenCase } from './modules/case/index.js'
import shoppingCentrechildren from './modules/shoppingCentre'
import gxsChildrenRouter from './modules/gxsChildrenRouter/index.js'
/**有登陆 */
export const ToLogin = [
  {
    path: '/cardDetail3D',//3D
    name: 'cardDetail3D',
    component: () => import('@/views/cardDetail3D/index.vue'),
    props: true,
    meta: {
      immediate: false, // 路由显示
      name: 'app下载页',
      scrollTheSubtitles: true // 滚动字幕开启，关闭
    },
  },
  ...gxsChildrenRouter
]

// 无登陆
export const NoLogin = [
  ...childrenCase,
  ...shoppingCentrechildren
]