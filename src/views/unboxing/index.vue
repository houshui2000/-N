<template>
  <div class="unboxing">
    <ScrollZiMuVue title="阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔" />
    <kaixiangVue />
    <xilieVue :xilie="'sadadsa'" />
  </div>
</template>
<script setup>
import ScrollZiMuVue from '../cardGO/components/scrollZiMu/index.vue'
import xilieVue from '../cardGO/components/xiLie/index.vue'
import kaixiangVue from './kaixiang.vue'
</script>
<style lang="scss" scoped>
.unboxing {
  margin: 20px auto 0 auto;
  padding-top: 50px;
  background-color: salmon;
  width: 80%;
  position: relative;
}
</style>
