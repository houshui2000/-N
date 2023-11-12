import copy from './components/copy.js'
export default {
  install (app) {
    // 指令 复制按钮
    app.directive('copy', copy)
  }
}