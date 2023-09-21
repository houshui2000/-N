import { createRouter, createWebHistory} from 'vue-router'
import childrenCase from './modules/case/index.js'
const routes = [{
        path: '/',
        name: 'container',
        component: () => import('@/views/container/index.vue'),
        props:true,
        // redirect: '/',
        children: [
            ...childrenCase
        ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    next();
})
export default router
