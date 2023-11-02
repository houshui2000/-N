<template>
  <div @click="ass" class="kapai">
    <div class="crumbs">
      <span @click="router.push('/')">
        商城
        <i>></i>
      </span>

      <span>卡牌详情</span>
    </div>
    <section v-if="creatData.productName">
      <TopVue :creatDataAll="creatDataAll" :creatData="creatData" />
      <BOttomVue />
    </section>
    <div v-else class="quexing">
      <MissWakeupPage />
    </div>
  </div>
</template>
<script setup>
import TopVue from './top.vue'
import BOttomVue from './bottom.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, provide, watch } from 'vue'
import MissWakeupPage from '@/components/missingWakeupPage/index.vue'
import { shopcardxdetail, shopotherproducts } from '@/network/shoppingCentre/shoppingtwo.js'
// import Me ssageBoxVue from '@/components/MessageBox/index.js'
const route = useRoute()
const router = useRouter()
const creatData = ref({}) // 系列的数据
const creatDataAll = ref([]) // 系列的所有数据
const ass = () => {}
const init = async () => {
  const res = await shopcardxdetail({
    vaultId: route.params.vaultId
  })

  creatData.value = res.data
  const norId = await shopotherproducts({
    // norId: route.params.vaultId
  })

  creatDataAll.value = norId.data
}
init()
provide('creatData', creatData)
watch(
  () => route.params.vaultId,
  () => {
    init()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.kapai {
  padding-top: 84px;
  width: 1470px;

  margin: auto;
  .crumbs {
    font: normal normal 400 14px 'PingFang SC';
    // margin: 0 14px;
    span {
      &:nth-child(n) {
        color: #999;
        i {
          margin: 0 5px;
        }
      }
      &:last-child {
        color: #fff;
      }
    }
  }
  //
  section {
    margin-top: 14px;
    width: 100%;
    // @include Myflex(space-between, flex-start);
  }
}
</style>
