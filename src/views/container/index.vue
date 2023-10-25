<template>
  <div @click="asds">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import asVVV from './as.vue'
import { useStore } from '@/pinia'
const { useUsersStore } = useStore()
const as = ref('5555')

const gettest = () => {}
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
