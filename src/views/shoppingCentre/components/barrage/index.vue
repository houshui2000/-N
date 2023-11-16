<template>
  <div id="barrage">
    <vueDanmaku
      v-model:danmus="danmus.data"
      loop
      style="height: 100%; width: 100%"
      :channels="2"
      :speeds="80"
      :top="36"
      :right="46"
      :debounce="2000"
      useSlot
      ref="danmakuRef"
      randomChannel
    >
      <!-- index, -->
      <template v-slot:dm="{ danmu }">
        <div class="barrageItemBox">
          <div class="huizheng">
            <div class="avatar">
              <img :src="danmu.avatar" alt="" />
            </div>
            <div class="name danyi">{{ danmu.nickname }}获得</div>
            <div class="card">
              <img class="" :src="danmu.productImgUrl" alt="" />
            </div>
          </div>
        </div>
      </template>
    </vueDanmaku>
  </div>
</template>

<!-- /*
弹幕组件
channels：轨道数量
speeds：弹幕速度（每秒移动的像素数）
debounce：弹幕刷新频率(ms)
randomChannel：随机选择轨道插入
top：弹幕垂直间距(px)
right：弹幕水平间距(px)
*/ -->

<script setup>
import vueDanmaku from "vue3-danmaku"
import { onMounted, reactive, ref } from "vue"
import { shopbulletcommencommentt } from "@/network/shoppingCentre/shoppingCentre"
// const { proxy } = getCurrentInstance()
const danmakuRef = ref(null)

onMounted(() => {
  danmakuRef.value.play()
})

// 弹幕
const getshopbulletcomment = () => {
  shopbulletcommencommentt().then((result) => {
    if (result && result.code === 200 && result.data) {
      danmus.data = result.data
    }
  })
}
getshopbulletcomment()

setInterval(() => {
  getshopbulletcomment()
}, 20000)
const danmus = reactive({
  data: []
})
</script>
<!--
<script setup>
import vueDanmaku from "vue3-danmaku"
import { getCurrentInstance, onMounted, reactive, ref } from "vue"
// import { shopbulletcomment } from '@/network/shoppingCentre/shoppingCentre.js'
const { proxy } = getCurrentInstance()
const danmakuRef = ref(null)

onMounted(() => {
  danmakuRef.value.play()
})
const danmus = reactive({
  data: [
    { avatar: proxy.$config.$testmao, hd: proxy.$config.$tteshd, user: "大熊" },
    { avatar: proxy.$config.$testmao, hd: proxy.$config.$tteshd, user: "大熊妈妈二舅姥爷的表弟" }
  ]
})
// const creat = async () => {
//   const res = await shopbulletcomment()
//   // danmus.data = res
// }
// setTimeout(() => {
//   // creat()
// }, 1000)
</script> -->

<style scoped lang="scss">
@import "index.scss";
</style>
