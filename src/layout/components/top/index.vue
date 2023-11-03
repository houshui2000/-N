<template>
  <div id="navTop">
    <!--  左边  -->
    <div class="navContent-bottom" ref="navBorder"></div>
    <div class="left">
      <div class="logo">
        <div class="logoImg"></div>
      </div>
      <div class="navContent">
        <div
          class="navContent-box"
          :data-dom="`slide${item.name}`"
          :class="{ active: navIndex === item.name }"
          v-for="(item, index) in navList"
          :key="item.name"
          ref="navContentbox"
          @click="handleNavOpen(item, index)"
        >
          <span v-if="item.meta.immediate">{{ item.meta.name }}</span>
        </div>
      </div>
    </div>
    <!--  右边  -->
    <div class="right">
      <!-- <div class="search" @click="handleSeachShow"></div> -->
      <div @click="router.push('/app')" class="download"></div>
      <!-- <div class="cardMoneyBox">
        <div class="cardMoney"></div>
        <div class="fontsize">{{ useUsersStore.userInfo.dbalance }}</div>
        <div class="pay"></div>
      </div> -->
      <!-- <div class="dMoneyBox">
        <div class="dMoney">
          <SvgIcon size="22px" icon-class="DBi" />
        </div>
        <div class="fontsize">{{ useUsersStore.userInfo.dbalance }}</div>
      </div> -->
      <div class="fen"></div>
      <div class="adminUser">
        <div class="uploadText">
          <div @click="handleLogin" v-if="!loginStore.token">登录</div>
          <div v-if="loginStore.token">{{ useUsersStore.userInfo.nickname }}</div>
        </div>
        <div class="uploadImg" v-if="loginStore.token">
          <div class="dian"></div>
          <div class="uploadPhoto">
            <img v-if="useUsersStore.userInfo.avatar" :src="`${loginStore.cossUrl}${useUsersStore.userInfo.avatar}`" />
          </div>
        </div>
        <div class="uploadContent" v-if="loginStore.token" @click="handleMyShow">
          <div class="uploadBox">
            <div class="uploadBox-img"></div>
            <div class="nickName">{{ useUsersStore.userInfo.nickname }}</div>
          </div>
          <div class="promotionBtn"></div>
          <div class="IconBox">
            <div class="iconDiv">
              <div class="icon"></div>
              <div class="text">掌上卡竞</div>
            </div>
            <div class="iconDiv">
              <div class="icon"></div>
              <div class="text" @click="handleLoginExit()">退出登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  登录组件  -->
    <Login />
  </div>
</template>
<script setup>
import { ref, computed, nextTick, onMounted, watch } from 'vue'
// import SvgIcon from '@/components/SvgIcon/index.vue'
import Login from '@/components/Login/index.vue'
import { useStore } from '@/pinia'
import { removeItem } from '@/utils/storage.js'
import { userlogout } from '@/network/userInterface.js'
import { ToLogin, NoLogin } from '@/router/InputTransfer.js'
// import router from '@/router/index.js'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const { loginStore, useUsersStore } = useStore()

// let navList = reactive([
//   // { name: '卡GO', push: '' },
//   // { name: '飞升计划', push: '' },
//   // { name: '啦啦啦计划', push: '' }
//   ...NoLogin,
//   ...ToLogin
// ])
let navList = computed(() => {
  let rout = [...NoLogin, ...ToLogin]
  const res = rout.filter((item) => item.meta.immediate)
  return res
})
let navIndex = ref('')
const handleNavOpen = (item) => {
  console.log(item.path)

  router.push(item.path)

  // navIndex.value = item.name
  // let dom=document.querySelectorAll('.navContent-box')[navIndex.value].getBoundingClientRect()
  // let navBorderWidth=document.querySelector('.navContent-bottom').getBoundingClientRect()
  // let logo=parseFloat(getComputedStyle(document.querySelector('.logo')).width.slice(0, -2))
  // let navBottom=(dom.x+dom.width/2-navBorderWidth.width/2-logo)
  // navBorder.value.style.left=34+'px'
}

