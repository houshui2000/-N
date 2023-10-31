<template>
  <div>
    <!-- 作品介绍 -->
    <div v-html="creatData.productIntroduction"></div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
const creatData = inject('creatData')
</script>
<style lang="scss" scoped></style>
