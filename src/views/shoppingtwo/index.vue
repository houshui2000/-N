<template>
  <div class="kapai">
    <div class="crumbs">
      <span>
        商城
        <i>></i>
      </span>

      <span>卡牌详情</span>
    </div>
    <section>
      <TopVue :creatData="creatData" />
      <!-- <BOttomVue /> -->
    </section>
  </div>
</template>
<script setup>
import TopVue from './top.vue'
import BOttomVue from './bottom.vue'
import { useRoute } from 'vue-router'
import { ref, provide } from 'vue'
import { shopcardxdetail } from '@/network/shoppingCentre/shoppingtwo.js'
const route = useRoute()
// 系列的数据
const creatData = ref({})
const init = async () => {
  const res = await shopcardxdetail({
    vaultId: route.params.vaultId
  })
  creatData.value = res.data
}
init()
provide('creatData', creatData)
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
