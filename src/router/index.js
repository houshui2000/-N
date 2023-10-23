import { createRouter, createWebHistory } from 'vue-router'
import childrenCase from './modules/case/index.js'
const routes = [{
  path: '/',
  name: 'container',
  // component: () => import('@/views/container/index.vue'),
  component: () => import('@/layout/index.vue'),
  props: true,
  // redirect: '/',
  children: [
    ...childrenCase
  ]
},
  {
    path: "/lalala",
    component: () => import('@/views/indexss.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
