<template>
  <div class="kapai">
    <!-- <div class="crumbs">
      <span @click="router.push('/shoppingCentre')">
        商城
        <i>></i>
      </span>

      <span>资产详情</span>
    </div> -->
    <CrumbsVue
      :arr="[
        { name: '商城', path: '/shoppingCentre' },
        { name: '资产详情', path: route.params.vaultId }
      ]"
    />
    <section v-if="creatData.productName">
      <TopVue :creatDataAll="creatDataAll" :creatData="creatData" />
      <BOttomVue />
    </section>
    <div v-else class="quexing">
      <MissWakeupPage :title="'暂无数据'" :titleTwo="'敬请期待!'" />
    </div>
  </div>
</template>
<script setup>
import TopVue from './top.vue'
import CrumbsVue from '@/components/crumbs/index.vue'
import BOttomVue from './bottom.vue'
import { useRoute } from 'vue-router'
import { ref, provide, watch } from 'vue'
import MissWakeupPage from '@/components/missingWakeupPage/index.vue'
import { shopcardxdetail, shopotherproducts } from '@/network/shoppingCentre/shoppingtwo.js'
// import Me ssageBoxVue from '@/components/MessageBox/index.js'
const route = useRoute()
// const router = useRouter()
const creatData = ref({}) // 系列的数据
const creatDataAll = ref([]) // 系列的所有数据
const init = async () => {
  const res = await shopcardxdetail({
    vaultId: route.params.vaultId
  })
  console.log(res.data)

  creatData.value = res.data

  // 左侧其他系列
  const norId = await shopotherproducts({})
  creatDataAll.value = norId.data
}
init()
provide('creatData', creatData)
watch(
  () => route.params.vaultId,
  () => {
    if (route.name !== 'SCDetailName') return

    init()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.kapai {
  // padding-top: 84px;
  width: 1470px;
  padding-top: 14px;
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
