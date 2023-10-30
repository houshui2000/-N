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
      <TopVue />
      <BOttomVue />
    </section>
  </div>
</template>
<script setup>
import TopVue from './top.vue'
import BOttomVue from './bottom.vue'
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
