<template>
  <transition name="transition05s">
    <div id="bankCardBindingPopup" v-if="props.bankCardBindingShow">
      <div class="content">
        <div class="title">
          添加卡
          <div class="border"></div>
        </div>
        <div class="close" @click="handleBankCardBindingClose"></div>
        <div class="addFormBox">
          <div class="addFrom">
            <div class="label">真实姓名：</div>
            <div class="addFromDom">
              <input v-model="cardBankInfo.username" placeholder="请输入真实姓名" />
            </div>
          </div>
          <div class="addFrom">
            <div class="label">身份证号：</div>
            <div class="addFromDom">
              <input v-model="cardBankInfo.certNo" placeholder="请输入身份证编号" />
            </div>
          </div>

          <div class="addFrom">
            <div class="label">银行：</div>
            <div class="addFromDom">
              <div class="selectBox">
                <div class="selectInput">
                  <input v-model="cardBankInfo.bankName" placeholder="请选择银行" @input="handleBankNameClick" />
                </div>
                <div class="arrowBox" @click="handleSelectList">
                  <div class="icon" :class="{ active: !selectShow }">
                    <el-icon><ArrowUpBold /></el-icon>
                  </div>
                  <!-- <div class="icon" :class="{ active: selectShow }"></div> -->
                </div>
                <div
                  class="listBox"
                  :class="{ active: !selectShow || !(selectOptionList.length === 0) || cardBankInfo.bankName !== '' }"
                >
                  <div
                    class="listDom"
                    v-for="item in selectList"
                    @click="handleSelectValue(item)"
                    :key="'select' + item.id"
                  >
                    {{ item.name }}
                  </div>
                </div>
                <div class="listBox" :class="{ active: !(selectOptionList.length !== 0) }">
                  <div
                    class="listDom"
                    v-for="(item, index) in selectOptionList"
                    @click="handleSelectValue(item)"
                    :key="'selectOptionList' + index"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="addFrom">
            <div class="label">卡号：</div>
            <div class="addFromDom">
              <input v-model="cardBankInfo.bankCardNo" placeholder="请输入卡号" />
            </div>
          </div>
          <div class="addFrom">
            <div class="label">预留手机：</div>
            <div class="addFromDom">
              <input v-model="cardBankInfo.mobile" placeholder="请输入预留手机号" />
            </div>
          </div>
        </div>
        <div class="btnBox">
          <div class="btnBox-close" @click="handleBankCardBindingClose">取消</div>
          <div class="btnBox-confirm" @click="handleBankCardBindingConfirm">确认</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { GET_BankIdList, POST_bankCardBinding } from "@/network/personalCenter.js"
import MessageBoxVue from "@/components/MessageBox/index.js"
import { ArrowUpBold } from "@element-plus/icons-vue"

const props = defineProps(["bankCardBindingShow"])
const emit = defineEmits(["handleBankCardBindingCloseEmit", "handleBankCardBindingConfirm"])
let selectShow = ref(false) //下拉列表是否显示
// let bankCardBindingCodeShow = ref(true)

let cardBankInfo = ref({
  bankCardNo: "",
  certNo: "",
  mobile: "",
  username: "",
  bankId: "",
  bankName: ""
})
let selectList = ref([])
let selectOptionList = ref([])

/**
 * 取消
 */
const handleBankCardBindingClose = () => {
  emit("handleBankCardBindingCloseEmit")
  stuckInTheAir(cardBankInfo.value)
}
//请求
/**
 * 确认
 */
const handleBankCardBindingConfirm = async () => {
  let name = /^(?:[\u4e00-\u9fa5·]{2,16})$/
  if (!name.test(cardBankInfo.value.username)) {
    MessageBoxVue({
      title: "您输入的姓名不正确"
    })
    return
  }
  let certNo = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}([0-9]|X)$/
  if (!certNo.test(cardBankInfo.value.certNo)) {
    MessageBoxVue({
      title: "您输入的身份证号不正确"
    })
    return
  }
  let bankCardNo = /^[1-9]\d{9,29}$/
  if (!bankCardNo.test(cardBankInfo.value.bankCardNo)) {
    MessageBoxVue({
      title: "您输入的银行卡不正确"
    })
    return
  }
  let mobile =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
  if (!mobile.test(cardBankInfo.value.mobile)) {
    MessageBoxVue({
      title: "您输入的手机号不正确"
    })
    return
  }
  let result = await POST_bankCardBinding(cardBankInfo.value)
  if (result.code === 200) {
    MessageBoxVue({
      title: "修改成功"
    })
    //
    emit("handleBankCardBindingConfirm", result.data)
    setTimeout(() => {
      stuckInTheAir(cardBankInfo.value)
    }, 200)
  }
}
/**滞空数据 */
const stuckInTheAir = (data) => {
  Object.keys(data).forEach((item) => {
    data[item] = ""
  })
}
//获取下拉列表的数据
const handleSelectList = async () => {
  selectShow.value = !selectShow.value
}
//卡模糊查询
const handleBankNameClick = () => {
  if (cardBankInfo.value.bankName === "") {
    selectOptionList.value = []
    return
  }
  let count = 0
  selectOptionList.value.length = 0
  let list = []
  selectList.value.forEach((res) => {
    if (res.name.indexOf(cardBankInfo.value.bankName) !== -1) {
      list.push(res)
      count++
    }
  })
  if (count !== 0) {
    selectOptionList.value = list
  }
}
//选择下拉值
const handleSelectValue = (val) => {
  cardBankInfo.value.bankId = val.id
  cardBankInfo.value.bankName = val.name
  selectOptionList.value = []
  selectShow.value = false
}
onMounted(async () => {
  let result = await GET_BankIdList({ name: null })
  if (result.code) {
    selectList.value = result.data
    // selectList.value = [...result.data, ...result.data, ...result.data]
  }
})
</script>

