<template>
  <div id="navTop">
    <!--  左边  -->
    <div class="left">
      <div class="logo">
        <div class="logoImg"></div>
      </div>
      <div class="navContent">
        <div
          class="navContent-box"
          :class="{ active: navIndex === index }"
          v-for="(item, index) in navList"
          :key="item.name"
          @click="handleNavOpen(item, index)"
        >
          {{ item.name }}
          <div class="navContent-bottom" v-show="navIndex === index" ref="navBorder"></div>
        </div>
      </div>
    </div>
    <!--  右边  -->
    <div class="right">
      <div class="search" @click="handleSeachShow"></div>
      <div class="download"></div>
      <div class="cardMoneyBox">
        <div class="cardMoney"></div>
        <div class="fontsize">4235345</div>
        <div class="pay"></div>
      </div>
      <div class="dMoneyBox">
        <div class="dMoney">
          <SvgIcon size="18px" icon-class="DBi" />
        </div>
        <div class="fontsize">4235345</div>
      </div>
      <div class="fen"></div>
      <div class="nickName">昵称是七个字码</div>
      <div class="upload"></div>
    </div>
    <!-- <div class="searchBox"></div> -->
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

let navList = reactive([
  { name: '卡GO', push: '' },
  { name: '飞升计划', push: '' },
  { name: '啦啦啦计划', push: '' }
])
let navIndex = ref(0)
let navBorder = ref(null)
const handleNavOpen = (item, index) => {
  navIndex.value = index
  // let dom=document.querySelectorAll('.navContent-box')[navIndex.value].getBoundingClientRect()
  // let navBorderWidth=document.querySelector('.navContent-bottom').getBoundingClientRect()
  // let logo=parseFloat(getComputedStyle(document.querySelector('.logo')).width.slice(0, -2))
  // let navBottom=(dom.x+dom.width/2-navBorderWidth.width/2-logo)
  // navBorder.value.style.left=34+'px'
}
const handleSeachShow = () => {}
onMounted(() => {})
</script>
<style lang="scss" scoped>
#navTop {
  width: 1920px;
  height: 70px;
  background: rgba(#000, 0.6);
  background-size: contain;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .left {
    display: flex;

    .logo {
      width: 347px;
      height: 70px;
      display: flex;
      align-items: center;

      .logoImg {
        width: 119px;
        height: 24.3px;
        background: white;
        background: url($gxslogo) no-repeat center;
        background-size: contain;
        margin-left: 58px;
      }
    }

    .navContent {
      max-width: 880px;
      height: 70px;
      display: flex;
      overflow: hidden;
      position: relative;

      .navContent-box {
        margin-right: 80px;
        height: 70px;
        line-height: 70px;
        color: white;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Alibaba PuHuiTi';
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.3s;

        &.active {
          font-weight: 700;
        }

        .navContent-bottom {
          width: 32px;
          height: 2px;
          background: url($gxsnavHover) no-repeat center;
          background-size: contain;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -16px;
        }
      }
    }
  }

  .right {
    width: 710px;
    height: 70px;
    line-height: 70px;
    display: flex;
    align-items: center;

    .search {
      width: 26px;
      height: 26px;
      background: url($gxssearch) no-repeat center;
      background-size: contain;
    }

    .download {
      width: 26px;
      height: 26px;
      background: url($gxsappdownload) no-repeat center;
      background-size: contain;
      margin-left: 30px;
    }

    .cardMoneyBox {
      width: 174px;
      height: 34px;
      background: url($gxstiao1) no-repeat center;
      background-size: contain;
      margin-left: 40px;
      display: flex;
      align-items: center;
      position: relative;

      .cardMoney {
        position: absolute;
        width: 29px;
        height: 32px;
        background: url($gxscardMoney) no-repeat center;
        background-size: contain;
        left: 11px;
      }

      .fontsize {
        max-width: 100px;
        font-size: 14px;
        font-family: 'PingFang SC';
        color: white;
        position: absolute;
        left: 40px;
        font-weight: 600;
      }

      .pay {
        width: 22px;
        height: 22px;
        background: url($gxsRecharge) no-repeat center;
        background-size: contain;
        position: absolute;
        right: 11px;
      }
    }

    .dMoneyBox {
      width: 155px;
      height: 34px;
      background: url($gxstiao2) no-repeat center;
      background-size: contain;
      margin-left: 16px;
      display: flex;
      align-items: center;

      .dMoney {
        width: 24px;
        height: 24px;
        @include Myflex();
        // background: url($gxsDMoney) no-repeat center;
        // background-size: contain;
        margin-left: 11px;
      }

      .fontsize {
        max-width: 100px;
        font-size: 14px;
        font-family: 'PingFang SC';
        color: white;
        margin-left: 10px;
        font-weight: 600;
      }
    }

    .fen {
      margin: 0 30px;
      height: 18px;
      border-right: 1px solid #343b65;
    }

    .nickName {
      width: 101px;
      height: 70px;
      line-height: 70px;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      color: white;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .upload {
      width: 31px;
      height: 31px;
      overflow: hidden;
      border-radius: 50%;
      background: #453293;
      margin-left: 14px;
    }
  }

  .searchBox {
    width: 1920px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    // background: rgba(#000, 0.6);

    z-index: 100;
  }
}
</style>
