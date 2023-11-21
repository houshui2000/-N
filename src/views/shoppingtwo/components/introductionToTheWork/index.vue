<template>
  <div class="IntroTpTheWorkVueJIe">
    <div class="setction scrollStyle">
      <!-- 作品介绍 -->
      <div class="center_bottom_dv">
        <div class="ql-editor" v-html="creatDataFuWenBen"></div>
      </div>
      <div class="img">
        <img :src="item" v-for="(item, index) in IMgURl" :key="index" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, nextTick, computed, onMounted } from "vue"
// import { useStore } from "@/pinia/index"
import { useRoute } from "vue-router"

import { shopproducintroduction } from "@/network/shoppingCentre/shoppingCentre"
const creatData = inject("creatData")

const creatDataFuWenBen = ref("")
const route = useRoute()
const init = async () => {
  const res = await shopproducintroduction({
    vaultId: route.query.vaultId
  })

  creatDataFuWenBen.value = res.data

  nextTick(() => {
    let p = document.querySelectorAll(".IntroTpTheWorkVueJIe .center_bottom_dv p")

    if (p) {
      p.forEach((item) => {
        item.style.width = "100%"
        item.style.display = "flex"
        item.style.justifyContent = "center"
        item.style.alignItems = "center"
        item.style.flexDirection = "column"
      })
    }

    //

    let img = document.querySelector(".center_bottom_dv img")

    if (!img) return
    img.style.maxWidth = "80%"
  })
}
// const { loginStore } = useStore()
// let url =loginStore.cossUrl +
const IMgURl = computed(() => {
  return JSON.parse(creatData.value.imgTextUrl).map((item) => item)
})

onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>
.center_bottom_dv {
  font-size: 12px;
  letter-spacing: 2px !important;
}
.IntroTpTheWorkVue {
  padding: 5px;
  // height: 626px;
  margin-top: 15px;
  width: 100%;
  border-radius: 4px;
  @include bordergradientMY();
  .setction {
    min-height: 600px;
    padding: 25px;
    width: 100%;
    // overflow: auto;
    color: white;
    height: 100%;
  }
}
.scrollStyle {
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: linear-gradient(180deg, #de01ca 0%, #3340fe 100%);
    // opacity: 0.5;
  }
}
img {
  width: 50%;
  // height: 349px;
  // margin-right: 10px;
}
.img {
  @include Myflex(center);
  flex-direction: column;
}
</style>
