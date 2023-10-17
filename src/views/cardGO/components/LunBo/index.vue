<template>
  <div>
    <div class="block text-center">
      <el-carousel height="800px">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <div class="lunbo">
            <img src="@/assets/images/carggo/lunbo_one.png" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import ScrollZiMuVue from '../scrollZiMu/index.vue'
</script>
<style lang="scss" scoped>
:deep(.el-carousel__indicators) {
  bottom: 250px;
}
.block {
  position: relative;
}
.demonstration {
  color: var(--el-text-color-secondary);
}
.lunbo {
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
</style>
