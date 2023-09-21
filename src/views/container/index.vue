<template>
  <router-view />
  <div style="color: red">123{{$store.state.test.type}}</div>
  <img :src="$config.$hktest" alt="">
</template>

<script setup>
import {test} from "../../network/api";

const gettest = () => {
  test().then(result => {
    console.log(result)
  })
}
gettest()
</script>

<style scoped>

</style>