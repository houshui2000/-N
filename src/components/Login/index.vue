<template>
  <div id='login' v-if='loginStore.login'>
    <div class='content'>
      <div class='close' @click='()=>loginStore.login=false'>X</div>
      <div class='contentLogin'>
        <div class='left'>
          <div>登录</div>
          <div class='inputBox'></div>
          <div class='loginBtn' @click="handleLoginBtn('phone')">立即登录</div>
          <div class='loginBtn' @click="handleLoginBtn('password')">立即登录</div>
          <div class='otherLoginBox'>
            <div class='wxLogin' @click="handleLoginBtn('wx')">微信登录</div>
            <div class='qqLogin'  @click="handleLoginBtn('qq')">QQ登录</div>
          </div>
        </div>
        <div class='right'>
          <LoginWx/>
          <LoginQQ/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/pinia'
import LoginWx from '@/components/Login/component/Loginwx.vue'
import LoginQQ from '@/components/Login/component/Loginqq.vue'
const { loginStore } = useStore()

const handleLoginBtn =(res)=>{
  console.log(res)
  loginStore.loginState=res
  // if(res==='phone'){
  //
  // }else if(res==='password'){
  //
  // }else if(res==='wx'){
  //   loginStore.loginWX=true
  // }else if(res==='qq'){
  //
  // }
}

</script>

<style lang='scss' scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 800px;
    height: 400px;
    background: white;
    position: relative;

    .close {
      width: 40px;
      height: 40px;
      background: yellow;
      font-size: 40px;
      font-weight: 900;
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
      text-align: center;
      line-height: 40px;
    }

    .contentLogin {
      width: 800px;
      height: 360px;
      position: absolute;
      top: 40px;
      left: 0;
      display: flex;

      .left {
        width: 450px;
        height: 360px;
        background: #8d5cc7;

        .otherLoginBox {
          width: 100%;
          height: 50px;
          background: yellow;
          display: flex;
          justify-content: center;
          align-items: center;
          .wxLogin,.qqLogin{
            width: 100px;
            height: 40px;
            border: 1px solid #ccc;
            margin: 0 20px;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            line-height: 40px;
          }
        }
      }

      .right {
        width: 350px;
        height: 360px;
        background: green;

      }
    }
  }
}
</style>
