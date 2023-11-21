<template>
  <div>
    <div class="block text-center">
      <div class="dan"></div>
      <div class="lunbo_da">
        <el-carousel>
          <el-carousel-item v-for="item in carouselUtem" :key="item">
            <div class="lunbo" @click="banner(item)">
              <img :src="item.pcUrl" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import { indexbanner } from "@/network/api"
import { ref } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
const carouselUtem = ref([])
const creat = async () => {
  const res = await indexbanner()
  if (res.code === 200) {
    carouselUtem.value = res.data
  }
}
const banner = (item) => {
  if (!item.pcRedirectUrl) return
  // console.log(item)

  if (item.pcType == 1) {
    if (item.pcRedirectUrl == "booking") {
      // 跳转预约
      window.open("/invitation")
    } else {
      window.open(item.pcRedirectUrl)
    }
  } else {
    router.push("informationTwo?id=" + item.pcNewsId)
  }
}
creat()
</script>
<style lang="scss" scoped>
:deep(.el-carousel__container) {
  height: 480px !important;
}
.block {
  position: relative;
  .dan {
    position: absolute;
    top: 120px;
    z-index: 99;
  }
  .lunbo_da {
    height: 480px !important;
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
