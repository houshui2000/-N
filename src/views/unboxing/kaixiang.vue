<template>
  <div class="kaixiangq">
    <div class="left">
      <el-carousel height="300px" direction="vertical" type="card" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--  -->
    <div class="center">center</div>
    <!--  -->
    <div class="right">
      <RightVue />
    </div>
  </div>
</template>
<script setup>
import RightVue from './components/rightZhan/index.vue'
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.kaixiangq {
  height: 600px;
  width: 100%;
  background-color: saddlebrown;
  @include Myflex(space-between);
  .left {
    width: 300px;
    height: 100%;
    background-color: aliceblue;
  }
  .center {
    width: 200px;
    background-color: aqua;
    height: 100%;
  }
  .right {
    width: 200px;
    height: 100%;
    background-color: aqua;
  }
}
</style>
