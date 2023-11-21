<template>
  <Transition name="slide-fade">
    <div v-if="hidenow" class="MessageboxMy">{{ props.title }}</div>
  </Transition>
</template>
<script setup>
import { onMounted, watch, ref } from "vue"
const props = defineProps({
  title: { type: String || undefined, required: true }
})
const hidenow = ref(false)
onMounted(() => {
  hidenow.value = true
  setTimeout(() => {
    hidenow.value = false
  }, 2000)
})
watch(hidenow, (newVal) => {
  if (newVal) return
  setTimeout(() => {
    const xtxMeaagecontainer = document.querySelector(".xtxMeaage_container").children[0]
    document.querySelector(".xtxMeaage_container").removeChild(xtxMeaagecontainer)
  }, 500)
})
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
// .lyric-enter-to,
// .lyric-leave {
//   opacity: 1;
// }
// .lyric-enter-active,
// .lyric-leave-active {
//   transition: all 0.5s;
// }
.MessageboxMy {
  // position: fixed;
  // top: 120px;
  // left: 50%;
  // transform: translateX(-50%);
  min-width: 324px;
  height: 58px;
  margin-top: 20px;
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
}
</style>
