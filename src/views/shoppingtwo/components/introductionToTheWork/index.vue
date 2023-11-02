<template>
  <div class="IntroTpTheWorkVue">
    <div class="setction scrollStyle">
      <!-- 作品介绍 -->
      <div v-html="creatData.productIntroduction"></div>
      <img :src="item" v-for="(item, index) in IMgURl" :key="index" alt="" />
    </div>
  </div>
</template>
<!-- <script setup>
import { inject, computed } from 'vue'
const creatData = inject('creatData')
let url = 'http://cardjing.oss-cn-qingdao.aliyuncs.com/'
const IMgURl = computed(() => {
  return JSON.parse(creatData.value.imgTextUrl).map((item) => url + item)
})
</script> -->
<script setup>
import { inject, computed } from 'vue'
const creatData = inject('creatData')
import { useStore } from '@/pinia/index'
const { loginStore } = useStore()
// let url =
const IMgURl = computed(() => {
  return JSON.parse(creatData.value.imgTextUrl).map((item) => loginStore.cossUrl + item)
})
</script>
<style lang="scss" scoped>
.IntroTpTheWorkVue {
  padding: 5px;
  height: 626px;
  margin-top: 15px;
  width: 100%;
  border-radius: 4px;
  @include bordergradientMY();
  .setction {
    width: 100%;
    overflow: auto;
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
