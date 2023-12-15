
import SvgIcon from './SvgIcon/index.vue'
import missingWakeupPage from './missingWakeupPage/index.vue'
import selectVue from './select/index.vue'

// export const componentPligin = () => {
export default function install (app) {
  app.component('SvgIcon', SvgIcon)
  app.component('selectVue', selectVue)
  app.component('missingWakeupPage', missingWakeupPage)

}
//     return  install(app){
//     // app.component('组件名字',组件配置对象)
//     app.component('MessageBox',MessageBox)
//   }
// }