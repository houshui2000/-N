<template>
  <div id="homePC">
    <NavVue />
    <!-- <Carousel v-if="!route.meta.gundong" /> -->
    <ScrollZiMuVue v-if="!route.meta.scrollTheSubtitles" />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
  </div>
</template>
<script setup name="layout">
import NavVue from "./components/top/index.vue"
import FooterVue from "./components/footer/index.vue"
import { useRoute } from "vue-router"
import ScrollZiMuVue from "./components/scrollZiMu/index.vue"

const route = useRoute()
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
