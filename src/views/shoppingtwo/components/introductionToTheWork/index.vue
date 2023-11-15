<template>
  <div class="IntroTpTheWorkVue">
    <div class="setction scrollStyle">
      <!-- 作品介绍 -->
      <div class="center_bottom_dv">
        <div class="ql-editor" v-html="creatData.productIntroduction"></div>
      </div>
      <img :src="item" v-for="(item, index) in IMgURl" :key="index" alt="" />
    </div>
  </div>
</template>
<script setup>
import { inject, computed } from "vue"
// import { useStore } from "@/pinia/index"
const creatData = inject("creatData")
// const { loginStore } = useStore()
// let url =loginStore.cossUrl +
const IMgURl = computed(() => {
  return JSON.parse(creatData.value.imgTextUrl).map((item) => item)
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
  width: 247px;
  height: 349px;
}
</style>
