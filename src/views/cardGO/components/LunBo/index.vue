<template>
  <div>
    <div class="block text-center">
      <ScrollZiMuVue
        title="党政干部队伍建设的《三大纪律》分别为：一切从实际出发、正确执行党的政策、实行民主集中制。《八项注意》分别为：同劳动同食堂、待人和气、办事公道、买卖公平、如实反映情况、提高政治水平、工作要同群众商量、没有调查没有发言权。"
      />
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
