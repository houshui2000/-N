<template>
  <div>
    <NavVue />
    <article class="layout_article">
      <!-- <Banner v-if="route.meta.gundong !== false" /> -->
      <div class="center">
        <router-view />
      </div>
    </article>
    <FooterVue />
    <Login />
  </div>
</template>
<script setup>
import { watchEffect } from 'vue'
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
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
.center {
  min-height: 1000px;
  // background-color: black;
  // background:
  //   url(<path-to-image>),
  //   lightgray 50% / cover no-repeat;
  // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 20%, black 80%);
  background-color: rgb(15, 12, 16);
}
// background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
.layout_article {
  overflow: hidden;
}
</style>
