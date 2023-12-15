<template>
  <transition name="transition05s">
    <div id="assetgrameRulePopup" v-if="show">
      <div class="content">
        <div class="text">
          玩法介绍
          <div class="border"></div>
        </div>
        <div class="close" @click="handleClose"></div>
        <div class="contentText">
          <div v-html="textHtml"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineEmits } from "vue"
import { useStore } from "@/pinia/index.js"
import { codeloginmobile } from "@/network/user.js"
import { passwordEditCode, realNamePost, updatePassword } from "@/network/personalCenter.js"
import { removeItem } from "@/utils/storage.js"

const { useUsersStore, loginStore } = useStore()
const emit = defineEmits(["close"])
const handleRealName = async () => {
  useUsersStore.authenticationConFirmPopup = false
  useUsersStore.authenticationPopup = false
  useUsersStore.realNameZFBPopup = true
}
const handleClose = () => {
  emit("close")
}

const props = defineProps(["show", "textHtml"])
</script>

<style lang="scss" scoped>
#assetgrameRulePopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  z-index: 10005;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 600px;
    height: 400px;
    background: url($gxsAssetLibraryPlayerPopup) no-repeat center;
    background-size: contain;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(2px);

    .text {
      width: 600px;
      height: 26px;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      margin-top: 31px;
      position: relative;

      .border {
        width: 50px;
        height: 2px;
        background: url($gxspupupborderBottom) no-repeat center;
        background-size: contain;
        position: absolute;
        margin-left: -25px;
        left: 50%;
        margin-top: 3px;
      }
    }

    .close {
      width: 20px;
      height: 20px;
      background: url($gxspupupClose) no-repeat center;
      background-size: contain;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    .titleText {
      width: 398px;
      height: 82px;
      line-height: 82px;
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      font-weight: 400;
      color: #fff;
    }

    .bottom {
      width: 222px;
      height: 34px;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      line-height: 34px;

      .back {
        width: 100px;
        height: 34px;
        text-align: center;
        background: url($gxsauthenticationConfirmPopupBack) no-repeat center;
        background-size: contain;
        cursor: pointer;
      }

      .Btn {
        width: 99px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background: url($gxsauthenticationConfirmPopupBtn) no-repeat center;
        background-size: contain;
        cursor: pointer;
      }
    }

    .contentText {
      width: 415px;
      margin-top: 45px;
    }
  }
}
</style>
