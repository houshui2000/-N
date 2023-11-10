<template>
  <div id="unionPayPopup" v-if='false'>
    <div class="content">
      <div class="title">
        选择支付方式
        <div class="border"></div>
      </div>
      <div class="close" @click="handleClose"></div>
      <div class="contain">
        <div class="cardImg">
          <img src="" alt="" />
        </div>
        <div class="rightBox">
          <div>我是一个小妖精</div>
          <div class="cardIdBox">
            <div class="cardIdIcon"></div>
            <div class="cardIdText">53464536436456465336</div>
          </div>
          <div class="price">价格：￥999</div>
        </div>
      </div>
      <div class="payList">
        <div class="">
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// handleClose
</script>

<style lang="scss" scoped>
#unionPayPopup {
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
  font-weight: 400;
  font-size: 14px;
  color: white;

  .content {
    width: 400px;
    height: 480px;
    background: url($gxsUnionPayPopupBg) no-repeat center;
    background-size: 100% 100%;
    //overflow: hidden;
    //border-radius: 6px;
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 18px;
      margin-top: 32px;

      .border {
        width: 50px;
        height: 2px;
        background: url($gxspupupborderBottom) no-repeat center;
        background-size: contain;
        position: absolute;
        margin-left: -25px;
        left: 50%;
        margin-top: 10px;
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

    .contain {
      width: 310px;
      margin-top: 44px;
      display: flex;

      .cardImg {
        width: 100px;
        height: 141px;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        border: 1px solid transparent;
        border-radius: 6px;
        background-image: linear-gradient(to top, #070d13, #070d13), linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
        overflow: hidden;
        box-shadow: 2px 2px 5px 0px #4a52ff;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .rightBox {
        margin-left: 30px;

        .cardIdBox {
          height: 28px;
          position: relative;
          margin-top: 18px;

          .cardIdIcon {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 28px;
            height: 28px;
            background: url($gxsorderDetailsNumber) no-repeat center;
            background-size: contain;
          }

          .cardIdText {
            height: 18px;
            line-height: 18px;
            padding-left: 28px;
            padding-right: 7px;
            min-width: 100px;
            margin-left: 5px;
            color: #fff;
            background-image: linear-gradient(to left, #ffbb4d, #815821);
            position: absolute;
            top: 50%;
            margin-top: -9px;
            border-radius: 2px;
          }
        }

        .price {
          margin-top: 18px;
          padding: 0 9px;
          height: 24px;
          line-height: 24px;
          background-color: rgba(#c58d39, 0.39);
          color: #ffce00;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
