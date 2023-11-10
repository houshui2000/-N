<template>
  <div id="homePC">
    <NavVue />
    <!-- <Carousel v-if="!route.meta.gundong" /> -->
    <ScrollZiMuVue @click="scrollTo" v-if="!route.meta.scrollTheSubtitles" :title="ScrollZiMuVueFRF" />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
    <uploadAvatarVue v-model:errDialoVueUpdate="dialogVisiblePay" :ScrollZiMuVueFRF="ScrollZiMuVueFRF" />
  </div>
</template>
<script setup name="layout">
import NavVue from "./components/top/index.vue"
import FooterVue from "./components/footer/index.vue"
// import Carousel from '@/components/Carousel/index.vue'
import { useRoute } from "vue-router"
import uploadAvatarVue from "./components/gongaoDealo/index.vue"
import ScrollZiMuVue from "./components/ScrollZiMu/index.vue"
import { indexsysNotice } from "@/network/api"
import { ref } from "vue"
const route = useRoute()
const ScrollZiMuVueFRF = ref()
const dialogVisiblePay = ref(false) //公告弹框
const indexsysNoticeFun = async () => {
  const res = await indexsysNotice()
  console.log(res)
  ScrollZiMuVueFRF.value = res.data
}
indexsysNoticeFun()
// watchEffect(() => {
//   if (route.query.code) {
//     console.log('dayin', route.query.code)
//     weixinLogin({ tencentCode: route.query.code }).then((res) => {
//       console.log('接口參數', res)
//     })
//   }
// })
const scrollTo = () => {
  dialogVisiblePay.value = !dialogVisiblePay.value
}
</script>
<style lang="scss" scoped>
#homePC {
  // background: black;
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.center {
  // background-color: rgba(15, 12, 16, 0.7);
  position: relative;
  min-height: 1000px;
  padding-bottom: 102px;
  // margin-top: 70px;
  padding-top: 70px;
}
</style>
