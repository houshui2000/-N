<template>
  <div>
    <div class="block text-center">
      <ScrollZiMuVue
        title="阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔阿思达达达大叔大叔"
      />

      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import ScrollZiMuVue from '../scrollZiMu/index.vue'
</script>
<style lang="scss" scoped>
.block {
  position: relative;
  margin-top: 20px;
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
