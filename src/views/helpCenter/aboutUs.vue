<template>
  <div class="lianxi">
    <!-- 关于我们 -->
    <div class="lianx_left">
      <div class="left_one">关于我们</div>
    </div>

    <div class="linaxi_right">
      <div class="center_bottom_dv">
        <div class="ql-editor" v-html="AboutUs"></div>
      </div>
      <!-- 联系我们 -->
      <div class="info_out">
        <div class="contact">
          <div class="qq_box">
            <div v-show="contactUsText?.qqOne" class="qq_item">
              <span>客服QQ:</span>
              <p>{{ contactUsText?.qqOne }}</p>
            </div>
            <div v-show="contactUsText?.qqTwo" class="qq_item">
              <span>客服QQ:</span>
              <p>{{ contactUsText?.qqTwo }}</p>
            </div>
            <div v-show="contactUsText?.qqThree" class="qq_item">
              <span>客服QQ:</span>
              <p>{{ contactUsText?.qqThree }}</p>
            </div>
            <div v-show="contactUsText?.email" class="qq_item">
              <span>客服Email:</span>
              <p>{{ contactUsText?.email }}</p>
            </div>
          </div>
          <div class="qq_box">
            <div v-show="contactUsText?.qqGroupOne" class="qq_item">
              <span>QQ群:</span>
              <p>{{ contactUsText?.qqGroupOne }}</p>
            </div>
            <div v-show="contactUsText?.qqGroupTwo" class="qq_item">
              <span>QQ群:</span>
              <p>{{ contactUsText?.qqGroupTwo }}</p>
            </div>
            <div v-show="contactUsText?.qqGroupThree" class="qq_item">
              <span>QQ群:</span>
              <p>{{ contactUsText?.qqGroupThree }}</p>
            </div>
            <div v-show="contactUsText?.qqGroupFour" class="qq_item">
              <span>QQ群:</span>
              <p>{{ contactUsText?.qqGroupFour }}</p>
            </div>
          </div>
        </div>
        <div class="QR_code" v-show="contactUsText?.qqGroupQrCode">
          <!-- <div class="QR_item">
            <div class="top"><img :src="contactUsText?.qqGroupQrCode" alt="" /></div>
            <p>官方QQ群二维码</p>
          </div> -->
          <div class="QR_item" v-show="contactUsText?.subscriptionQrCode">
            <div class="top"><img :src="contactUsText?.subscriptionQrCode" alt="" /></div>
            <p>官方微信公众号二维码</p>
          </div>
          <div class="QR_item" v-show="contactUsText?.tiktokQrCode">
            <div class="top"><img :src="contactUsText?.tiktokQrCode" alt="" /></div>

            <p>官方抖音二维码</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <<<<<<< HEAD
<script setup>
import { shopcarddetail } from "@/network/api"
const init = async () => {
  const res = await shopcarddetail()
  (res)
}
// init()
======= -->
<script setup lang="ts">
import { ref } from "vue"
import { aboutUs, contactUs } from "../../network/agreement"
const AboutUs = ref("")
const contactUsText = ref()
const goAboutUs = () => {
  aboutUs().then((res) => {
    AboutUs.value = res.data
  })
  contactUs().then((res) => {
    contactUsText.value = JSON.parse(res.data)
  })
}
goAboutUs()
</script>

<style lang="scss" scoped>
// .center_bottom_dv {
//   font-size: 12px;
//   letter-spacing: 2px !important;
// }
.ql-editor {
  height: auto;
}

.lianxi {
  width: 100%;
  height: 100%;
  @include Myflex(space-between, flex-start);
  .lianx_left {
    width: 230px;
    height: 100%;
    //
    .left_one {
      width: 100%;
      height: 50px;
      background: #fff;
      border-radius: 2px;

      @include bordergradientMY(
        linear-gradient(180deg, rgba(134, 87, 184, 0.9) 0%, rgba(99, 149, 231, 0.9) 100%),
        linear-gradient(180deg, #241328 0%, #000c2c 100%)
      );
      font: normal normal 400 14px "PingFang SC";
      color: white;
      @include Myflex();
    }
  }
  .linaxi_right {
    width: 1220px;
    padding: 25px;
    // height: 524px;
    // overflow: hidden;
    // overflow-y: auto;
    color: white;
    border-radius: 8px;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(44, 34, 68, 1) 0%, rgba(33, 44, 67, 0.9) 100%),
      linear-gradient(180deg, #070d13 0%, #070d13 100%)
    );
  }
}
.info_out {
  width: 1158px;
  margin: 76px auto 0;
  color: #fff;
  display: flex;
  .help_tit {
    width: 100px;
    font-size: 20px;
    font-family: "newfont";
    color: #ffc400;
  }

  .QR_code {
    width: 100%;
    display: flex;
    margin: 32px 0 70px;

    .QR_item {
      width: 200px;
      margin-right: 82px;
      border-radius: 8px;

      @include bordergradientMY(
        linear-gradient(180deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
        linear-gradient(180deg, #241328 0%, #000c2c 100%)
      );
      .top {
        width: 151px;
        height: 151px;
        margin: 10px auto;
        @include Myflex();
        flex-direction: column;
        border-radius: 8px;
        @include bordergradientMY(
          linear-gradient(180deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
          linear-gradient(180deg, #241328 0%, #000c2c 100%)
        );
        img {
          width: 151px;
          height: 151px;
          padding: 10px;
        }
      }
      p {
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  .contact {
    width: 100%;
    margin-top: 50px;
    display: flex;

    .qq_box {
      .qq_item {
        display: flex;
        align-items: center;
        margin: 15px 0;
        font-size: 14px;
        width: 280px;
        font-weight: bold;

        p {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
