import { createApp } from 'vue'
import App from './App.vue'
import Config from '@/config/index.js'
import '@/styles/index.scss' // global css
import router from './router/index.js'
import { createPinia } from 'pinia'
import './permission'
const app = createApp(App);
const pinia = createPinia()
app.config.globalProperties.$config = Config // 公共过滤器方法
app.use(router)
// app.use(store)
app.use(pinia); // 注册 pinia
app.mount('#app')

