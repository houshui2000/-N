
import SvgIcon from './SvgIcon/index.vue'
import InputVue from "./Input/index.vue"
// export const componentPligin = () => {
export default function install (app) {
  app.component('SvgIcon', SvgIcon)
  app.component('InputVue', InputVue)
}
//     return  install(app){
//     // app.component('组件名字',组件配置对象)
//     app.component('MessageBox',MessageBox)
//   }
// }