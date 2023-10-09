<template>
  <div>
    <div class="block text-center">
      <div ref="lunbo" class="lunbo">
        <span @click="scroll" ref="spanRef">
          公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播公告文案轮播
        </span>
      </div>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
onMounted(() => {
  spanRef.value.style.width = `${spanRef.value.offsetWidth + 200}px`
  requestAnimationFrame(scroll)
})
const spanRef = ref()
const lunbo = ref()
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
.block {
  position: relative;
  margin-top: 20px;
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
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
