<template>
  <div>das---{{ as }}---da</div>
</template>
<script setup>
const { as } = defineProps({
  as: {
    type: String,
    required: true,
  },
})
</script>
<style scoped lang="scss">
div {
  background-color: saddlebrown;
  color: rebeccapurple;
}
</style>