<style lang="scss" scoped>
#bankCardBindingPopup {
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
    height: 547px;
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
    // overflow: hidden;
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

    .addFormBox {
      width: 511px;
      margin-top: 12px;

      .addFrom {
        width: 511px;
        height: 40px;
        display: flex;
        font-weight: 500;
        margin-top: 25px;

        .label {
          width: 107px;
          height: 40px;
          font: normal normal 400 14px "PingFang SC";
          line-height: 40px;
          text-align: right;
        }
        .addFromDom {
          margin-left: 10px;
          width: 361px;
          height: 40px;
          background: url($gxsBankCardPopupInput) no-repeat center;
          background-size: 100% 100%;

          .selectBox {
            width: 361px;
            position: relative;
            .selectInput {
              width: 361px;
              height: 40px;
              line-height: 40px;
            }
            .arrowBox {
              position: absolute;
              top: 50%;
              margin-top: -10px;
              right: 0;
              width: 39px;
              height: 20px;
              border-left: 1px solid #4b6a80;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;

              .icon {
                width: 10px;
                height: 6px;
                // background: url($gxsBankCardArrow) no-repeat center;
                background-size: contain;
                transform: rotateZ(0deg);
                transition: transform 0.3s;
                @include Myflex();

                &.active {
                  transform: rotateZ(180deg);
                }
              }
            }
            .listBox {
              width: 361px;
              height: auto;
              max-height: 300px;

              position: absolute;
              left: 0;
              top: 38px;
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              overflow-x: hidden;
              overflow-y: hidden;
              &:hover {
                overflow-y: auto;
              }
              // box-shadow: 0px 0px 10px #000;
              // background-color: saddlebrown;
              @include bordergradientMY(
                linear-gradient(180deg, rgba(99, 70, 147, 0.8) 0%, rgba(59, 91, 140, 0.8) 100%),
                linear-gradient(180deg, rgba(10, 23, 40, 1) 0%, rgba(10, 23, 40, 1) 100%)
              );
              transition: height 0.3s;
              &.active {
                height: 0;
                border: 0;
              }
              .listDom {
                width: 361px;
                height: 40px;
                line-height: 40px;
                color: rgba(255, 255, 255, 0.8);
                padding-left: 13px;
                // background-color: #122743;
                border-bottom: 1px solid #414971;
                cursor: pointer;
                &:hover {
                  color: white;
                }
                &:last-child {
                  border-bottom: 0;
                }
              }
            }
          }
          input {
            width: 100%;
            height: 100%;
            padding-left: 13px;
            color: #fff;
            &::placeholder {
              color: rgba(#ececec, 0.6);
            }
          }
        }
      }
    }

    .btnBox {
      width: 224px;
      height: 34px;
      display: flex;
      justify-content: space-between;
      margin-top: 47px;
      font-size: 14px;

      .btnBox-close {
        width: 100px;
        height: 34px;
        // line-height: 34px;
        // text-align: center;
        cursor: pointer;
        @include Myflex();
        // background: url($gxsauthenticationConfirmPopupBack) no-repeat center;
        border-radius: 4px;
        @include bordergradientMY(
          linear-gradient(90deg, rgba(41, 59, 230, 1) 0%, rgba(201, 2, 182, 1) 100%),
          linear-gradient(180deg, #070d13 -1.45%, #070d13 100%)
        );
        // background-size: 100% 100%;
      }

      .btnBox-confirm {
        width: 100px;
        cursor: pointer;
        height: 34px;
        line-height: 34px;
        text-align: center;
        border-radius: 4px;
        background-image: linear-gradient(to right, rgba(45, 66, 255, 1), rgba(223, 0, 201, 1));
      }
    }
  }
}
</style>
