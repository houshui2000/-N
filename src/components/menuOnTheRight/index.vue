<template>
  <div class="menuOnTheRight">
    <div
      v-for="(item, index) in Xin_xiArr"
      @mousemove="mouseMoveMy(item, index)"
      @mouseleave="mouseleaveMy(item, index)"
      :key="index"
      class="div"
      @click="item.MyFuncation"
    >
      <div class="div_img">
        <img v-show="item.hover" :src="item.icon" alt="" />
        <img v-show="!item.hover" :src="item.iconA" alt="" />
      </div>
      <p>{{ item.title }}</p>
    </div>
    <!--  -->
    <Transition name="slide-fade">
      <div v-if="moveRef" class="officials">
        <div class="top">
          <img class="equalProportions" src="@/assets/images/all/erwima.png" alt="" />
        </div>
        <p>扫描二维码加入群聊</p>
      </div>
    </Transition>
  </div>
</template>
<script setup name="menuOnTheRight">
import { ref, onMounted } from "vue"
const url = (img) => new URL(`../../assets/images/menuOnTheRight/${img}.png`, import.meta.url).href
import { useRouter } from "vue-router"
const router = useRouter()
const moveRef = ref(false)
const Xin_xiArr = ref([
  {
    title: "资产库",
    icon: url("wuti"),
    iconA: url("wuti_a"),
    hover: true,
    MyFuncation() {
      router.push("/assetLibrary")
    }
  },
  { title: "官群", icon: url("qun"), iconA: url("qun_a"), hover: true },
  // { title: '客服', icon: url('ke'), iconA: url('ke_a'), hover: true },
  {
    title: "返回顶部",
    icon: url("fan"),
    iconA: url("fan_a"),
    hover: true,
    MyFuncation() {
      const miautumnFestival = document.querySelector(`body`)
      miautumnFestival.scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start" // 上边框与视窗顶部平齐。默认值
      })
    }
  }
])
onMounted(() => {
  // officialsFun()
})
const mouseMoveMy = (item, index) => {
  item.hover = false
  if (index === 1) {
    moveRef.value = true
  }
}
const mouseleaveMy = (item, index) => {
  item.hover = true
  if (index === 1) {
    moveRef.value = false
  }
}
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.menuOnTheRight {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-30%) scale(0.8);
  // width: 100px;
  padding-right: 11px;
  height: 300px;
  z-index: 900;
  .div {
    cursor: pointer;
    margin-top: 12px;
    @include Myflex();
    flex-direction: column;
    .div_img {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      @include bordergradientMY();
      // background: url('@/assets/images/menuOnTheRight/wuti.png') no-repeat scroll left bottom/ 100% 100%;
      @include Myflex();
      > img {
        width: 42px;
        height: 42px;
        // transform: scale(0.8);
      }
    }
    p {
      font: normal normal 400 12px;
      color: white;
      margin-top: 5px;
      text-align: center;
    }
    &:hover {
      .div_img {
        transition: all 0.5s;

        border: 0;
        background-image: none !important;
        background: linear-gradient(180deg, rgba(183, 0, 154, 1) 0%, rgba(22, 21, 242, 1) 100%) !important;
      }
    }
  }
  .officials {
    position: fixed;
    right: 120px;
    top: 100px;
    width: 233px;
    // height: 191px;
    border-radius: 8px;
    padding: 8px; // background-color: saddlebrown;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(83, 56, 119, 0.7) 0%, rgba(53, 81, 125, 0.6) 100%),
      linear-gradient(180deg, #241328 0%, #000c2c 100%)
    );
    .top {
      width: 217px;
      height: 222px;
      @include Myflex();
      flex-direction: column;
      border-radius: 8px;
      @include bordergradientMY(
        linear-gradient(180deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
        linear-gradient(180deg, #241328 0%, #000c2c 100%)
      );
    }
    > p {
      font: normal normal 400 14px "PingFang SC";
      color: white;
      padding-top: 6px;
      @include Myflex();
      margin: auto;
      width: 100%;
    }
  }
}
//
// .wuti {
//   background: url('@/assets/images/menuOnTheRight/wuti.png') no-repeat scroll left bottom/ 100% 100%;
// }
</style>
