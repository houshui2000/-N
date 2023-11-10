<template>
  <div>das---{{ as }}---da</div>
</template>
<script setup>
// import { toRefs, defineProps } from 'vue'
// const props =
const { as } = defineProps({
  as: {
    type: String,
    required: true
  }
})

// const { as } = toRefs(props)
</script>
<style scoped lang="scss">
div {
  background-color: saddlebrown;
  color: rebeccapurple;
}
</style>
