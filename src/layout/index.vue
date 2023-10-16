<template>
  <div id="homePC">
    <NavVue />

    <div class="center">
      <Carousel />
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
  .center {
    // margin-top: 70px;
    min-height: 3000px;
    // background-color: sandybrown;
    background-color: rgb(15, 12, 16);
    position: relative;
  }
}
</style>
