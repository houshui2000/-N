import { createRouter, createWebHistory } from 'vue-router'

import { ToLogin, NoLogin } from './InputTransfer.js'
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
    ...ToLogin,
    ...NoLogin
  ]
}, {
  path: '/cardDetail3D',//app下载页
  name: 'cardDetail3D',
  component: () => import('@/views/cardDetail3D/index.vue'),
  props: true,
  meta: {
    immediate: false, // 路由显示
    name: 'app下载页',
    scrollTheSubtitles: true // 滚动字幕开启，关闭
  },
}, {
  path: '/app',
  name: 'app',
  component: () => import('@/views/app/index.vue'),
  meta: {
    name: 'app下载',
    immediate: false, // 路由显示
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
