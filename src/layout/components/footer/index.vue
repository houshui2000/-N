<template>
  <footer id="footer">
    <div class="footer_borrom">
      <Router-link v-for="(item, index) in helpCenterArrVue" :key="index" :to="`/helpCenter/${item.path}`">
        <div :style="{ borderRight: index == helpCenterArrVue.length - 1 ? 0 : '' }" class="tiaozhuan">
          <!-- :style="{ borderRight: index == helpCenterArrVue.length - 1 ? 0 : '' }" -->
          {{ item.meta.name }}
        </div>
      </Router-link>
      <!-- <Router-link to="/information">
        <div style="border: 0" class="tiaozhuan">资讯信息</div>
      </Router-link> -->
    </div>
    <!-- 客服 -->
    <div class="info_out">
      <div class="contact">
        <div class="qq_box">
          <div class="qun_top">QQ号</div>

          <div v-show="contactUsText?.email || contactUsText?.qqGroupOne" class="qq_item">
            <span>{{ contactUsText?.email == "" ? "" : "客服Email:" }}</span>
            <p>{{ contactUsText?.email }}</p>
          </div>
          <div v-show="contactUsText?.qqOne || contactUsText?.qqGroupTwo" class="qq_item">
            <span>客服QQ:</span>
            <p>{{ contactUsText?.qqOne }}</p>
          </div>
          <div v-show="contactUsText?.qqTwo || contactUsText?.qqGroupThree" class="qq_item">
            <span>{{ contactUsText?.qqTwo == "" ? "" : "客服QQ:" }}</span>
            <p>{{ contactUsText?.qqTwo }}</p>
          </div>
          <div v-show="contactUsText?.qqThree || contactUsText?.qqGroupFour" class="qq_item">
            <span>{{ contactUsText?.qqThree == "" ? "" : "客服QQ:" }}</span>
            <p>{{ contactUsText?.qqThree }}</p>
          </div>
        </div>

        <div class="qq_box">
          <div class="qun_top">QQ群:</div>
          <div v-show="contactUsText?.email || contactUsText?.qqGroupOne" class="qq_item">
            <span>QQ群:</span>
            <p>{{ contactUsText?.qqGroupOne }}</p>
          </div>
          <div v-show="contactUsText?.qqOne || contactUsText?.qqGroupTwo" class="qq_item">
            <span>{{ contactUsText?.qqGroupTwo == "" ? "" : "QQ群:" }}</span>
            <p>{{ contactUsText?.qqGroupTwo }}</p>
          </div>
          <div v-show="contactUsText?.qqTwo || contactUsText?.qqGroupThree" class="qq_item">
            <span>{{ contactUsText?.qqGroupThree == "" ? "" : "QQ群:" }}</span>
            <p>{{ contactUsText?.qqGroupThree }}</p>
          </div>
          <div v-show="contactUsText?.qqThree || contactUsText?.qqGroupFour" class="qq_item">
            <span>{{ contactUsText?.qqGroupFour == "" ? "" : "QQ群:" }}</span>
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
    <!-- 客服end -->
    <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
      <div class="beian">备案号: 鲁ICP备2023033925号-1</div>
    </a>
    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37160202000900" rel="noreferrer" target="_blank" class="anbei">
      <div class="anbei-img"></div>
      <div>鲁公网安备37160202000900</div>
    </a>
  </footer>
</template>
<script setup>
import { ref } from "vue"

import { helpCenterArr } from "@/router/modules/case"
import { computed } from "vue"
import { contactUs } from "@/network/agreement"
const contactUsText = ref()
const goAboutUs = () => {
  contactUs().then((res) => {
    const rs = JSON.parse(res.data)
    contactUsText.value = rs
  })
}
goAboutUs()
const helpCenterArrVue = computed(() => [...helpCenterArr])
</script>
<style lang="scss" scoped>
footer {
  padding: 20px 0;
  // padding-top: 20px;
  width: 1920px;
  // height: 230px;
  background: #070d13;
  @include Myflex(flex-start, center);
  flex-direction: column;

  .footer_borrom {
    @include Myflex();
    .tiaozhuan {
      @include Myflex();
      width: 100px;
      height: 17px;
      // background-color: aqua;
      // margin-right: 20px;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      font: normal normal 400 12px "PingFang SC";
      // color: white;
      color: rgba(202, 202, 245, 0.9);
      &:hover {
        color: white;
      }
    }
  }
  .beian {
    font: normal normal 400 12px "PingFang SC";
    color: rgba(202, 202, 245, 0.5);
  }
  .anbei{
    font: normal normal 400 12px "PingFang SC";
    color: rgba(202, 202, 245, 0.5);
    margin-top: 10px;
    display: flex;
    align-items: center;
    .anbei-img{
      width: 14px;
      height: 18px;
      margin-right: 10px;
      background: url(../../../assets/images/navTop/beian.png)no-repeat center;
      background-size: contain;
    }
  }
}
// 客服
.info_out {
  border-bottom: 1px solid rgba(47, 50, 60, 0.8);
  border-top: 1px solid rgba(47, 50, 60, 0.8);
  width: 1470px;
  margin: 20px auto 20px auto;
  padding: 27px 231px;
  color: #fff;
  @include Myflex(center);

  .QR_code {
    display: flex;
    .QR_item {
      width: 168px;
      padding: 8px;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      border-radius: 8px;
      // height: 191px;

      @include bordergradientMY(
        linear-gradient(180deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
        linear-gradient(180deg, #241328 0%, #000c2c 100%)
      );
      .top {
        width: 151px;
        height: 151px;
        // margin: 10px auto;
        margin-bottom: 10px;
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
        // font-size: 12px;
        // font-weight: 400;
        // font-weight: bold;
        // margin-bottom: 10px;
        font: normal normal 400 12px "PingFang SC";
      }
    }
  }

  .contact {
    // height: 100%;

    height: 191px;
    display: flex;
    justify-content: center;
    align-items: center;
    .qq_box {
      margin-right: 83px;
      display: inline-block;

      .qun_top {
        color: white;
        height: 20px;
        font: normal normal 400 12px "PingFang SC";
      }
      .qq_item {
        height: 18px;
        color: #9193ae;
        font: normal normal 300 12px "PingFang SC";
        display: flex;
        align-items: center;
        margin: 15px 0;

        height: 20px;
        min-width: 135px;

        p {
          margin-left: 10px;
        }
      }
    }
  }
}

// 客服end
</style>
