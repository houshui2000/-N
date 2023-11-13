<template>
  <transition name="transition05s">
    <div id="bankCardPopup" v-if="props.bankCardShow">
      <div class="content">
        <div class="title">
          银行卡列表
          <div class="border"></div>
        </div>
        <div class="close" @click="handleClose"></div>
        <div class="contain">
          <div class="header">
            <div class="name">银行名称</div>
            <div class="number">卡号</div>
            <!-- <div class="btn">操作</div> -->
          </div>
          <div class="cardList">
            <div class="cardList-y" v-for="(item, index) in bankCardList" :key="index">
              <div class="name">{{ item.bankName }}</div>
              <div class="number">
                {{ item.bankCardNo ? item.bankCardNo.replace(/(?<=\d{4})\d+(?=\d{4})/, " ******** ") : "" }}
              </div>
              <!-- @click='handleBankCardUnBindingShow' -->
              <!--   <div class="btn">
                <!~~ 解绑 ~~>
              </div>-->
            </div>
          </div>
        </div>
        <div class="bindingBtn" @click="handleBankCardShow">绑定新卡</div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { GET_BankCardList } from "@/network/personalCenter.js"
import { ref, onMounted, watch } from "vue"

let bankCardList = ref([])
// let bankCardUnBindingShow = ref(true)
const props = defineProps(["bankCardShow"])
const emit = defineEmits(["handleCloseEmit", "handleUnBindingEmit", "handleBankCardEmit"])
const handleClose = () => {
  emit("handleCloseEmit", false)
}
const handleGetBankCardList = async () => {
  let result = await GET_BankCardList()
  if (result.code === 200) {
    bankCardList.value = result.data
  }
}

//打开解绑确认弹窗
// const handleBankCardUnBindingShow = () => {
//   bankCardUnBindingShow.value = true
//   emit("handleUnBindingEmit")
// }
const handleBankCardShow = () => {
  emit("handleBankCardEmit")
}
onMounted(() => {
  handleGetBankCardList()
})
watch(
  () => props.bankCardShow,
  () => {
    if (!props.bankCardShow) return
    handleGetBankCardList()
  },
  {
    deep: true
  }
)
</script>

<style lang="scss" scoped>
#bankCardPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: white;

  .content {
    width: 554px;
    height: 454px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom, rgba(18, 39, 67, 1), rgba(3, 13, 21, 1)),
      linear-gradient(
        155.92deg,
        rgba(159, 98, 219, 0.5) 0%,
        rgba(126, 172, 186, 0.5) 48.67%,
        rgba(99, 149, 231, 0.5) 96.71%
      );
    overflow: hidden;
    border-radius: 6px;
    backdrop-filter: blur(10px);
    position: relative;
    //opacity: .8;
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
      width: 442px;
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        margin-top: 35px;
        color: rgba(#fff, 0.6);
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(126, 131, 179, 1);

        .name {
          margin-left: 7px;
          width: 100px;
        }

        .number {
          margin-left: 35px;
          width: 157px;
        }

        .btn {
          width: 30px;
          margin-left: 100px;
        }
      }

      .cardList {
        margin-top: 15px;

        .cardList-y {
          display: flex;
          margin-top: 15px;
          padding-bottom: 14px;

          .name {
            margin-left: 7px;
            width: 100px;
          }

          .number {
            margin-left: 35px;
            width: 157px;
          }

          .btn {
            width: 54px;
            margin-left: 90px;
            height: 25px;
            border-radius: 2px;
            // background: #572525;
            text-align: center;
            line-height: 25px;
            cursor: pointer;
          }
        }
      }
    }

    .bindingBtn {
      position: absolute;
      bottom: 40px;
      width: 160px;
      height: 36px;
      border-radius: 4px;
      background-image: linear-gradient(to right, rgba(45, 66, 255, 1), rgba(223, 0, 201, 1));
      font-size: 16px;
      text-align: center;
      line-height: 36px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .msgBox {
    width: 398px;
    height: 239px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom, rgba(18, 39, 67, 1), rgba(3, 13, 21, 1)),
      linear-gradient(
        155.92deg,
        rgba(159, 98, 219, 0.5) 0%,
        rgba(126, 172, 186, 0.5) 48.67%,
        rgba(99, 149, 231, 0.5) 96.71%
      );
    overflow: hidden;
    border-radius: 6px;
    backdrop-filter: blur(10px);
    position: relative;
    //opacity: .8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
