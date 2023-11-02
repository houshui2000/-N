<template>
  <div id="Mysecect" class="Mysecect">
    <div id="Mysecect_top" @click="Click_top" class="top">
      {{ computedTitle }}
      <slot name="top_icon_true" :dropdownMenu="dropdownMenu"></slot>
    </div>
    <section>
      <div
        :class="{
          articleXuan: !dropdownMenu
        }"
        ref="article"
        class="article"
      >
        <!--  v-if="dropdownMenu" -->
        <p
          v-for="(item, index) in props.mallHomepage"
          @click="mallHomepageClick(item)"
          :key="index"
          ref="option"
          class="option"
        >
          {{ item.label }}
        </p>
        <!-- <slot name="article_option" :mallHomepage="mallHomepage"></slot> -->
      </div>
    </section>
  </div>
</template>
<!--  <selectVue v-model:orderColumn="search.orderColumn" :mallHomepage="mallHomepage">
          <template #top_icon_true="{ dropdownMenu }">
            <div class="top_icon">
              <!~~ {{ dropdownMenu }} ~~>
              <p v-show="dropdownMenu">
                <el-icon><ArrowUpBold /></el-icon>
              </p>
              <p v-show="!dropdownMenu">
                <el-icon><ArrowDownBold /></el-icon>
              </p>
            </div>
          </template>
        </selectVue>-->
<!-- 传入的是数组 {value:, label:a} -->
<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  mallHomepage: { type: Array, required: true },
  orderColumn: { type: String, required: true }
})
onUnmounted(() => {
  article.value?.removeEventListener('transitionend', articletransition)
  document.removeEventListener('click', handleDocumentClick)
})
onMounted(() => {
  creatDom()
  articleDom()
  articletransition()
  document.addEventListener('click', handleDocumentClick)
  article.value.addEventListener('transitionend', articletransition)
})
const dropdownMenu = ref(true) // 控制下啦菜单 true 关闭
const Click_top = () => {
  dropdownMenu.value = !dropdownMenu.value
  articleDom()
}
const article = ref(null)
const articleXinxi = {
  height: ''
}
const computedTitle = computed(() => {
  const res = props.mallHomepage.find((item) => item.value === props.orderColumn)
  return res.label
})
// const option = ref(null)

const $emit = defineEmits(['update:orderColumn'])
const mallHomepageClick = (item) => {
  $emit('update:orderColumn', item.value)
}
const articletransition = (e) => {
  if (!dropdownMenu.value || !e) return
  if (e.propertyName == 'height') article.value.style.overflowY = 'hidden'
}
/**初始化 dom 高度信息 */
const creatDom = () => {
  let offsetheight = article.value.firstElementChild.offsetHeight
  if (!offsetheight) return
  articleXinxi.height = offsetheight * props.mallHomepage.length + 10 + 'px'
}
const articleDom = () => {
  if (dropdownMenu.value) {
    // border: 1px solid transparent;
    article.value.style.height = 0
    article.value.style.border = '0px solid transparent'
  } else {
    article.value.style.border = '1px solid transparent'
    article.value.style.overflowY = 'auto'
    article.value.style.height = articleXinxi.height
  }
}
const handleDocumentClick = (e) => {
  const ee = e || window.event // 浏览器兼容性
  var elem = ee.target || ee.srcElement
  while (elem) {
    // 循环判断至跟节点，防止点击的是div子元素
    if (elem.id && elem.id === 'Mysecect_top') {
      // 要隐藏的 ID
      return
    } // 如果还有别的div不想点击，就加else if判断
    elem = elem.parentNode
  }

  // 把他改为 flase  // 隐藏按钮
  dropdownMenu.value = true
}
watch(
  dropdownMenu,
  () => {
    articleDom()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.Mysecect {
  position: relative;
  width: 100%;
  .top {
    position: relative;
    width: 100%;
    height: 48px;
    padding: 14px;
    font: normal normal 400 14px 'PingFang SC';
    color: white;
  }
  section {
    width: 100%;
    .articleXuan {
    }
    .article {
      transform: translateY(-2px);
      overflow-y: hidden;
      overflow-x: hidden;
      position: absolute;
      width: calc(100% + 5px);
      // padding-right: 8px;
      max-height: 300px;
      z-index: 999;
      transition: height 0.5s;
      padding-top: 8px;

      /*滚动条样式*/
      &::-webkit-scrollbar {
        width: 3px;
      }
      // 滚轮样式
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background-color: rgba($color: rgba(255, 255, 255, 0.2), $alpha: 0.6) !important;
      }

      // 滚轮背景
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: #000819;
      }
    }
    .option {
      height: 40px;
      width: calc(100%);
      // background-color: salmon;  background-color: #000819;
      background-color: #000819;
      font: normal normal 400 14px 'PingFang SC';
      color: white;
      padding: 0 15px;
      overflow: hidden;
      @include Myflex();
      &:hover {
        background-color: wheat;
      }
    }
  }
}
</style>
