<template>
  <div id="login" v-if="loginStore.loginWX">
    <div class="weixinBtn" @click="handleWinxinLogin">
      微信登录
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import { useStore } from '@/pinia'
const { loginStore } = useStore()
const route = useRoute()
const handleWinxinLogin = () => {
  window.open(`https://open.weixin.qq.com/connect/qrconnect?appid=wx9cb4b4cccc022d9e&redirect_uri=${encodeURI('https://www.95skins.com')}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`)
  // route.query.code

}
</script>

<style lang="scss" scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, .8);

  .weixinBtn {
    width: 200px;
    height: 60px;
    padding: 10px 20px;
    background: #453293;
    color: white;
  }
}
</style>
