<template>
  <Transition name="transition05s">
    <div v-if="hidenow" class="MessageboxMy">{{ props.title }}</div>
  </Transition>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue"
const props = defineProps({
  title: { type: String || undefined, required: true }
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
  top: 120px;
  left: 50%;
  z-index: 99999;
  transform: translateX(-50%);
  min-width: 324px;
  height: 58px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(90deg, rgba(33, 18, 41, 0.9) -1.45%, rgba(8, 14, 43, 0.9) 100%),
    linear-gradient(180deg, #9d66d9 0%, #6395e7 100%);
  @include Myflex();
  font: normal normal 400 14px "PingFang SC";
  color: white;
  // opacity: 0.8;
}
</style>
