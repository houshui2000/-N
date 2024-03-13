import { App } from 'vue'

/**
 * 你的文件夹是什么名字，全局公共组建就是什么名字
 */
const components = import.meta.glob('./*/index.vue', { eager: true, import: 'default' })
export default function install(app: App) {
  Object.entries(components).forEach(([path, definition]: any) => {
    // 这个是全局组件下方有 文件夹
    const componentName = path.split('/')[1]
    app.component(componentName, definition)
  })
}


// import SvgIcon from './SvgIcon/index.vue'
// import CeShi from './CeShi/index.vue'

// export default function install(app: App) {
//   app.component('SvgIcon', SvgIcon)
//   app.component('CeShi', CeShi)
// }
