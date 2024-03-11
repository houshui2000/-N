import MYIntersectionObserver from "@/utils/IntersectionObserver.js"
import { ref } from "vue"

export const MyonUnmounted = () => {
  window.removeEventListener("scroll", scrollMy)
}

let blocktextcenter = {
  top: 0,
  height: 0,
  sectionleft: 0
}
export let footerRef = ref(false) // 判断底部是否出现 -- 出现左菜单不继续滚dog

export const MyonMounted = () => {
  let footer = document.querySelector("#footer")

  MYIntersectionObserver(
    footer,
    () => {
      footerRef.value = true
    },
    () => {
      footerRef.value = false
    }
  )
  const block = document.querySelector(".block.text-center")
  const section_left = document.querySelector(".section_left")
  blocktextcenter.top = block.offsetTop
  blocktextcenter.height = block.offsetHeight

  blocktextcenter.sectionleft = section_left.getBoundingClientRect().left

  window.addEventListener("scroll", scrollMy)
}
export const sticky = ref(null)
const scrollMy = () => {
  if (!sticky.value) return
  let s = document.documentElement.scrollTop || document.body.scrollTop

  if (footerRef.value) {
    const sectionright = document.querySelector(".section_right").offsetHeight
    sticky.value.style.position = "absolute"
    if (sectionright < sticky.value.offsetHeight) {
      sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight / 2) + "px"
    } else {
      sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight) + "px"
    }
    sticky.value.style.left = 0 + "px"
  } else if (s >= blocktextcenter.top + blocktextcenter.height) {
    sticky.value.style.position = "fixed"
    sticky.value.style.top = 85 + "px"
    sticky.value.style.left = blocktextcenter.sectionleft + "px"
  } else {
    sticky.value.style.position = "absolute"
    sticky.value.style.top = 0 + "px"
    sticky.value.style.left = 0 + "px"
  }
}





// 左侧滚动组件代码抽离
// onMounted(() => {
// let footer = document.querySelector("#footer")

// MYIntersectionObserver(
//   footer,
//   () => {
//     footerRef.value = true
//   },
//   () => {
//     footerRef.value = false
//   }
// )
// const block = document.querySelector(".block.text-center")
// const section_left = document.querySelector(".section_left")
// blocktextcenter.top = block.offsetTop
// blocktextcenter.height = block.offsetHeight

// blocktextcenter.sectionleft = section_left.getBoundingClientRect().left

// window.addEventListener("scroll", scrollMy)
// })
// let blocktextcenter = {
//   top: 0,
//   height: 0,
//   sectionleft: 0
// }
// let footerRef = ref(false) // 判断底部是否出现 -- 出现左菜单不继续滚dog
// const sticky = ref(null)
// const scrollMy = () => {
//   if (!sticky.value) return
//   let s = document.documentElement.scrollTop || document.body.scrollTop

//   if (footerRef.value) {
//     const sectionright = document.querySelector(".section_right").offsetHeight
//     sticky.value.style.position = "absolute"
//     if (sectionright < sticky.value.offsetHeight) {
//       sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight / 2) + "px"
//     } else {
//       sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight) + "px"
//     }
//     sticky.value.style.left = 0 + "px"
//   } else if (s >= blocktextcenter.top + blocktextcenter.height) {
//     sticky.value.style.position = "fixed"
//     sticky.value.style.top = 85 + "px"
//     sticky.value.style.left = blocktextcenter.sectionleft + "px"
//   } else {
//     sticky.value.style.position = "absolute"
//     sticky.value.style.top = 0 + "px"
//     sticky.value.style.left = 0 + "px"
//   }
// }