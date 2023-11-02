
import MessageBox from './MessageBox/index.vue'

export const componentPligin = {
  install(app){
    // app.component('组件名字',组件配置对象)
    app.component('MessageBox',MessageBox)
  }
}
