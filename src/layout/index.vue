<template>
  <div id="homePC">
    <NavVue />
    <!-- <Carousel v-if="!route.meta.gundong" /> -->
    <ScrollZiMuVue @click="scrollTo" v-if="!route.meta.scrollTheSubtitles" />
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
import { ref, watch } from "vue"
import { useStore } from "@/pinia"

const { loginStore } = useStore()

const route = useRoute()
const ScrollZiMuVueFRFDDD = ref("")
const dialogVisiblePay = ref(false) //公告弹框

const indexsysNoticeFun = async () => {
  const res = await indexsysNotice()
  ScrollZiMuVueFRFDDD.value = res.data
}
indexsysNoticeFun()
const scrollTo = () => { 
  indexsysNoticeFun()
  dialogVisiblePay.value = !dialogVisiblePay.value
}
watch(
  () => loginStore.token,
  (newVal) => {
    console.log(newVal,'/newVal')
    if (!newVal) return
    scrollTo()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
#homePC {
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.center {
  position: relative;
  min-height: 1500px;
  padding-bottom: 102px;
  padding-top: 70px;
}
</style>
