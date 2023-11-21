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
  meta: {
    immediate: false, // 路由显示
  },
  children: [
    {
      path: '/',
      redirect: 'information',
      meta: {
        immediate: false, // 路由显示
      },
    },
    // ...ToLogin,
    // ...NoLogin
    ...childrenCase,
    ...shoppingCentrechildren,
    ...gxsChildrenRouter

  ]
}, {
  path: '/cardDetail3D',//3D
  name: 'cardDetail3D',
  component: () => import('@/views/cardDetail3D/index.vue'),
  props: true,
  meta: {
    login: false, // true 需要登录， false 不需要登录
    immediate: false, // 路由显示
    name: '3D',
    rightDao: true, // 右侧菜单栏 true 关闭 false 开启
    scrollTheSubtitles: true // 滚动字幕开启，关闭
  },
},
{
  path: '/pptiform',//3D
  name: 'pptiform',
  component: () => import('@/views/pptiform/index.vue'),
  props: true,
  meta: {
    login: false, // true 需要登录， false 不需要登录
    immediate: false, // 路由显示
    name: 'pptiform',
    rightDao: true, // 右侧菜单栏 true 关闭 false 开启
    scrollTheSubtitles: true // 滚动字幕开启，关闭
  },
},
{
  path: '/invitation',//预约
  name: 'invitation',
  component: () => import('@/views/invitation/index.vue'),
  props: true,
  meta: {
    login: false, // true 需要登录， false 不需要登录
    immediate: false, // 路由显示
    name: '预约',
    rightDao: true, // 右侧菜单栏 true 关闭 false 开启
    scrollTheSubtitles: true // 滚动字幕开启，关闭
  },
},

{
  path: '/app',
  name: 'app',
  component: () => import('@/views/app/index.vue'),
  meta: {
    login: false, // true 需要登录， false 不需要登录
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
  // history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },

})

// export default router
