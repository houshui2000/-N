<template>
  <div class="CIjing">
    <aside></aside>
    <router-view />
    <LoginOne />
    <MenyOnTheRightVue v-if="!route.meta?.rightDao" />
  </div>
</template>
<script setup>
import LoginOne from "@/components/LoginOne/index.vue"
import { nextTick, watch } from "vue"
import MenyOnTheRightVue from "@/components/menuOnTheRight/index.vue"
import { _isMobile } from "@/utils/forbid"
import { useRoute } from "vue-router"
const route = useRoute()
const GetRequest = (value) => {
  let url = decodeURI(window.location.search) //?id="123456"&name="www";
  let object = {}
  if (url.indexOf("?") != -1) {
    //url中存在问号，也就说有参数。
    let str = url.substr(1) //得到?后面的字符串
    let strs = str.split("&") //将得到的参数分隔成数组[id="123456",name="www"];
    for (let i = 0; i < strs.length; i++) {
      object[strs[i].split("=")[0]] = strs[i].split("=")[1] //得到{id:'123456',name:'www'}
    }
  }

  return object[value]
}
/**
 * 检测是否是手机  如果是手机 登录的是pc地址  跳转到手机路由 http://172.16.0.166/undefined
 */
setTimeout(() => {
  if (_isMobile()) {
    // 是手机
    setTimeout(() => {
      // 快手浏览器 暂时不用管
      // route.query.channel == "Kwai" ? sessionStorage.setItem("channel", route.query.channel) : ""
    }, 500)
  } else {
    // 浏览器 跳pc
    nextTick(() => {
      let href = window.location.href
      const res = href.includes("/invitation")
      if (res) {
        window.location.replace(import.meta.env.VITE_APP_MOBLIC_URL + "/invitation")
        return
      }
      let code = GetRequest("code")
      if (GetRequest("code")) {
        sessionStorage.setItem("code", code)
        window.location.replace(import.meta.env.VITE_APP_MOBLIC_URL + "?code=" + code)
      } else {
        // (import.meta.env.VITE_APP_MOBLIC_URL, "sdsad")
        window.location.replace(import.meta.env.VITE_APP_MOBLIC_URL)
      }
    })
  }
}, 100)
watch(
  route,
  () => {
    let TherreW = window.location.href.includes("://cardesport")

    if (TherreW) {
      window.location.replace("https://www.cardesport.com")
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped lang="scss">
body {
  width: 1920px;
}
.CIjing {
  width: 1920px;
  background: url("@/assets/images/all/bei.png") no-repeat scroll left top/ 100% 100%;
  // background-color: saddlebrown;

  // background-color: saddlebrown;
  position: relative;
  background-size: 100% 100%;
  aside {
    position: absolute;
    right: 0;
    top: 120px;
    z-index: 0;
    width: 233px;
    height: 625px;
    background: url("@/assets/images/all/aside.png") no-repeat scroll left top/ 100% 100%;
    // background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
<style lang="scss">
.ql-snow {
  .ql-editor {
    ul {
      list-style-type: disc;
      list-style-position: inside;
    }

    ol {
      list-style-type: decimal;
      list-style-position: inside;
    }

    max-height: 500px;
    overflow: auto;

    //滚动条里的小方块

    .box::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: gray;
    }

    //滚动条整体样式
    .box::-webkit-scrollbar {
      width: 5px;
      height: 5px; //高宽分别对应横竖滚动条的尺寸
    }
    //滚动条中心部分
    .box::-webkit-scrollbar-track {
      background-color: pink;
    }
  }
}
/* 禁止复制代码 */
pre {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 禁止选择文字 */
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  overflow-x: hidden;
  width: 100vw;
}
body::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

// 滚轮样式
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: rgba($color: #817d7d, $alpha: 0.6) !important;
}

// 滚轮背景
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
