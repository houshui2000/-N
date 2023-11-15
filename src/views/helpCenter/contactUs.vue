<template>
  <div class="lianxi">
    <!-- 联系我们 -->
    <div class="lianx_left">
      <div class="left_one">联系我们</div>
      <!-- <div style="opacity: 0.5" class="left_one">关于sad我们</div> -->
    </div>
    <div class="linaxi_right">
      <div class="info_out" v-show="Help_nav == '5'">
        <div class="help_tit">联系我们</div>
        <div class="QR_code">
          <div class="QR_item">
            <!-- <div class="QR_item_pic"><img :src="service.qqGroupQrCode" alt="" /></div> -->

            <p>官方QQ群二维码</p>
          </div>
          <div class="QR_item">
            <!-- <div class="QR_item_pic"><img :src="service.subscriptionQrCode" alt="" /></div> -->
            <p>官方微信公众号二维码</p>
          </div>
          <div class="QR_item">
            <!-- <div class="QR_item_pic"><img :src="service.tiktokQrCode" alt="" /></div> -->

            <p>官方抖音二维码</p>
          </div>
        </div>
        <div class="contact">
          <div class="qq_box">
            <div v-show="service.qqOne" class="qq_item">
              <span>客服QQ:</span>
              <!-- <p>{{ service.qqOne }}</p> -->
            </div>
            <div v-show="service.qqTwo" class="qq_item">
              <span>客服QQ:</span>
              <!-- <p>{{ service.qqTwo }}</p> -->
            </div>
            <div v-show="service.qqThree" class="qq_item">
              <span>客服QQ:</span>
              <!-- <p>{{ service.qqThree }}</p> -->
            </div>
            <div v-show="service.email" class="qq_item">
              <span>客服Email:</span>
              <!-- <p>{{ service.email }}</p> -->
            </div>
          </div>
          <div class="qq_box">
            <div v-show="service.qqGroupOne" class="qq_item">
              <span>QQ群:</span>
              <!-- <p>{{ service.qqGroupOne }}</p> -->
            </div>
            <div v-show="service.qqGroupTwo" class="qq_item">
              <span>QQ群:</span>
              <!-- <p>{{ service.qqGroupTwo }}</p> -->
            </div>
            <div v-show="service.qqGroupThree" class="qq_item">
              <span>QQ群:</span>
              <!-- <p>{{ service.qqGroupThree }}</p> -->
            </div>
            <div v-show="service.qqGroupFour" class="qq_item">
              <span>QQ群:</span>
              <!-- <p>{{ service.qqGroupFour }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { contactUs } from "../../network/agreement"
const contactUsText = ref("")
const goAboutUs = () => {
  contactUs().then((res) => {
    res
    contactUsText.value = res.data
  })
}
goAboutUs()
</script>
<style lang="scss" scoped>
.lianxi {
  width: 100%;
  color: white;
  height: 100%;
  @include Myflex(space-between, flex-start);
  .lianx_left {
    width: 230px;
    height: 100%;
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
    height: 524px;
    padding: 25px;
    border-radius: 8px;
    overflow: hidden;
    overflow-y: auto;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(44, 34, 68, 1) 0%, rgba(33, 44, 67, 0.9) 100%),
      linear-gradient(180deg, #241328 0%, #000c2c 100%)
    );
    .info_out {
      width: 1158px;
      margin: 76px auto 0;
      color: #fff;

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

          .QR_item_pic {
            width: 200px;
            height: 200px;
            background: url(../../assets/images/Help/about/frame.png) no-repeat center;
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 170px;
              height: 166px;
            }
          }

          p {
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            margin-top: 10px;
          }
        }
      }

      .contact {
        width: 100%;
        margin-bottom: 40px;
        display: flex;

        .qq_box {
          .qq_item {
            display: flex;
            align-items: center;
            margin: 5px 0;
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
  }
}
</style>