const handleLogin = () => {
  loginStore.login = true
}
//退出登录
const handleLoginExit = async () => {
  // let result = await userlogout()
  await userlogout()

  removeItem('token')
  loginStore.token = ''
  loginStore.userId = ''
  removeItem('userId')
  useUsersStore.handleUserInfoInit()
  loginStore.login = true
  console.log('退出登录')
}
//跳转个人中心
const handleMyShow = () => {
  router.push('/assetLibrary')
}
onMounted(() => {})
const navBorder = ref(null)
const navContentbox = ref([])
/**动态路由提示切换 */
const navContenBottomDOM = () => {
  let genuineDOm = navContentbox.value.find((item) => {
    if (item.dataset.dom == navIndex.value) {
      return item
    }
  })
  if (!genuineDOm) {
    navBorder.value.style.left = '-100px'
    return
  }
  const { left, bottom, width } = genuineDOm.getBoundingClientRect()
  navBorder.value.style.left = left + width / 2 - 10 + 'px'
  navBorder.value.style.top = bottom - 10 + 'px'
}
watch(
  () => router,
  () => {
    navIndex.value = 'slide' + route.name
    nextTick(() => {
      navContenBottomDOM()
    })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
#navTop {
  // min-width: 1920px;
  width: 100%;

  height: 70px;
  background: rgba(#000, 0.6);
  background-size: contain;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 1000;
  .navContent-bottom {
    width: 32px;
    height: 2px;
    background: url($gxsnavHover) no-repeat center;
    background-size: contain;
    position: fixed;
    top: 60px;
    z-index: 99;
    left: 0;
    transition: all 0.5s;
    // margin-left: -16px;
  }
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
      }
    }
  }

  .right {
    width: 710px;
    height: 70px;
    line-height: 70px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // .search {
    //   width: 26px;
    //   height: 26px;
    //   background: url($gxssearch) no-repeat center;
    //   background-size: contain;
    // }

    .download {
      width: 26px;
      height: 26px;
      background: url($gxsappdownload) no-repeat center;
      background-size: contain;
      margin-left: 30px;
    }

    // .cardMoneyBox {
    //   width: 174px;
    //   height: 34px;
    //   background: url($gxstiao1) no-repeat center;
    //   background-size: contain;
    //   margin-left: 40px;
    //   display: flex;
    //   align-items: center;
    //   position: relative;

    //   .cardMoney {
    //     position: absolute;
    //     width: 29px;
    //     height: 32px;
    //     background: url($gxscardMoney) no-repeat center;
    //     background-size: contain;
    //     left: 11px;
    //   }

    //   .fontsize {
    //     max-width: 100px;
    //     font-size: 14px;
    //     font-family: 'PingFang SC';
    //     color: white;
    //     position: absolute;
    //     left: 40px;
    //     font-weight: 600;
    //   }

    //   .pay {
    //     width: 22px;
    //     height: 22px;
    //     background: url($gxsRecharge) no-repeat center;
    //     background-size: contain;
    //     position: absolute;
    //     right: 11px;
    //   }
    // }

    // .dMoneyBox {
    //   width: 155px;
    //   height: 34px;
    //   background: url($gxstiao2) no-repeat center;
    //   background-size: contain;
    //   margin-left: 16px;
    //   display: flex;
    //   align-items: center;

    //   .dMoney {
    //     width: 24px;
    //     height: 24px;
    //     @include Myflex();
    //     // background: url($gxsDMoney) no-repeat center;
    //     // background-size: contain;
    //     margin-left: 11px;
    //   }

    //   .fontsize {
    //     max-width: 100px;
    //     font-size: 14px;
    //     font-family: 'PingFang SC';
    //     color: white;
    //     margin-left: 10px;
    //     font-weight: 600;
    //   }
    // }

    .fen {
      margin: 0 30px;
      height: 18px;
      border-right: 1px solid #343b65;
    }

    .adminUser {
      width: 146px;
      min-height: 70px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;

      &:hover .uploadContent {
        height: 240px;
      }

      .uploadText {
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

      .uploadImg {
        width: 34px;
        height: 34px;
        //overflow: hidden;
        border-radius: 50%;
        // background: url($gxsavatar) no-repeat center;
        // background-color: saddlebrown;
        // background-size: contain;
        margin-left: 14px;
        position: relative;

        .dian {
          width: 7px;
          height: 7px;
          background: url($gxsdian) no-repeat center;
          background-size: contain;
          position: absolute;
          top: 2px;
          right: 2px;
          z-index: 9;
        }

        .uploadPhoto {
          width: 30px;
          height: 30px;
          overflow: hidden;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -15px;
          margin-left: -15px;
          @include Myflex();
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .uploadContent {
        width: 280px;
        height: 0px;
        position: absolute;
        background: yellow;
        top: 70px;
        right: 0px;
        overflow: hidden;
        transition: height 0.3s;
        background: url($gxsuploadContent) no-repeat center;
        background-size: 280px 240px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .uploadBox {
          width: 280px;
          height: 44px;
          display: flex;
          margin-top: 23px;

          .uploadBox-img {
            width: 44px;
            height: 44px;
            background: url($gxsavatar) no-repeat center;
            background-size: contain;
            background: yellow;
            border-radius: 50%;
            margin-left: 20px;
          }

          .nickName {
            width: 198px;
            height: 44px;
            line-height: 44px;
            color: white;
            font-size: 16px;
            font-weight: 400;
            font-family: 'Alibaba PuHuiTi';
            margin-left: 18px;
          }
        }

        .promotionBtn {
          width: 123px;
          height: 38px;
          background: url($gxspromotionBtn) no-repeat center;
          background-size: 100% 100%;
          margin-top: 29px;
        }

        .IconBox {
          width: 242px;
          height: 40px;
          display: flex;
          justify-content: center;
          margin-top: 49px;
          .iconDiv {
            width: 118px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 40px;
            font-family: 'PingFang SC';
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: #999;
            &:nth-child(2) {
              margin-left: 8px;
            }
            &:nth-child(2) .icon {
              background: url($gxsexitIcon) no-repeat center;
              background-size: contain;
            }
            .icon {
              width: 20px;
              height: 20px;
              background: url($gxsqrcardIcon) no-repeat center;
              background-size: contain;
            }
            .text {
              margin-left: 12px;
            }
          }
        }
      }
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
