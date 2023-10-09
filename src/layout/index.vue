<template>
  <div>
    <NavVue />
    <article class="layout_article">
      <Banner v-if="route.meta.gundong !== false" />
      <div class="center">
        <router-view />
      </div>
    </article>
    <FooterVue />
  </div>
</template>
<script setup>
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
import Banner from './components/Banner/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style lang="scss" scoped>
.center {
  min-height: 1000px;
  background-color: sandybrown;
}
.layout_article {
  padding: 0 20px;
  overflow: hidden;
  background-color: cadetblue;
}
</style>
