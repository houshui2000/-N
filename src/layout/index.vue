<template>
  <div id="homePC">
    <NavVue />
    <Carousel />
    <ScrollZiMuVue
      title="党政干部队伍建设的《三大纪律》分别为：一切从实际出发、正确执行党的政策、实行民主集中制。《八项注意》分别为：同劳动同食堂、待人和气、办事公道、买卖公平、如实反映情况、提高政治水平、工作要同群众商量、没有调查没有发言权。"
    />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
    <Login />
  </div>
</template>
<script setup>
import { watchEffect } from 'vue'
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
import Carousel from '@/components/Carousel/index.vue'
// import Banner from './components/Banner/index.vue'

import { useRoute } from 'vue-router'
import Login from '@/components/Login/index.vue'
import { weixinLogin } from '@/network/api.js'
import ScrollZiMuVue from '@/views/cardGO/components/scrollZiMu/index.vue'
const route = useRoute()

// watch(()=>route.query.code,(value)=>{
//   console.log("value",value)
//   if(value){
//     console.log(1)
//   }else{
//     console.log(useUsersStore.code)
//   }
// })
watchEffect(() => {
  if (route.query.code) {
    console.log('dayin', route.query.code)
    weixinLogin({ tencentCode: route.query.code }).then((res) => {
      console.log('接口參數', res)
    })
  }
})
</script>
<style lang="scss" scoped>
#homePC {
  background: black;
  width: 1920px;
  margin: auto;
  overflow: hidden;
  .center {
    min-height: 3000px;
    // background-color: sandybrown;
    background-color: rgb(15, 12, 16);
    position: relative;
  }
}
</style>
