<template>
  <div>
    <div class="block text-center">
      <div class="dan"></div>
      <div class="lunbo_da">
        <el-carousel>
          <el-carousel-item v-for="item in carouselUtem" :key="item">
            <div class="lunbo">
              <img :src="item.url" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { indexbanner } from '@/network/api'
import { ref } from 'vue'
// import Banner from '../barrage/index.vue'
const carouselUtem = ref([])
const creat = async () => {
  // const res = await indexbanner()
  const kaCe = new URL('../../../../assets/images/carggo/Rectangle 1602_ce.png', import.meta.url).href
  // if (res.code === 200) {
  carouselUtem.value = [{ url: kaCe }, { url: kaCe }, { url: kaCe }, { url: kaCe }, { url: kaCe }]
  // }
}
creat()
</script>
<style lang="scss" scoped>
:deep(.el-carousel__indicators) {
  // bottom: 250px;
}
:deep(.el-carousel__container) {
  height: 288px !important;
}
.block {
  position: relative;
  .dan {
    position: absolute;
    top: 120px;
    z-index: 99;
  }
  .lunbo_da {
    height: 288px !important;
  }
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
