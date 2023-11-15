<template>
  <div @click="dialogVisiblePay = !dialogVisiblePay" class="zuiwai">
    <img class="img" src="@/assets/images/carggo/Gongao.png" alt="" />
    <div ref="lunbo" class="lunbo">
      <div style="display: flex; justify-content: center; align-items: center" ref="spanRef">
        <span class="wenzi">{{ title }}</span>
      </div>
    </div>
  </div>
  <uploadAvatarVue v-model:errDialoVueUpdate="dialogVisiblePay" :ScrollZiMuVueFRF="ScrollZiMuVueFRFDDD" />
</template>
<script setup>
import { ref, watch, onMounted, nextTick } from "vue"
import uploadAvatarVue from "../gongaoDealo/index.vue"
import { indexsysNotice } from "@/network/api"

import { useStore } from "@/pinia"

const { loginStore } = useStore()
const lunbo = ref()
const title = ref()
const spanRef = ref()
const ScrollZiMuVueFRFDDD = ref("")
const dialogVisiblePay = ref(false) //公告弹框

const scroll = () => {
  if (!spanRef.value) return

  let offsetLeft = Number(spanRef.value.offsetLeft - 0.8)
  const xin = Math.abs(spanRef.value.offsetLeft) - Math.abs(spanRef.value.offsetLeft) / 2 > lunbo.value.offsetWidth

  if (xin) {
    offsetLeft = lunbo.value.offsetWidth
    // return
  }
  spanRef.value.style.left = `${offsetLeft}px`
  requestAnimationFrame(scroll)
}
const indexsysNoticeFun = async () => {
  const res = await indexsysNotice()
  ScrollZiMuVueFRFDDD.value = res.data

  title.value = ScrollViseBleFComponent(res.data)
  nextTick(() => {
    spanRef.value.style.width = `${spanRef.value.offsetWidth + 50}px`
    requestAnimationFrame(scroll)
  })
}
const ScrollViseBleFComponent = (res) => {
  var divElement = document.createElement("div") // 设置HTML给它
  divElement.innerHTML = res // 获取文本内容
  const ress = divElement.textContent || divElement.innerText || ""

  return ress
}
onMounted(() => {
  indexsysNoticeFun()
})

watch(
  () => loginStore.token,
  (newVal) => {
    newVal, "/newVal"
    if (!newVal) return
    dialogVisiblePay.value = !dialogVisiblePay.value
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.zuiwai {
  cursor: pointer;
  $LunBo_height: 40px;
  position: fixed;
  left: 50%;
  top: 80px;
  color: aliceblue;
  transform: translateX(-50%);
  border-radius: 100px;
  z-index: 50;
  width: 90%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  height: $LunBo_height;
  @include Myflex(flex-start);
  padding-left: 30px;
  .img {
    position: relative;
    width: 17px;
    height: 17px;
    // margin-top: 3px;
    margin-right: 13px;
  }
  .lunbo {
    cursor: pointer;
    position: absolute;
    left: 54%;
    top: 0;
    transform: translateX(-50%);
    overflow: hidden;
    z-index: 9;
    width: 100%;
    height: $LunBo_height;
    > div {
      display: inline;
      position: absolute;
      left: 20px;
      top: 0;
      width: auto;
      height: $LunBo_height;
      line-height: $LunBo_height;

      .wenzi {
        // margin-top: -5px;
        transform: translateX(-5px);
      }
      span {
        font: normal normal 400 14px "PingFang SC";
        color: white;
        line-height: $LunBo_height;
        word-break: keep-all;
        white-space: nowrap;
      }
    }
  }
}
</style>
