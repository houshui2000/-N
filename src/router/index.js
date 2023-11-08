import { createRouter, createWebHistory } from 'vue-router'
import { childrenCase } from './modules/case/index.js'
import shoppingCentrechildren from './modules/shoppingCentre'
import gxsChildrenRouter from './modules/gxsChildrenRouter/index.js'
// import { ToLogin, NoLogin } from './InputTransfer.js'
export const routes = [{
  path: '/',
  name: 'container',
  component: () => import('@/layout/index.vue'),
  props: true,
  // redirect: '/',
  children: [
    {
      path: '/',
      redirect: 'information'
    },
    // ...ToLogin,
    // ...NoLogin
    ...childrenCase,
    ...shoppingCentrechildren,
    ...gxsChildrenRouter

  ]
}, {
  path: '/cardDetail3D/:id',//3D
  name: 'cardDetail3D',
  component: () => import('@/views/cardDetail3D/index.vue'),
  props: true,
  meta: {
    immediate: false, // 路由显示
    name: '3D',
    rightDao: true, // 右侧菜单栏 true 关闭 false 开启
    scrollTheSubtitles: true // 滚动字幕开启，关闭
  },
}, {
  path: '/app',
  name: 'app',
  component: () => import('@/views/app/index.vue'),
  meta: {
    name: 'app下载',
    immediate: false, // 路由显示
    rightDao: true, // 右侧菜单栏 true 关闭 false 开启
    gundong: true, // 实时左侧滚动组件false 开启，true关闭
    scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
  }
},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },

})

// export default router
