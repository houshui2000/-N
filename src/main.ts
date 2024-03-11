import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from '@/components/index.ts' //导入全局注册的组件


createApp(App).use(components).mount('#app')
