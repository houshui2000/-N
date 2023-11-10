<template>
  <transition name='transition05s'>
    <div id='bankCardBindingPopup' v-if='props.bankCardBindingShow'>
      <div class='content'>
        <div class='title'>
          添加银行卡
          <div class='border'></div>
        </div>
        <div class='close' @click='handleBankCardBindingClose'></div>
        <div class='addFormBox'>
          <div class='addFrom'>
           <div class='label'>真实姓名：</div>
            <div class='addFromDom'>
              <input v-model='cardBankInfo.username' placeholder='请输入真实姓名'>
            </div>
          </div>
          <div class='addFrom'>
            <div class='label'>身份证号：</div>
            <div class='addFromDom'>
              <input v-model='cardBankInfo.certNo' placeholder='请输入身份证编号'>
            </div>
          </div>
          <div class='addFrom'>
            <div class='label'>银行：</div>
            <div class='addFromDom'>
              <div class='selectBox'>
                <div class='selectInput'>
                  <input v-model='cardBankInfo.bankName' placeholder='请选择银行' disabled>
                </div>
                <div class='arrowBox' @click='handleSelectList'>
                  <div class='icon' :class='{active:selectShow}'></div>
                </div>
                <div class='listBox' :class='{active:!selectShow}'>
                  <div class='listDom' v-for='(item,index) in selectList' @click='handleSelectValue(item)' :key='"select"+item.id'>{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class='addFrom'>
            <div class='label'>银行卡号：</div>
            <div class='addFromDom'>
              <input v-model='cardBankInfo.bankCardNo' placeholder='请输入银行卡号'>
            </div>
          </div>
          <div class='addFrom'>
            <div class='label'>银行预留手机：</div>
            <div class='addFromDom'>
              <input v-model='cardBankInfo.mobile' placeholder='请输入银行预留手机号'>
            </div>
          </div>
        </div>
        <div class='btnBox'>
          <div class='btnBox-close' @click='handleBankCardBindingClose'>取消</div>
          <div class='btnBox-confirm' @click='handleBankCardBindingConfirm'>确认</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { GET_BankIdList, POST_bankCardBinding } from '@/network/personalCenter.js'

const props = defineProps(['bankCardBindingShow'])
const emit = defineEmits(['handleBankCardBindingCloseEmit','handleBankCardBindingConfirm'])
let selectShow=ref(false) //下拉列表是否显示
let bankCardBindingCodeShow =ref(true)

let cardBankInfo=ref({
  bankCardNo: "6232510000009999",
  certNo: "372301199905244112",
  mobile: "15650053503",
  username: "高钰鑫",
  bankId:"",
  bankName:''
})
let selectList=ref([])
const handleBankCardBindingClose = () => {
  emit('handleBankCardBindingCloseEmit')
}
//请求银行
const handleBankCardBindingConfirm =async()=>{
  console.log("请求银行",cardBankInfo.value)
  let result = await POST_bankCardBinding(cardBankInfo.value)
  if(result.code===200){
    emit('handleBankCardBindingConfirm',result.data)
  }

}
//获取下拉列表的数据
const handleSelectList =async ()=>{
    selectShow.value=!selectShow.value

}
//选择下拉值
const handleSelectValue =(val)=>{
  cardBankInfo.value.bankId=val.id
  cardBankInfo.value.bankName=val.name
  selectShow.value=false
}
onMounted(async ()=>{
  let result = await GET_BankIdList({name:"中国"})
  if(result.code){
    console.log(result.data)
    selectList.value=result.data
  }
})
</script>

<style lang='scss' scoped>
#bankCardBindingPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: white;

  .content {
    width: 554px;
    height: 647px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom, rgba(18, 39, 67, 1), rgba(3, 13, 21, 1)), linear-gradient(155.92deg, rgba(159, 98, 219, 0.5) 0%, rgba(126, 172, 186, 0.5) 48.67%, rgba(99, 149, 231, 0.5) 96.71%);
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
          line-height: 40px;
          text-align: right;
        }
        .addFromDom{
          margin-left: 10px;
          width: 361px;
          height: 40px;
          background:url($gxsBankCardPopupInput) no-repeat center;
          background-size:100% 100%;

          .selectBox{
            width: 361px;
            position: relative;
            .selectInput{
              width: 361px;
              height: 40px;
              line-height: 40px;
            }
            .arrowBox{
              position: absolute;
              top: 50%;
              margin-top: -10px;
              right: 0;
              width: 39px;
              height: 20px;
              border-left: 1px solid #4B6A80;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;

              .icon{
                width: 10px;
                height: 6px;
                background:url($gxsBankCardArrow) no-repeat center;
                background-size:contain;
                transform: rotateZ(0deg);
                transition: transform .3s;

                &.active{
                  transform: rotateZ(180deg);
              }
              }
            }
            .listBox{
              width: 361px;
              height: auto;
              position: absolute;
              left: 0;
              top:40px;
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              overflow: hidden;
              box-shadow: 0px 0px 10px #000;
              transition: height .3s;
              &.active{
                height: 0;
              }
              .listDom{
                width: 361px;
                height: 40px;
                line-height: 40px;
                padding-left: 13px;
                background-color: #122743;
                border-bottom: 1px solid rgba(#fff,.6);
                cursor: pointer;
                &:last-child{
                  border-bottom: 0;
                }
              }
            }
          }
          input{
            width: 100%;
            height: 100%;
            padding-left: 13px;
            color: #fff;
            &::placeholder{
              color: rgba(#fff,.6);
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
        line-height: 34px;
        text-align: center;
        background: url($gxsauthenticationConfirmPopupBack) no-repeat center;
        background-size: 100% 100%;
      }

      .btnBox-confirm {
        width: 100px;
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
