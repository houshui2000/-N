<template>
  <div id='register' v-if='loginStore.registerState!=="other"'>
    <div class='registerPopup'>
      <div class='titleBox'>
        <div class='close' @click='()=>loginStore.registerState="other"'></div>
        <div class='text'>
          <span  v-if='loginStore.registerState==="wx" || loginStore.registerState==="qq"'>第三方扫描登录</span>
          <span  v-if='loginStore.registerState==="register"'>注册</span>
          <span  v-if='loginStore.registerState==="retrievePassword"'>找回密码</span>
        </div>
      </div>
      <div class='codeBox'>
        <div class='left'>
          <!--      微信登录    -->
          <div class='BoxOff' v-if='loginStore.registerState==="wx"'>
            <LoginWx />
          </div>
          <!--     qq登录     -->
          <div class='BoxOff'>
            <LoginQQ v-if='loginStore.registerState==="qq"'></LoginQQ>
          </div>
          <!--    注册      -->
          <div class='registerOff' v-if='loginStore.registerState==="register" || loginStore.registerState==="retrievePassword" '>
            <Register/>
          </div>
        </div>
        <div class='right'></div>
      </div>
      <div class='loginText' @click='()=>loginStore.registerState="other"'>已有卡竞账号？去登录</div>

    </div>
  </div>
</template>

<script setup>
import LoginWx from '@/components/Login/component/Loginwx.vue'
import { useStore } from '@/pinia'
import LoginQQ from '@/components/Login/component/Loginqq.vue'
import Register from '@/components/Login/component/register.vue'

const { loginStore } = useStore()
</script>

<style lang='scss' scoped>

#register {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}

//
//@media mediaType and (min-width: 800px) {
.registerPopup {
  width: 800px;
  height: 600px;
  background: white;
  position: relative;

  .titleBox {
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 50px;

    .close {
      width: 40px;
      height: 40px;
      background: yellow;
      font-size: 40px;
      font-weight: 900;
      cursor: pointer;
      text-align: center;
      line-height: 40px;
    }

    .text {
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      font-weight: bold;
      margin-left: 20px;
    }
  }

  .codeBox {
    width: 800px;
    display: flex;
    justify-content: center;
    margin-top: 20px;


    .left {
      width: 400px;
      height: 400px;
      background: yellow;
      display: flex;
      justify-content: center;
      align-items: center;

      .BoxOff {
        width: 300px;
        height: 400px;
      }
      .registerOff{
        width: 400px;
        height: 400px;

      }
    }

    .right {
      width: 300px;
      height: 300px;
      background: black;
      margin-left: 20px;
    }
  }

  .loginText {
    margin-left: 50px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;

  }
}

//}

</style>
