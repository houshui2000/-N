<template>
  <div class="xilieyihO">
    <p>{{ xilie }}</p>
    <section>
      <div v-for="(item, index) in 8" :key="index" class="kapin_wai">
        <kaPaiVue :munch="'202.00'" price="600" percentage="50%" :img="img" />
        <div class="hot">HOT</div>
      </div>
    </section>
  </div>
</template>
<script setup>
import kaPaiVue from '@/components/KaPai/index.vue'
import { ref } from 'vue'
const img = ref(new URL('../../../../assets/images/carggo/ceshi.png', import.meta.url).href)
const { xilie } = defineProps({
  xilie: { type: String, required: true }
})
</script>
<style lang="scss" scoped>
.xilieyihO {
  margin-top: 40px;
  z-index: 232;
  width: 100%;
  > p {
    width: 367px;
    height: 45px;
    text-align: center;
    font: normal normal 500 20px 'PingFang SC';
    // margin-bottom: 40px;
    margin: auto;
    color: #fff;
    background: url('@/assets/images/carggo/kapian_botom.png') no-repeat scroll left bottom/ 100% 100%;
  }
  section {
    margin-top: 33px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 31px;
    grid-column-gap: 25px;
    .kapin_wai {
      position: relative;
      width: 274px;
      height: 420px;
      margin-right: 20px;
      .hot {
        background-color: #ea3a52;
        position: absolute;
        left: -5px;
        top: -5px;
        width: 38px;
        height: 38px;
        font: normal normal 600 12px 'PingFang SC';
        color: white;
        @include Myflex();
        -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      }
    }
  }
}
</style>
