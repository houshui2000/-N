import { createRouter, createWebHistory } from 'vue-router'

import { ToLogin, NoLogin } from './InputTransfer.js'
const routes = [{
  path: '/',
  name: 'container',
  component: () => import('@/layout/index.vue'),
  props: true,
  // redirect: '/',
  children: [
    {
      path: '/',
      redirect: 'shoppingCentre'
    },
    ...ToLogin,
    ...NoLogin
  ]
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  },

})

export default router
