<template>
  <div class="CIjing">
    <router-view />
  </div>
</template>
<script setup>

import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { weixinLogin } from '@/network/api'
const route = useRoute()

watch(
  () => route.query,
  (newValue) => {
    if (!newValue.code) return

    VxLogin(newValue.code)
  }
)
const VxLogin = async (newValue) => {
  await weixinLogin({ tencentCode: newValue })
  // console.log(userresepassword)
}
</script>

<style scoped lang="scss"></style>
<style lang="scss">
body {
  overflow-x: hidden;
  width: 100vw;
}
body::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

// 滚轮样式
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: rgba($color: #817d7d, $alpha: 0.6) !important;
}

// 滚轮背景
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
