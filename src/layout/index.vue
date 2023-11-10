<template>
  <div id="homePC">
    <NavVue />
    <!-- <Carousel v-if="!route.meta.gundong" /> -->
    <ScrollZiMuVue @click="scrollTo" v-if="!route.meta.scrollTheSubtitles" :title="ScrollViseBleFComponent" />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
    <uploadAvatarVue v-model:errDialoVueUpdate="dialogVisiblePay" :ScrollZiMuVueFRF="ScrollZiMuVueFRFDDD" />
  </div>
</template>
<script setup name="layout">
import NavVue from "./components/top/index.vue"
import FooterVue from "./components/footer/index.vue"
// import Carousel from '@/components/Carousel/index.vue'
import { useRoute } from "vue-router"
import uploadAvatarVue from "./components/gongaoDealo/index.vue"
import ScrollZiMuVue from "./components/scrollZiMu/index.vue"
import { indexsysNotice } from "@/network/api"
import { ref, computed } from "vue"
const route = useRoute()
const ScrollZiMuVueFRFDDD = ref("")
const dialogVisiblePay = ref(false) //公告弹框
const ScrollViseBleFComponent = computed(() => {
  //   const convertToPlain = async () => {
  //   const res = await indexsysNotice() // 公告接口
  var divElement = document.createElement("div") // 设置HTML给它
  divElement.innerHTML = ScrollZiMuVueFRFDDD.value // 获取文本内容
  const res = divElement.textContent || divElement.innerText || ""

  // }
  return res
})
const indexsysNoticeFun = async () => {
  const res = await indexsysNotice()
  ScrollZiMuVueFRFDDD.value = res.data
}
indexsysNoticeFun()
// watchEffect(() => {
//   if (route.query.code) {
//     weixinLogin({ tencentCode: route.query.code }).then((res) => {
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
  min-height: 1500px;
  padding-bottom: 102px;
  // margin-top: 70px;
  padding-top: 70px;
}
</style>
