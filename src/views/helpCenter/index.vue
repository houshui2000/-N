<template>
  <div class="helpCenter">
    <div class="top"></div>
    <section>
      <div class="section_top">
        <p
          v-for="(item, index) in helpCenterArrVue"
          @click="router.push(`/helpCenter/${item.path}`)"
          :class="{ active: nameRef == item.name }"
          :key="index"
        >
          {{ item.meta.name }}
        </p>
      </div>
      <div class="section_bottom">
        <router-view />
      </div>
    </section>
  </div>
</template>
<script setup>
import { helpCenterArr } from '@/router/modules/case'
import { useRouter, useRoute } from 'vue-router'
import { computed, watch, ref } from 'vue'
const router = useRouter()
const route = useRoute()
const helpCenterArrVue = computed(() => helpCenterArr)
const nameRef = ref('')
watch(
  () => route,
  () => {
    nameRef.value = route.name
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
.helpCenter {
  .top {
    width: 1920px;
    height: 219.763px;
    background: url('@/assets/images/carggo/Rectangle 1602_ce.png') no-repeat scroll left bottom/ 100% 100%;
  }
  section {
    width: 1470px;
    height: 60px;

    margin: 30px auto;
    .section_top {
      @include bordergradientMY(
        linear-gradient(90deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
        linear-gradient(180deg, rgba(60, 63, 130, 0.1) 0%, rgba(4, 4, 7, 0.54) 100%)
      );
      height: 100%;
      @include Myflex(flex-start);
      padding: 0 69px;
      .active {
        transition: all 0.5s;
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 50%;
          height: 4px;
          border-radius: 5px;
          background: linear-gradient(149deg, rgb(213, 5, 205) 45.99%, rgb(53, 63, 253) 85.48%);
        }
      }
      > p {
        font: normal normal 400 14px ' PingFang SC';
        color: white;
        display: inline-block;
        background-color: saddlebrown;
        height: 100%;
        // width: 300px;
        padding: 20px 12px;
        @include Myflex();
        margin-right: 100px;
        background: linear-gradient(180deg, rgba(223, 0, 201, 0) 0%, rgba(0, 21, 94, 0.3) 100%);
      }
    }
    .section_bottom {
      margin-top: 30px;
    }
  }
}
</style>
