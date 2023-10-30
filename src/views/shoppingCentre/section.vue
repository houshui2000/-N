<template>
  <div class="section">
    <div class="section_left">
      <Section_left :LeftData="LeftData" @LeftData="LeftDataFuncation($event)" />
    </div>
    <div v-if="creatData.records?.length > 0" class="section_right">
      <section_right :INterOb="creatData.records" />
    </div>
  </div>
  <div ref="xianshi_geng" class="xianshi_geng">加载更多</div>
</template>
<script setup>
import Section_left from './components/sectionLeft/index.vue'
import section_right from './components/sectionRight/index.vue'
import MYIntersectionObserver from '@/utils/IntersectionObserver.js'
import { ref, onMounted } from 'vue'
import { shopliscard } from '@/network/shoppingCentre/shoppingCentre'

const xianshi_geng = ref(null)
const LeftData = ref({
  name: '',
  orderColumn: 'sort'
})
const FenYe = {
  size: 10,
  current: 1
}
onMounted(() => {
  MYIntersectionObserver(xianshi_geng.value, () => {
    // INterOb.value.push('xasdasda')
    FenYe.size += 10
    init()
  })
})
const creatData = ref({})
const init = async () => {
  const res = await shopliscard({
    current: FenYe.current,
    size: FenYe.size,
    orderColumn: LeftData.value.orderColumn,
    asc: true,
    name: LeftData.value.name
  })
  // console.log(res)creatData
  creatData.value = res.data
}
init()
let time = null
/**子组件改动更新接口 */
const LeftDataFuncation = (e) => {
  LeftData.value = e
  if (time) clearTimeout(time)
  time = setTimeout(() => {
    init()
  }, 500)
}
</script>
<style lang="scss" scoped>
.section {
  width: 1664px;
  min-height: 1200px;
  margin: auto;
  padding-top: 57px;
  @include Myflex(space-between, flex-start);
  .section_left {
    width: 270px;
    border-radius: 6px;
    border: 1px solid #1a2a40;
    background: #00081a;
    backdrop-filter: blur(2px);
  }
  .section_right {
    width: 1372px;
  }
}
.xianshi_geng {
  border-radius: 2px;
  margin: 90px auto 0 auto;
  border: 1px solid #333;
  width: 210px;
  height: 50px;
  background: rgba(0, 5, 18, 0.4);
  @include Myflex();
  font: normal normal 600 14px 'PingFang SC';
  color: white;
  backdrop-filter: blur(2px);
}
</style>
