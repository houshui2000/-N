<template>
  <div class="zuiwai">
    <div ref="lunbo" class="lunbo">
      <div style="display: flex; justify-content: center; align-items: center" ref="spanRef">
        <!-- <span class="img"> -->
        <img class="img" src="@/assets/images/carggo/Gongao.png" alt="" />
        <!-- </span> -->
        <span class="wenzi">
          {{ title }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const { title } = defineProps({
  title: { type: String, required: true }
})
const lunbo = ref()
onMounted(() => {
  spanRef.value.style.width = `${spanRef.value.offsetWidth + 50}px`
  requestAnimationFrame(scroll)
})
const spanRef = ref()
const scroll = () => {
  if (!spanRef.value) return

  let offsetLeft = Number(spanRef.value.offsetLeft - 2)
  const xin = Math.abs(spanRef.value.offsetLeft) > lunbo.value.offsetWidth
  if (xin) {
    offsetLeft = lunbo.value.offsetWidth
  }
  spanRef.value.style.left = `${offsetLeft}px`
  requestAnimationFrame(scroll)
}
</script>
<style lang="scss" scoped>
.zuiwai {
  $LunBo_height: 40px;
  position: fixed;
  left: 0px;
  top: 71px;
  z-index: 50;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  height: $LunBo_height;
  .lunbo {
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

      .img {
        position: relative;
        width: 17px;
        height: 17px;
        // margin-top: 3px;
        margin-right: 13px;
      }
      .wenzi {
        // margin-top: -5px;
        transform: translateX(-5px);
      }
      span {
        font: normal normal 400 14px 'PingFang SC';
        color: white;
        line-height: $LunBo_height;
      }
    }
  }
}
</style>
