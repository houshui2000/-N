import MEssageBox from './index.vue'
import { createVNode, render } from 'vue'
// MessageBoxVue({
//   title: 'asdsadsa'
// })
// import MessageBoxVue from '@/components/MessageBox/index.js'

export default (props) => {
  let div = document.querySelector('.xtxMeaage_container')
  if (!div) {
    div = document.createElement('div')
    div.classList.add('xtxMeaage_container')
    div.style.transition = 'all 1s'
    div.style.minHeight = '40px'
    div.style.position = 'fixed'
    div.style.top = '100px'
    div.style.left = '50%'
    div.style.transform = 'translateX(-50%)'
    div.style.zIndex = '99999'
    document.body.appendChild(div)

  }
  let xtxMeaagecontainerErzi = document.createElement('div')
  xtxMeaagecontainerErzi.classList.add('xtxMeaagecontainerErzi')
  div.appendChild(xtxMeaagecontainerErzi)

  const vnode = createVNode(MEssageBox, props) // 获取到 DOM 节点
  // vnode.props.fude = true
  render(vnode, xtxMeaagecontainerErzi)
  // setTimeout(() => {
  //   render(null, div)
  //   const xtxMeaagecontainer = document.querySelector('.xtxMeaage_container').children[0]
  //   console.log(xtxMeaagecontainer)

  //   document.querySelector('.xtxMeaage_container').removeChild(xtxMeaagecontainer)
  // }, 2000)
}
