<template>
  <div class="side">
    <div v-for="(item, index) in pros.INterOb" @click="TiaoClick(item)" :key="index" class="kapai">
      <KaParVue :KaParVueitem="item" />
    </div>
  </div>
</template>
<script setup>
import KaParVue from "../Kapai/index.vue"
import { useRouter } from "vue-router"
// import MessageBoxVue from "@/components/MessageBox/index.js"
// import { useStore } from "@/pinia"
// const { loginStore } = useStore()

const router = useRouter()
const pros = defineProps({
  INterOb: {
    type: Array,
    required: true
  }
})
const TiaoClick = (item) => {
  // if (item.id == 22) {
  //   MessageBoxVue({
  //     title: "已停售"
  //   })
  //   return
  // }
  // if (!loginStore.token) {
  //   MessageBoxVue({
  //     title: "请先登录"
  //   })
  //   return
  // }
  router.push({
    path: "/SCDetail",
    query: {
      vaultId: item.id
    }
  })
}
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
