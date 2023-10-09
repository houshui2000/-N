<template>
  <div>
    <NavVue />
    <!-- <TopShiShiVue v-if="route.meta.gundong !== false" /> -->
    <Banner v-if="route.meta.gundong !== false" />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
  </div>
</template>
<script setup lang="ts">
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
// import TopShiShiVue from './components/Topshishi/index.vue'
import Banner from './components/Banner/index.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style lang="scss" scoped>
.center {
  min-height: 1000px;
  background-color: sandybrown;
}
</style>
