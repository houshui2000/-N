<template>
  <div class="side">
    <div
      v-for="(item, index) in pros.INterOb"
      @click="
        router.push({
          path: '/SCDetail',
          query: {
            vaultId: item.id
          }
        })
      "
      :key="index"
      class="kapai"
    >
      <KaParVue :KaParVueitem="item" />
    </div>
  </div>
</template>
<script setup>
import KaParVue from "../Kapai/index.vue"
import { useRouter } from "vue-router"
const router = useRouter()
const pros = defineProps({
  INterOb: {
    type: Array,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.side {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 260px);
  grid-row-gap: 20px;
  grid-column-gap: 18px;
}
</style>
