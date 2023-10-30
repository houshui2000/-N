import { createRouter, createWebHistory } from 'vue-router'
import childrenCase from './modules/case/index.js'
import shoppingCentrechildren from './modules/shoppingCentre/index.js'
const routes = [{
  path: '/',
  name: 'container',
  // component: () => import('@/views/container/index.vue'),
  component: () => import('@/layout/index.vue'),
  props: true,
  // redirect: '/',
  children: [
    {
      path: '/',
      redirect: 'shoppingCentre'
    },
    ...childrenCase,
    ...shoppingCentrechildren
  ]
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
