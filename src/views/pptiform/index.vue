<template>
  <div class="ppt">
    <iframe :src="Myimg" frameborder="0"></iframe>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { assetcert } from "@/network/shoppingCentre/shoppingCentre"
import { useRoute } from "vue-router"
const route = useRoute()
const Myimg = ref("")

const init = async () => {
  //获取证书

  const assetcertRes = await assetcert({
    qrCodeId: route.query.id
  })

  Myimg.value = assetcertRes.data
}
init()
</script>
<style lang="scss" scoped>
.ppt {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
