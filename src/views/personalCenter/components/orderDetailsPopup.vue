<template>
  <div id='orderDetailsPopup'>
    <div class='orderDetailsPopup'>
      <div class='titleIcon'></div>
      <div class='titleText'>待支付</div>
      <div class='imgBox'>
        <img src='https://img.zhisheji.com/bbs/forum/201401/05/153945tbr7pg5torfzptso.jpg'>
      </div>
      <div class='name'>MASTER KILLER</div>
      <div class='number'>
        <div class='numberText'>002-2023-A20-01</div>
      </div>
      <div class='btnBox'>
        <div class='close'>取消支付</div>
        <div class='payBtn'>去支付</div>
      </div>
      <div class='border'></div>
      <div class='contentText'>
        <div class='contentTextBox'>
          <div  class='label'>订单编号</div>
          <div  class='dataValue'>2233225533322222225</div>
        </div>
        <div class='contentTextBox'>
          <div  class='label'>订单编号</div>
          <div  class='dataValue'>2233225533322222225</div>
        </div>
        <div class='contentTextBox'>
          <div  class='label'>订单编号</div>
          <div  class='dataValue'>2233225533322222225</div>
        </div>
        <div class='contentTextBox'>
          <div  class='label'>订单编号</div>
          <div  class='dataValue'>2233225533322222225</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
#orderDetailsPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, .8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PingFang SC";
  font-weight: 400;
  font-size: 14px;
  color: white;

  .orderDetailsPopup {
    width: 270px;
    height: 618px;
    background: url($gxsorderDetailsPopup) no-repeat center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleIcon {
      width: 48px;
      height: 48px;
      background: url($gxsorderDetailsIcon) no-repeat center;
      background-size: contain;
      margin-top: 21px;
    }

    .titleText {
      height: 20px;
      line-height: 20px;
      color: #FAB74C;
      margin-top: 7px;
    }

    .imgBox {
      margin-top: 17px;
      width: 118px;
      height: 150px;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      border: 1px solid transparent;
      border-radius: 3.8px;
      background-image: linear-gradient(to top, #070d13, #070d13), linear-gradient(180deg, #F59EFF 0.01%, #637DFF 100%);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .name {
      margin-top: 18px;
    }

    .number {
      width: 138px;
      height: 28px;
      background: url($gxsorderDetailsNumber) no-repeat center;
      background-size: contain;
      margin-top: 20px;

      .numberText {
        width: 198px;
        font-size: 12px;
        margin-left: 32px;
        line-height: 28px;
      }
    }

    .btnBox {
      width: 219px;
      height: 36px;
      display: flex;
      justify-content: space-between;
      margin-top: 24px;

      .close, .payBtn {
        width: 100px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        background: url($gxsorderDetailsCloseBtn) no-repeat center;
        background-size: contain;
      }

      .payBtn {
        background: url($gxsorderDetailsPayBtn) no-repeat center;
        background-size: contain;
      }
    }

    .border {
      width: 268px;
      height: 2px;
      background: url($gxsorderDetailsborder) no-repeat center;
      background-size: contain;
      margin-top: 28px;
    }
    .contentText{
      width: 220px;
      height: 140px;
      text-align: left;

      .contentTextBox{
        display: flex;
        height: 17px;
        line-height: 17px;
        margin-top: 17px;
        .label{
          width: 61px;
          font-size: 12px;
          color: #B8B8B8;
        }
        .dataValue{
          width: 137px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
