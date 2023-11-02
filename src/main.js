import { createApp } from 'vue'
import App from './App.vue'
import Config from '@/config/index.js'
import '@/styles/index.scss' // global css
import router from './router/index.js'
import { createPinia } from 'pinia'
import './permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
// import './utils/rem'
import './utils/forbid.js'
// 引入字体样式文件
import './assets/fonts/font.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App);
const pinia = createPinia()
app.config.globalProperties.$config = Config // 公共过滤器方法
app.use(router)
// app.use(store)
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(pinia); // 注册 pinia
app.mount('#app')

