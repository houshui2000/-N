import { createApp } from 'vue'
import './styles/index.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './utils/rem.ts'
import './utils/forbid.ts'
import { router } from "@/router/index.ts";
import componentPligin from "@/components/allcomponents/index.ts"
const pinia = createPinia()

const app = createApp(App)
app.use(componentPligin)
app.use(ElementPlus)
app.use(pinia); // 注册 pinia
app.use(router)
app.mount('#app')
