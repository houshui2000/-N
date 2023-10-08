<template>
  <section>
    <div class="section_left">
      <div class="shishi">史实</div>
      <div class="zuijia">最佳</div>
    </div>
    <div ref="sectionRight" class="section_right">
      <aside @mousemove="Mymousemove" @mouseleave="Mymouseleave" ref="asideMy">
        <div v-for="(item, index) in createDAte" :key="index" class="fanmian">
          <div class="fan_two">
            <div class="zheng">
              <img src="@/assets/images/test.png" alt="" />
              <p class="danyi">{{ item }}</p>
            </div>
            <div class="fan">
              <img src="@/assets/images/test.png" alt="" />
              <p class="danyi">头像</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const asideMy = ref()
const createDAte = ref([])
const sectionRight = ref()
let time = null
const scroll = () => {
  const sectionRightBIan = sectionRight.value.offsetWidth
  const asideMyBIan = asideMy.value.offsetLeft
  if (Math.abs(asideMyBIan) > sectionRightBIan - 10) {
    // asideMy.value.style.left = `${0}px`
    // time = requestAnimationFrame(scroll)
    cancelAnimationFrame(scroll)
    return
  }
  const ZhongLeft = asideMyBIan - 1
  asideMy.value.style.left = `${ZhongLeft}px`
  time = requestAnimationFrame(scroll)
}
const Mymousemove = () => {
  cancelAnimationFrame(time)
}
const Mymouseleave = () => {
  // time = requestAnimationFrame(scroll)
}
onMounted(() => {
  for (let i = 0; i < 10; i++) {
    createDAte.value.push(i)
  }
  createDAte.value = [...createDAte.value, ...createDAte.value]
  time = requestAnimationFrame(scroll)
})
</script>
<style lang="scss" scoped>
section {
  margin-top: 20px;
  height: 100px;

  background-color: salmon;
  // @include Myflex(space-between);
  @include Myflex(flex-start);

  $section_leftWidth: 100px;
  .section_left {
    width: $section_leftWidth;
    height: 100%;
    @include Myflex(space-between);
    flex-direction: column;
    padding: 0 10px;
    > div {
      height: 45%;
      width: 100%;
      @include Myflex();
      background-color: seagreen;
    }
  }
  .section_right {
    width: calc(100% - #{$section_leftWidth} - 100px);
    background-color: rgb(1, 189, 14);
    overflow: hidden;
    position: relative;
    height: 100%;
    @include Myflex(flex-start); // perspective: 400px;
    aside {
      position: absolute;
      left: 0;
      top: 0;
      @include Myflex(flex-start); // perspective: 400px;
      height: 100%;
      background-color: aliceblue;
      .fanmian {
        width: 150px;
        height: 100%;
        background-color: sienna;

        // margin-right: 20px;
        &:hover {
          .fan_two {
            transform: rotateY(180deg);
          }
        }
        .fan_two {
          width: 100%;
          height: 100%;
          position: relative;
          transition: all 0.4s;
          transform-style: preserve-3d;
        }
        .fan_two > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          > img {
            width: 100%;
            height: 80%;
          }
          > p {
            width: 100%;
            height: 20%;
            background-color: bisque;
            text-align: center;
          }
        }
        .zheng {
          backface-visibility: hidden;
          z-index: 1;
        }
        .fan {
          transform: rotateY(180deg);
        }
      }
    }
  }
}
</style>
