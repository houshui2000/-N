<template>
  <div id='orderForm'>
    <div class='title'>
      <div class='left'>
        <gxsSelect :options='options' :arrayValue='arrayValue' @handleEdit='handleSelectValue'></gxsSelect>
        <div class='CreateDateTime' @click='handleCreateDateTimeShow'>
          <div class='text'>创建时间检索</div>
          <el-date-picker
            class='CreateDateTimePicker'
            popper-class='CreateDateTimePickerKuang'
            v-model='createTime'
            type='datetimerange'
            start-placeholder='开始时间'
            end-placeholder='结束时间'
            format='YYYY-MM-DD HH:mm'
            date-format='YYYY/MM/DD ddd'
            time-format='A hh:mm:ss'
            @change='handleCreateDateTime'
          />
        </div>
        <div class='PayDateTime' @click='handlePayDateTimeShow'>
          <div class='text'>支付时间检索</div>
          <el-date-picker
            class='PayDateTimePicker'
            popper-class='CreateDateTimePickerKuang'
            v-model='payTime'
            type='datetimerange'
            start-placeholder='开始时间'
            end-placeholder='结束时间'
            format='YYYY-MM-DD HH:mm'
            date-format='YYYY/MM/DD ddd'
            time-format='A hh:mm:ss'
          />
        </div>
      </div>
      <div class='right'>
        <div class='frameSort2'>
          <input v-model='search' placeholder='请输入名称' />
          <div class='searchIcon'></div>
        </div>
      </div>
    </div>
    <div class='orderDetails'>
      <div class='orderTitleBg'>
        <div class='text'>资产</div>
        <div class='text'>交易金额</div>
        <div class='text'>支付方式</div>
        <div class='text'>创建时间</div>
        <div class='text'>支付时间</div>
        <div class='text'>状态</div>
      </div>
      <div class='borderFrame'> </div>
      <div class='orderList'>
        <div class='orderListBox' v-for='(item,index) in orderList'>
          <div class='head'>
            订单号: 2023102722001197771411396182
            <div class='copyIcon' @click='handleCopyIcon("2023102722001197771411396182")'></div>
          </div>
          <div class='content'>
            <div class='cardImgBox' @mouseenter='handleMouseover(index)' @mouseleave='handleMouseout(index)'>
              <div class='cardImg'>
                <img src='@/assets/images/myAccount/linshiImage.png' alt=''>
              </div>
              <div class='orderDetailsBox' v-if='index===indexDetail' @mouseenter='handleMouseover(index)'>
                <div class='orderDetailsPopup'  @mouseleave='handleMouseout(index)'>
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
                 </div>

            <div class='nameBox'>
              <div class='name'>MASTER KILLER</div>
              <div class='number'>
                <div class='icon'></div>
                <div class='text'>1254-523481254-52</div>
              </div>
            </div>
            <div class='money'>￥9999999.99</div>
            <div class='payment'>支付宝</div>
            <div class='createTime'>2023/10/28 00:00:00</div>
            <div class='payTime'>2023/10/28 00:00:00</div>
            <div class='payBox'>
              <div class='state'>待支付</div>
              <div class='btn'>去支付</div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <orderDetailsPopup/>-->
  </div>
</template>

<script setup>
import { reactive, ref,onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import gxsSelect from '../components/gxsSelect.vue'
import orderDetailsPopup from '../components/orderDetailsPopup.vue'
import { GetorderList } from '@/network/personalCenter.js'
let orderList = reactive([{},{},{},{},{},{}])
let orderInfo=reactive({
  payTimes:null,
  createTimes:null,
  current:1,
  size:10,
  key:null,
  payStatus:null,
})
let search = ref('')
let createTime = ref('')
let payTime = ref('')
let indexDetail=ref(-1)
const handleMouseover =(indexV)=>{
  indexDetail.value=indexV
}
const handleMouseout=()=>{
  indexDetail.value=-1
}
const handleCreateDateTimeShow = () => {
  document.querySelector('.CreateDateTimePicker').querySelector('input').focus()

}
const handlePayDateTimeShow = () => {
  document.querySelector('.PayDateTimePicker').querySelector('input').focus()

}
const handleCopyIcon = (item)=>{
  const textField = document.createElement('textarea');
  textField.innerText =item;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  ElMessage({
    message: '复制成功',
    type: 'success',
  })
}
//下拉框
const options = reactive([
  { values: null, label: '全部状态' },
  { values: 0, label: '待支付' },
  { values: -1, label: '已取消' },
  { values: 1, label: '已支付' },
  { values:2, label: '交易成功' },
])
// { values: 5, label: '登记中' },
const arrayValue=reactive({
  values: 1,
  label: '全部状态'
})

const handleSelectValue =(val)=>{
  console.log("val",val)
  arrayValue.label=val.label
  arrayValue.values=val.values
  orderInfo.payStatus=val.values
}
const handleOrderList =async ()=>{
  let res =await GetorderList(orderInfo)
  console.log(res)
  if(res.code===200){

  }

}
//选择时间
const handleCreateDateTime =(time)=>{
  console.log("time",time)
}
onMounted(()=>{
  handleOrderList()
})

</script>

<style lang='scss' scoped>
:deep(.el-date-range-picker) {
  background: #018ef8;
}

::v-deep .el-picker-panel__body {
  background-color: #000;
}

@import "index.scss";
</style>
