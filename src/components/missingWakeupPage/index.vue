<template>
  <div class="missingWakeupPage">
    <div class="svg">
      <!-- <SvgIcon size="316px" Height="654px" icon-class="missingWakeupPage" /> -->
    </div>
    <p class="title">{{ props.title }}</p>
    <p class="titleTwo">{{ props.titleTwo }}</p>
  </div>
</template>
<script setup>
// import SvgIcon from '@/components/SvgIcon/index.vue'
const props = defineProps({
  title: {
    type: String,
    default: "暂无藏品"
  },
  titleTwo: {
    type: String,
    default: "您的资产空空如也，请尽快购买吧~"
  }
})
</script>
<!-- 您的资产空空如也，请尽快购买吧~ -->
<style lang="scss" scoped>
.missingWakeupPage {
  width: 316px;
  margin: 100px auto 0 auto;
  .svg {
    background: url("@/assets/images/shoppingCentre/missingWakeupPage.png") no-repeat scroll left top/ 100% 100%;
    height: 558px;
    width: 316px;
  }
  .title {
    margin-top: 40px;
    font: normal normal 400 18px "PingFang SC";
    color: white;
    @include Myflex();
  }
  .titleTwo {
    @include Myflex();
    font: normal normal 400 14px "PingFang SC";
    margin-top: 28px;
    color: #949494;
  }
}
</style>
