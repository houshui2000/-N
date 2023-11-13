import MEssageBox from './index.vue'
import { createVNode, render } from 'vue'
// MessageBoxVue({
//   title: 'asdsadsa'
// })
// import MessageBoxVue from '@/components/MessageBox/index.js'

export default (props) => {
  //

  const div = document.createElement('div')
  div.classList.add('xtxMeaage_container')
  document.body.appendChild(div)
  const vnode = createVNode(MEssageBox, props) // 获取到 DOM 节点
  vnode.props.fude = true
  render(vnode, div)
  setTimeout(() => {
    render(null, div)
    const xtxMeaagecontainer = document.querySelector('.xtxMeaage_container')
    document.body.removeChild(xtxMeaagecontainer)
  }, 1000)
}
