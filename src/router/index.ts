import { createRouter, createWebHistory } from 'vue-router'

export const Layout = () => import("@/layout/index.vue");

const constantRoutes = [
  {
    path: '/CeShi',
    name: 'CeShi',
    component: Layout,
    mata: { title: 'CeShi', icon: 'form' },
    children: [
      {
        path: '',
        name: 'CeShi',
        component: () => import('@/views/CeShi/index.vue'),
        meta: { title: 'CeShi', icon: 'form' }
      }
    ]
  }, {
    path: '/CeShi2',
    name: 'CeShi2',
    component: Layout,
    mata: { title: 'CeShi2', icon: 'form' },
    children: [
      {
        path: '',
        name: 'CeShi2',
        component: () => import('@/views/CeShi2/index.vue'),
        meta: { title: 'CeShi2', icon: 'form' }
      }
    ]
  },
]
export const routes = [
  {
    path: '/',
    name: 'container',
    component: Layout,
    meta: {
      immediate: false, // 路由显示
    },
    children: [
      {
        path: '/',
        redirect: '/CeShi',
        meta: {
          immediate: false, // 路由显示
        },
      },
      // ...constantRoutes
    ]
  },
  ...constantRoutes
]

export const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: routes,
  // routes: [{ // 这是做动态路由打开即可
  //   path: "/:pathMatch(.*)*",
  //   component: () => import("@/views/404/index.vue"),
  // },],
  scrollBehavior() {
    return { top: 0 }
  },

})

// export default router
