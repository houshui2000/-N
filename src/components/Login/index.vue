<template>
  <div id="login" v-if="loginStore.loginWX">
    <div class="weixinBtn" @click="handleWinxinLogin">微信登录</div>
    <div class="wxBox">
      <wxlogin
          v-if="appid && redirect_uri"
          :appid="appid"
          scope="snsapi_login"
          :redirect_uri="redirect_uri"
          :href="href"
          :state="state"
      ></wxlogin>
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import wxlogin from 'vue-wxlogin'
import {useStore} from '@/pinia'

const {loginStore} = useStore()
// const router = useRouter()

let appid = 'wx9cb4b4cccc022d9e&redirect'
let redirect_uri = `${encodeURI('https://www.95skins.com')}`
let state = 'STATE#wechat_redirect'
let href = '' // 自定义样式链接

const handleWinxinLogin = () => {
  // window.open(
  //   `https://open.weixin.qq.com/connect/qrconnect?appid=wx9cb4b4cccc022d9e&redirect_uri=${encodeURI(
  //     'https://www.95skins.com'
  //   )}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`
  // )


}
</script>

<style lang="scss" scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);

  .weixinBtn {
    width: 200px;
    height: 60px;
    padding: 20px;
    background: #453293;
    color: white;
  }

  .wxBox {
    width: 500px;
    height: 500px;
  }
}
</style>
<!--
<template>
  <div class="wxLogin">
    <span class="title">微信扫一扫登录</span>
    <div class="main_wx">
      阿思达的
      <wxlogin
        v-if="appid && redirect_uri"
        :appid="appid"
        scope="snsapi_login"
        :redirect_uri="redirect_uri"
        :href="href"
        :state="state"
      ></wxlogin>
    </div>
    <p>请使用微信扫描二维码登录</p>
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin'
// import api from '@api/index'
export default {
  name: 'wxLogin',
  components: { wxlogin },
  data() {
    return {
      appid: 'wx9cb4b4cccc022d9e&redirect',
      redirect_uri: `${encodeURI('https://www.95skins.com')}`,
      state: 'STATE#wechat_redirect',
      href: '' // 自定义样式链接
    }
  },
  mounted() {
    this.getWeChatUrl()
  },
  methods: {
    // 获取微信appid和回调地址redirect_uri，指定内嵌的路由地址weChatLogin
    getWeChatUrl() {
      // api.wachatQrUrl().then((res) => {
      //   if (res && res.code === '0000') {
      //     const data = res.data
      //     this.appid = data.appId
      //     this.redirect_uri = data.wxCallbackUrl + 'weChatLogin'
      //   }
      // })
    }
  }
}
</script> -->
