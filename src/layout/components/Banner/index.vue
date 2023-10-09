<template>
  <div id="banner-s">
    <div class="contain">
      <div class="bannerListBox">
        <div class="bannerListContent" ref="bannerScroll">
          <div class="bannerListDom" v-for="(item, index) in list">
            <div class="bannerListDomActive">{{ item }}---{{ index }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let leftcc = ref(0) //定位位置
let list = ref([]) //无缝轮播列表
let bannerScroll = ref(null) //获取bannerScroll的dom
let count = ref(10) // 显示几个轮播页面
const handleScroll = () => {
  left.value -= 2
  let computedStyle = getComputedStyle(
    document.querySelectorAll('.bannerListDom')[0],
    null
  )
  let FanmianRight = computedStyle.marginRight.slice(0, -2)
  let FanmianWidth = computedStyle.width.slice(0, -2)
  if (
    left.value <=
    -((parseFloat(FanmianRight) + parseFloat(FanmianWidth)) * count.value)
  ) {
    list.value.splice(0, 10)
    left.value +=
      (parseFloat(FanmianRight) + parseFloat(FanmianWidth)) * count.value
    for (let i = 0; i < 10; i++) {
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
  }, 30)
})
</script>

<style lang="scss" scoped>
#banner-s {
  width: 100%;
  height: 300px;
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
      width: 1680px;
      height: 200px;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      //transition: all;
      .bannerListDom {
        width: 150px;
        height: 200px;
        margin-right: 20px;
        flex-shrink: 0;

        cursor: pointer;
        position: relative;

        &:hover .bannerListDomActive {
          transform: rotate3d(0, 1, 0, 180deg);
        }

        .bannerListDomActive {
          width: 150px;
          height: 200px;
          transition: transform 1s;
          background: yellow;
        }
      }
    }
  }
}
</style>
