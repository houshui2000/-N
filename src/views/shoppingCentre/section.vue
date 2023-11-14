<template>
  <div class="section">
    <div class="section_left">
      <div ref="sticky" class="sticky">
        <Section_left
          @LeftDataInput="(LeftData.name = $event), init()"
          :LeftData="LeftData"
          @LeftData="LeftDataFuncation($event)"
        />
      </div>
    </div>

    <div class="section_right">
      <div v-if="creatData.records?.length > 0" class="section_right_one">
        <section_right :INterOb="creatData.records" />
      </div>

      <div class="section_right_one" v-else>
        <MissWakeupPage :title="'暂无资产'" :titleTwo="'敬请期待!'" />
      </div>
    </div>
  </div>
  <div
    ref="xianshi_geng"
    v-show="creatData.records?.length > 0 && creatData.total !== creatData.records?.length"
    class="xianshi_geng"
  >
    加载更多
  </div>
</template>
<script setup>
import Section_left from "./components/sectionLeft/index.vue"
import section_right from "./components/sectionRight/index.vue"
import MYIntersectionObserver from "@/utils/IntersectionObserver.js"
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"
import { ref, onMounted, onUnmounted } from "vue"
import { shopliscard } from "@/network/shoppingCentre/shoppingCentre"
import { mallHomepage } from "@/enumerate/index.js"

const xianshi_geng = ref(null)
const LeftData = ref({
  name: "",
  orderColumn: "1",
  categoryIds: []
})
const FenYe = {
  size: 10,
  total: 0,
  current: 1
}
let blocktextcenter = {
  top: 0,
  height: 0,
  sectionleft: 0
}
let footerRef = ref(false) // 判断底部是否出现 -- 出现左菜单不继续滚dog
onUnmounted(() => {
  window.removeEventListener("scroll", scrollMy)
})
onMounted(() => {
  MYIntersectionObserver(xianshi_geng.value, () => {
    FenYe.size += 10
    init()
  })

  let footer = document.querySelector("#footer")

  MYIntersectionObserver(
    footer,
    () => {
      footerRef.value = true
    },
    () => {
      footerRef.value = false
    }
  )
  const block = document.querySelector(".block.text-center")
  const section_left = document.querySelector(".section_left")
  blocktextcenter.top = block.offsetTop
  blocktextcenter.height = block.offsetHeight

  blocktextcenter.sectionleft = section_left.getBoundingClientRect().left

  window.addEventListener("scroll", scrollMy)
})
const creatData = ref({})
const init = async () => {
  // 排序方式 修改
  const sort = mallHomepage.find((item) => item.value === LeftData.value.orderColumn)
  // 排序方式 修改end

  const res = await shopliscard({
    current: FenYe.current,
    size: FenYe.size,
    orderColumn: sort.name,
    asc: sort.sort,
    name: LeftData.value.name,
    categoryIds: LeftData.value.categoryIds.join(",")
  })
  // creatData.records
  creatData.value = res.data
}
init()
let time = null
/**子组件改动更新接口 */
const LeftDataFuncation = (e) => {
  LeftData.value.orderColumn = e[1]
  LeftData.value.categoryIds = e[0]
  if (time) clearTimeout(time)
  time = setTimeout(() => {
    init()
  }, 500)
}

const sticky = ref(null)
const scrollMy = () => {
  if (!sticky.value) return
  let s = document.documentElement.scrollTop || document.body.scrollTop

  if (footerRef.value) {
    const sectionright = document.querySelector(".section_right").offsetHeight
    sticky.value.style.position = "absolute"
    if (sectionright < sticky.value.offsetHeight) {
      sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight / 2) + "px"
    } else {
      sticky.value.style.top = Math.abs(sectionright - sticky.value.offsetHeight) + "px"
    }
    sticky.value.style.left = 0 + "px"
  } else if (s >= blocktextcenter.top + blocktextcenter.height) {
    sticky.value.style.position = "fixed"
    sticky.value.style.top = 85 + "px"
    sticky.value.style.left = blocktextcenter.sectionleft + "px"
  } else {
    sticky.value.style.position = "absolute"
    sticky.value.style.top = 0 + "px"
    sticky.value.style.left = 0 + "px"
  }
}
</script>
<style lang="scss" scoped>
.section {
  position: relative;
  width: 1664px;
  min-height: 1200px;
  margin: auto;
  padding-top: 57px;
  @include Myflex(space-between, flex-start);
  .section_left {
    // position: sticky;
    // top: 0px;
    // left: 0;
    position: relative;
    width: 270px;
    min-height: 600px;
    border-radius: 6px;
    .sticky {
      // position: fixed;
      // top: 0px;
      // left: 0px;
      border-radius: 6px;
      backdrop-filter: blur(2px);
      background: #000819;
      border: 1px solid #1a2a40;
      position: absolute;
      left: 0;
      top: 0;
      width: 270px;
      // height: 100%;
      // height: 300px;
      // background-color: saddlebrown;
    }
  }
  .section_right {
    width: 1372px;
    background-color: transparent;
    .section_right_one {
      width: 100%;
    }
  }
}
.xianshi_geng {
  border-radius: 2px;
  margin: 90px auto 0 auto;
  border: 1px solid #333;
  width: 210px;
  height: 50px;
  background: rgba(0, 5, 18, 0.4);
  @include Myflex();
  font: normal normal 600 14px "PingFang SC";
  color: white;
  backdrop-filter: blur(2px);
}
</style>
