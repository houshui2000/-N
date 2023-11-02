<template>
  <Transition name="transition05s">
    <div v-if="hidenow" class="MessageboxMy">{{ props.title }}</div>
  </Transition>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const props = defineProps({
  title: { type: String, required: true }
})
const hidenow = ref(false)
onMounted(() => {
  hidenow.value = true
})
onUnmounted(() => {
  hidenow.value = false
})
</script>
<style lang="scss" scoped>
.MessageboxMy {
  position: fixed;
  top: 90px;
  left: 50%;
  z-index: 99999;
  transform: translateX(-50%);
  width: 324px;
  height: 77px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(90deg, #211229 -1.45%, #080e2b 100%),
    linear-gradient(180deg, #9d66d9 0%, #6395e7 100%);
  @include Myflex();
  font: normal normal 400 14px 'Microsoft YaHei';
  color: white;
}
</style>
