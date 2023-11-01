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
          />
        </div>
        <div class='PayDateTime' @click='handlePayDateTimeShow'>
          <div class='text'>支付时间检索</div>
          <el-date-picker
            class='PayDateTimePicker'
            popper-class='CreateDateTimePickerKuang'
            v-model='createTime'
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
      <div class='borderFrame'></div>
      <div class='orderList'>
        <div class='orderListBox' v-for='item in orderList'>
          <div class='head'>
            订单号: 2023102722001197771411396182
            <div class='copyIcon' @click='handleCopyIcon("2023102722001197771411396182")'></div>
          </div>
          <div class='content'>
            <div class='cardImg'>
              <img src='@/assets/images/myAccount/linshiImage.png' alt=''>
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

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import gxsSelect from '../components/gxsSelect.vue'
let orderList = reactive([{}, {}, {}])

let search = ref('')
let createTime = ref('')
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
  { values: 1, label: '全部状态' },
  { values: 2, label: '待支付' },
  { values: 3, label: '已取消' },
  { values: 4, label: '已支付' },
  { values: 5, label: '登记中' },
  { values: 6, label: '交易成功' },
])
const arrayValue=reactive({
  values: 1,
  label: '全部状态'
})

const handleSelectValue =(val)=>{
  console.log("val",val)
  arrayValue.label=val.label
  arrayValue.values=val.values
}

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
