<template>
  <div id="LoginQQ"  v-if="loginStore.loginState==='qq'">
      qq登录详情
  </div>
</template>

<script setup>
import {useStore} from '@/pinia'
const {loginStore} = useStore()
</script>

<style lang="scss" scoped>
#LoginQQ{}
</style>
