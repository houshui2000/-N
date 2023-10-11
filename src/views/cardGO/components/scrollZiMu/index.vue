<template>
  <div>
    <div ref="lunbo" class="lunbo">
      <span @click="scroll" ref="spanRef">
        {{ title }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const { title } = defineProps({
  title: { type: String, required: true }
})
const lunbo = ref()
onMounted(() => {
  spanRef.value.style.width = `${spanRef.value.offsetWidth + 200}px`
  requestAnimationFrame(scroll)
})
const spanRef = ref()
const scroll = () => {
  let offsetLeft = Number(spanRef.value.offsetLeft - 2)
  const xin = Math.abs(spanRef.value.offsetLeft) > lunbo.value.offsetWidth
  if (xin) {
    offsetLeft = lunbo.value.offsetWidth
  }
  spanRef.value.style.left = `${offsetLeft}px`
  requestAnimationFrame(scroll)
}
</script>
<style lang="scss" scoped>
.lunbo {
  position: relative;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 9;
  width: 80%;
  height: 30px;
  background-color: saddlebrown;
  > span {
    display: inline;
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
  }
}
</style>
