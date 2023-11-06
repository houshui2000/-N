<template>
  <div class="informationTwo">
    <CrumbsVue
      :arr="[
        { name: '咨询', path: '/information' },
        { name: '咨询详情', path: route.params.id }
      ]"
    />
    <div class="center"></div>
    <!-- <div class="nav">咨询 > 咨询详情</div> -->
  </div>
  <!--  v-html="adsad" -->

  <!-- <MissWakeupPage /> -->
</template>
<script setup>
// import MissWakeupPage from '@/components/missingWakeupPage/index.vue'
import CrumbsVue from '@/components/crumbs/index.vue'
import { shopnewsdetail } from '@/network/information'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
// const props = defineProps({
//   id: { type: String, default: '' }
// })

const adsad = ref('')
const init = async () => {
  const res = await shopnewsdetail({ id: route.params.id })

  adsad.value = res.data
}
init()
</script>
<style lang="scss" scoped>
.informationTwo {
  margin: auto;

  color: white;
  // height: 2000px;
  width: 1470px;
  .center {
    margin-top: 12px;
    height: 300px;
    width: 100%;
    border-radius: 6px;
    background-color: saddlebrown;
    @include bordergradientMY(linear-gradient(180deg, rgba(45, 38, 81, 0.9) 0%, rgba(46, 37, 81, 0.9) 100%));
  }
}
</style>
