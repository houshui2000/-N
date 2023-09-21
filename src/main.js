import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Config from '@/config/index.js'
import '@/styles/common.scss' // global css
import router from './router/index.js'
import store from "./store"

const app = createApp(App)
app.config.globalProperties.$config = Config // 公共过滤器方法
app.use(router)
app.use(store)
app.mount('#app')

