<template>
  <div>
    <!-- 作品介绍 -->
    <div v-html="creatData.productIntroduction"></div>
    <img :src="item" v-for="(item, index) in IMgURl" :key="index" alt="" />
  </div>
</template>
<script setup>
import { inject, computed } from 'vue'
const creatData = inject('creatData')
const IMgURl = computed(() => {
  return JSON.parse(creatData.value.imgTextUrl)
})
</script>
<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
