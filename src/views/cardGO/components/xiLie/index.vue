<template>
  <div class="xilieyihO">
    <p>{{ xilie }}</p>
    <div class="gejue"></div>
    <section>
      <div v-for="(item, index) in 8" :key="index" class="kapin_wai">
        <kaPaiVue />
      </div>
    </section>
  </div>
</template>
<script setup>
import kaPaiVue from '@/components/KaPai/index.vue'
const { xilie } = defineProps({
  xilie: { type: String, required: true },
})
</script>
<style lang="scss" scoped>
.xilieyihO {
  margin-top: 40px;
  width: 100%;
  > p {
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
  .gejue {
    width: 500px;
    height: 20px;
    background-color: skyblue;
    border-radius: 50px;
    margin: auto;
  }
  section {
    margin-top: 40px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 20px;
    .kapin_wai {
      width: 200px;
      height: 250px;
      margin-right: 20px;
    }
  }
}
</style>
