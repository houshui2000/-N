<template>
  <div id="homePC">
    <NavVue />
    <Carousel v-if="!route.meta.gundong" />
    <ScrollZiMuVue
      v-if="!route.meta.scrollTheSubtitles"
      title="党政干部队伍建设的《三大纪律》分别为：一切从实际出发、正确执行党的政策、实行民主集中制。《八项注意》分别为：同劳动同食堂、待人和气、办事公道、买卖公平、如实反映情况、提高政治水平、工作要同群众商量、没有调查没有发言权。"
    />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
  </div>
</template>
<script setup>
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import { useRoute } from 'vue-router'
import ScrollZiMuVue from '@/views/cardGO/components/scrollZiMu/index.vue'
const route = useRoute()
// watchEffect(() => {
//   if (route.query.code) {
//     console.log('dayin', route.query.code)
//     weixinLogin({ tencentCode: route.query.code }).then((res) => {
//       console.log('接口參數', res)
//     })
//   }
// })
</script>
<style lang="scss" scoped>
#homePC {
  // background: black;
  width: 100%;
  margin: auto;
  overflow: hidden;

  .center {
    background-color: rgba(15, 12, 16, 0.7);
    position: relative;
    min-height: 1000px;
    padding-bottom: 102px;
    margin-top: 70px;
  }
}
</style>
