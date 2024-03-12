import { createRouter, createWebHistory } from 'vue-router'
// import { ToLogin, NoLogin } from './InputTransfer.js'
export const routes = [
  {
    path: '/',
    name: 'container',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/Setbarter',
        meta: {

        },
      },
      {
        path: '/Setbarter',
        name: 'Setbarter',
        component: () => import('@/views/Setbarter/index.vue'),
      }
    ]
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
