<template>
  <div class="card_bottom">
    <article>
      <div class="xilie" v-for="(item, index) in 7" :key="index">
        {{ item }}
      </div>
    </article>
    <xilieVue v-for="(item, index) in 2" :key="index" :xilie="'sadadsa'" />
    <!--  -->
  </div>
</template>
<script setup>
import xilieVue from './components/xiLie/index.vue'
</script>
<style lang="scss" scoped>
.card_bottom {
  width: 80%;
  margin: 40px auto 0 auto;
  article {
    background-color: saddlebrown;
    @include Myflex();
    .xilie {
      width: 100px;
      height: 40px;
      background-color: aqua;
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
