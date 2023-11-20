<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="crumbs">
      <span
        :style="{ color: index === props.arr.length - 1 ? '#fff' : '#999' }"
        v-for="(item, index) in props.arr"
        :key="index"
        @click="router.push(item.path)"
      >
        {{ item.name }}
        <i v-show="index !== props.arr.length - 1">></i>
      </span>

      <!-- <span>资产详情</span> -->
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const props = defineProps({
  arr: { type: Array, required: true }
})
// const route = useRoute()
const router = useRouter()
</script>
<style lang="scss" scoped>
.crumbs {
  font: normal normal 400 14px "PingFang SC";
  // margin: 0 14px;
  span {
    // &:nth-child(n) {
    cursor: pointer;
    &:last-child {
      cursor: default;
    }
    //   color: #999;
    i {
      margin: 0 5px;
      // }
    }
    // &:last-child {
    //   color: #fff;
    // }
  }
}
</style>
