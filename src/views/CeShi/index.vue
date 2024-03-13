<template>
  <div>
    HOme {{ useUsersStore.userInfo }}
    <RouterLink to="/CeShi2">
      <el-button type="primary">跳转</el-button>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import variables from "@/styles/variables.module.scss"
import useStore from "@/pinia"
const { useUsersStore } = useStore()
console.log(variables)
</script>
<style lang="scss" scoped>
div {
  font-size: 20px;
}
</style>
