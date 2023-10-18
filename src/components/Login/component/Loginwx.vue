<template>
  <div id='loginWx'>
    <div class='wxBox'>
      <wxlogin
        v-if='appid && redirect_uri'
        :appid='appid'
        scope='snsapi_login'
        :redirect_uri='redirect_uri'
        :href='href'
        :state='state'
      ></wxlogin>
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import wxlogin from 'vue-wxlogin'
import { useStore } from '@/pinia'

const { loginStore } = useStore()
// const router = useRouter()

let appid = 'wx9cb4b4cccc022d9e&redirect'
let redirect_uri = `${encodeURI('https://www.95skins.com')}`
let state = 'STATE#wechat_redirect'
let href = 'data:text/css;base64,QGNoYXJzZXQgIlVURi04IjsKLmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIyNnB4O2hlaWdodDogMjEzcHg7Ym9yZGVyOjBweDttYXJnaW4tdG9wOiAzMHB4O30KLmltcG93ZXJCb3ggLnRpdGxlIHt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAyMnB4Owpmb250LWZhbWlseTogTWljcm9zb2Z0IFlhSGVpOwpjb2xvcjogIzVGNUY1RjsKZm9udC13ZWlnaHQ6IDQwMDt9Ci5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjI2cHg7bWFyZ2luOiAwIGF1dG87fQouaW1wb3dlckJveCAuc3RhdHVzIHsgcGFkZGluZzogN3B4IDE0cHg7dGV4dC1hbGlnbjogbGVmdDt9IAouaW1wb3dlckJveCAuc3RhdHVzIHB7ZGlzcGxheTpub25lO30KLmltcG93ZXJCb3h7bWFyZ2luLXRvcDogNTBweDt9' // 自定义样式链接

</script>
<style lang='scss' scoped>
#loginWx {
  .wxBox {
    width: 300px;
    height: 300px;
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
