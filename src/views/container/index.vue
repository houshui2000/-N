<template>
  <div @click="asds">
    <router-view />
    <p>{{ useUsersStore.ammoBalance }}sda{{ as }}s</p>
    <!-- <img @click="asds" :src="$config.$hktest" alt="" /> -->
    <!-- <asVVV :as="as" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { test } from '../../network/api'
// import asVVV from './as.vue'
import { useStore } from '@/pinia'
const { useUsersStore } = useStore()
const as = ref('5555')

const gettest = () => {
  test().then(result => {
    console.log(result)
  })
}
const asds = () => {
  as.value = 'asdsad'
}
gettest()
</script>

<style scoped lang="scss">
p {
  color: rebeccapurple;
  width: 1920px;
  height: 1600px;
  background-color: saddlebrown;
  @include Myflex();
}
</style>
