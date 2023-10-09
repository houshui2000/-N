<template>
  <div id="banner-s">
    <div class="contain">
      <div class="bannerListBox">
        <div class="bannerListContent" ref="bannerScroll">
          <div class="bannerListDom active" v-for="(item, index) in list">
            {{ item }}---{{ index }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
let left = ref(0)
let list = ref([])
let bannerScroll = ref(null)

const handleScroll = () => {
  left.value -= 2
  let computedStyle = getComputedStyle(
    document.querySelectorAll('.bannerListDom')[0],
    null
  )
  let FanmianRight = computedStyle.marginRight.slice(0, -2)
  let FanmianWidth = computedStyle.width.slice(0, -2)

  if (
    left.value <= -((parseFloat(FanmianRight) + parseFloat(FanmianWidth)) * 10)
  ) {
    list.value.splice(0, 10)
    left.value += (parseFloat(FanmianRight) + parseFloat(FanmianWidth)) * 10
    for (let i = 0; i < 20; i++) {
      list.value.push(Math.random() * 10)
    }
  }
  bannerScroll.value.style.left = left.value + 'px'
}

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    list.value.push({})
  }
  setInterval(() => {
    handleScroll()
  }, 25)
})
</script>

<style lang="scss" scoped>
#banner-s {
  width: 1920px;
  height: 200px;
  background-color: silver;
  display: flex;
  justify-content: center;
  .contain {
    width: 1800px;
    background-color: #008aff;
  }
  .bannerListBox {
    width: 1680px;
    height: 200px;
    display: flex;
    overflow: hidden;
    background: #453293;
    position: relative;
    .bannerListContent {
      min-width: 1680px;
      height: 200px;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      //transition: all;
      .bannerListDom {
        width: 150px;
        height: 200px;
        background: yellow;
        margin-right: 20px;
        flex-shrink: 0;
        transition: all 0.3s;
        cursor: pointer;
        position: relative;
        &:hover {
          transform: rotate3d(0, 1, 0, 180deg);
        }
      }
    }
  }
}
</style>
