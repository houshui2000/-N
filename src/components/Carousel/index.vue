<template>
  <div id="Carousel" :class="{ active: !btnActive }">
    <div class="content">
      <div class="CarouselBoxs" ref="boxRef">
        <div class="box" v-for="(item, index) in list" @click="handleBannerShow">
          <!--    正面      -->
          <div class="frontBox">
            <div class="cardImg">
              <img
                src="https://img0.baidu.com/it/u=2200133816,1938200688&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                alt=""
              />
            </div>
            <div class="frontText">一直小蜜蜂飞亚服一直小蜜蜂飞亚服</div>
          </div>
          <!--      反面    -->
          <div class="oppositeBox">
            <div class="userImg">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F89e0676b-c0c3-4959-bbed-bc1cf0470250%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700119396&t=2ed784bd3180983a8a60b50a22fd161c"
                alt=""
              />
            </div>
            <div class="frontText">一直</div>
          </div>
        </div>
      </div>
      <div class="Submit" :class="{ active: !btnActive }" @click="handleBtnShow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
// import {getBannner} from "@/network/api.js";

let btnActive = ref(true)
let boxRef = ref(null)
let list = ref([...Array(40).keys()])

const handleBtnShow = () => {
  btnActive.value = !btnActive.value
}

const handleBannerShow = () => {
  // getBannner().then(res=>{
  // })
}

const handleCarouselScroll = () => {
  let offsetTop = Number(boxRef.value.offsetTop - 1)
  // let height=Number(document.querySelector('.content').getBoundingClientRect().height)
  if (offsetTop <= -2520) {
    for (let i = 0; i < 20; i++) {
      list.value.push(i)
    }
    list.value.splice(0, 20)
    boxRef.value.style.top = `0px`
  } else {
    boxRef.value.style.top = `${offsetTop}px`
  }

  requestAnimationFrame(handleCarouselScroll)
}
onMounted(() => {
  requestAnimationFrame(handleCarouselScroll)
})
</script>

<style lang="scss" scoped>
@keyframes fontsizeAmin {
  from {
    margin-top: 7px;
  }
  to {
    margin-top: 20px;
  }
}

#Carousel {
  width: 182px;
  height: calc(100vh - 111px);
  position: fixed;
  top: 111px;
  left: 0;
  z-index: 1000;
  transition: left 0.3s;

  &.active {
    left: -159px;
  }

  .content {
    width: 182px;
    height: calc(100vh - 111px);
    position: relative;
    overflow: hidden;
    background: url($gxscarousebg) no-repeat left;
    background-size: 159px calc(100vh - 111px);
    .CarouselBoxs {
      width: 159px;
      height: calc(100vh - 111px);

      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;

      .box {
        width: 130px;
        height: 126px;
        background-size: contain;
        flex-shrink: 0;
        position: relative;

        &:hover .frontBox {
          opacity: 0;
        }

        &:hover .oppositeBox {
          opacity: 1;
        }

        &:hover .oppositeBox .frontText {
          animation: fontsizeAmin linear 0.3s;
          animation-fill-mode: forwards;
        }

        .frontBox {
          width: 130px;
          height: 126px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 1;
          z-index: 2;
          background: url($gxsbannerBoxs) no-repeat center;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;

          .cardImg {
            width: 57px;
            height: 74px;
            margin: 9px auto 4px;
            transition: all 0.3s;
            flex-shrink: 0;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .frontText {
            width: 114px;
            height: 34px;
            color: white;
            font-size: 12px;
            line-height: 16.8px;
            text-align: center;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
          }
        }

        .oppositeBox {
          width: 130px;
          height: 126px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: url($gxsuserbannerbg) no-repeat center;
          background-size: contain;

          .userImg {
            width: 58px;
            height: 58px;
            margin: 17px auto 0px;
            overflow: hidden;
            border-radius: 50%;
            flex-shrink: 0;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .frontText {
            width: 114px;
            height: 34px;
            color: white;
            font-size: 12px;
            text-align: center;
            transition: all 0.3s;
            overflow: hidden;
          }
        }
      }
    }

    .Submit {
      width: 23px;
      height: 74px;
      background: url($gxscloseBtn) no-repeat center;
      background-size: contain;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -37px;
      transition: all 0.3s;

      &.active {
        background: url($gxsopenBtn) no-repeat center;
        background-size: contain;
      }
    }
  }
}
</style>
