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
            format='YYYY-MM-DD HH:mm:ss'
            date-format='YYYY-MM-DD'
            time-format='hh:mm:ss'
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
            format='YYYY-MM-DD HH:mm:ss'
            date-format='YYYY-MM-DD'
            time-format='hh:mm:ss'
            @change='handlePayTime'
          />
        </div>
      </div>
      <div class='right'>
        <div class='frameSort2'>
          <input v-model='orderInfo.key' placeholder='请输入名称' @keyup.enter='handleOrderList' />
          <div class='searchIcon' @click.stop='handleOrderList'></div>
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
        <div class='orderListBox' v-for='(item,index) in orderList'>
          <div class='head'>
            订单号: {{ item.orderNo }}
            <div class='copyIcon' @click='handleCopyIcon(item.orderNo)'></div>
          </div>
          <div class='content'>
            <div class='cardImgBox' @mouseenter='handleMouseover(index)' @mouseleave='handleMouseout(index)'>
              <div class='cardImg'>
                <img src='@/assets/images/myAccount/linshiImage.png' alt=''>
              </div>
              <div class='orderDetailsBox' v-if='index===indexDetail' @mouseenter='handleMouseover(index)'>
                <div class='orderDetailsPopup' @mouseleave='handleMouseout(index)'>
                  <div class='titleIcon' :class="{active0:item.payStatus===0,active1:item.payStatus===1,activef1:item.payStatus===-1,activef2:item.payStatus===-2,active2:item.payStatus===2}"></div>
                  <div class='titleText'>
                    <span v-if='item.payStatus===0'>待支付</span>
                    <span v-if='item.payStatus===1'>已支付</span>
                    <span v-if='item.payStatus===-1' style='color: #909399'>已取消</span>
                    <span v-if='item.payStatus===-2' style='color: #1CC46C'>已退款</span>
                    <span v-if='item.payStatus===2' style='color: #1CC46C'>交易成功</span>
                  </div>
                  <div class='imgBox'>
                    <img src='https://img.zhisheji.com/bbs/forum/201401/05/153945tbr7pg5torfzptso.jpg'>
                  </div>
                  <div class='name'>MASTER KILLER</div>
                  <div class='number'>
                    <div class='numberText'>002-2023-A20-01</div>
                  </div>
                  <div class='btnBox' v-if='item.payStatus===0'>
                    <div class='close' >取消支付</div>
                    <div class='payBtn'>去支付</div>
                  </div>
                  <div class='border'></div>
                  <div class='contentText'>
                    <div class='contentTextBox'>
                      <div class='label'>订单编号</div>
                      <div class='dataValue'>2233225533322222225</div>
                    </div>
                    <div class='contentTextBox'>
                      <div class='label'>订单编号</div>
                      <div class='dataValue'>2233225533322222225</div>
                    </div>
                    <div class='contentTextBox'>
                      <div class='label'>订单编号</div>
                      <div class='dataValue'>2233225533322222225</div>
                    </div>
                    <div class='contentTextBox'>
                      <div class='label'>订单编号</div>
                      <div class='dataValue'>2233225533322222225</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class='nameBox'>
              <div class='name'>{{ item.productName }}</div>
              <div class='number'>
                <div class='icon'></div>
                <div class='text'>{{ item.orderNo }}</div>
              </div>
            </div>
            <div class='money'>￥{{ item.payAmount }}</div>
            <div class='payment'>{{ item.payType===0?'支付宝': '微信'}}</div>
            <div class='createTime'>{{ item.createTime }}</div>
            <div class='payTime'>{{item.payTime?item.payTime:'-'}}</div>
            <div class='payBox'>
              <div class='state'>
                <span v-if='item.payStatus===0'>待支付</span>
                <span v-if='item.payStatus===1'>已支付</span>
                <span v-if='item.payStatus===-1'>已取消</span>
                <span v-if='item.payStatus===-2'>退款</span>
                <span v-if='item.payStatus===2'>交易成功</span>
              </div>
              <div class='btn'  v-if='item.payStatus===0'>去支付</div>
            </div>
          </div>
        </div>
        <div  class='bottomMsg' v-if='orderList.length===0'>暂无明细</div>
      </div>
    </div>
    <div class="fen_xi">
      <el-pagination background v-model:current-page="orderInfo.current"
                     v-model:page-size="orderInfo.size" layout="prev, pager, next" :total="total" v-if='orderList.length!==0'  @size-change="handleSizeChange" />
    </div>
     <!--    <orderDetailsPopup/>-->
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import gxsSelect from '../components/gxsSelect.vue'
import orderDetailsPopup from '../components/orderDetailsPopup.vue'
import { GetorderList } from '@/network/personalCenter.js'
let orderList = ref([])
let actives = ref('active')
let orderInfo = ref({
  payTimes: null,
  createTimes: null,
  current: 1,
  size: 10,
  key: null,
  payStatus: null
})
let total =ref(10)
let createTime = ref('')
let payTime = ref('')
let indexDetail = ref(-1)
const handleMouseover = (indexV) => {
  indexDetail.value = indexV
}
const handleMouseout = () => {
  indexDetail.value = -1
}
const handleCreateDateTimeShow = () => {
  document.querySelector('.CreateDateTimePicker').querySelector('input').focus()

}
const handlePayDateTimeShow = () => {
  document.querySelector('.PayDateTimePicker').querySelector('input').focus()

}
const handleCopyIcon = (item) => {
  const textField = document.createElement('textarea')
  textField.innerText = item
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}
//下拉框
const options = reactive([
  { values: null, label: '全部状态' },
  { values: 0, label: '待支付' },
  { values: -1, label: '已取消' },
  { values: 1, label: '已支付' },
  { values: 2, label: '交易成功' }
])
// { values: 5, label: '登记中' },
const arrayValue = reactive({
  values: 1,
  label: '全部状态'
})

const handleSelectValue = (val) => {
  console.log('val', val)
  arrayValue.label = val.label
  arrayValue.values = val.values
  orderInfo.payStatus = val.values
  handleOrderList()
}
const handleOrderList = async () => {
  let res = await GetorderList(orderInfo)
  console.log(res)
  let data=res.data.records
  if (res.code === 200) {
    orderList.value=res.data.records
    console.log(orderList)

  }

}
const timeZhuan = (time) => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 月份从0开始，所以需要加1，并补0
  const day = date.getDate().toString().padStart(2, '0') // 补0
  const hours = date.getHours().toString().padStart(2, '0') // 补0
  const minutes = date.getMinutes().toString().padStart(2, '0') // 补0
  const seconds = date.getSeconds().toString().padStart(2, '0') // 补0
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
//选择时间
const handleCreateDateTime = () => {
  if (!createTime.value) {
    orderInfo.createTimes=null
  }else{
    let str = ''
    for (let i = 0; i < createTime.value.length; i++) {
      str += timeZhuan(createTime.value[i]) + ','
    }
    orderInfo.createTimes = str.slice(0, -1)
  }
  handleOrderList()
}
const handlePayTime = () => {
  if (!payTime.value) {
    payTime.createTimes=null
  }else{
    let str = ''
    for (let i = 0; i < payTime.value.length; i++) {
      str += timeZhuan(payTime.value[i]) + ','
    }
    orderInfo.payTime = str.slice(0, -1)
  }
  handleOrderList()
}
const handleSizeChange = (val) => {
  orderInfo.current.value=val
  handleOrderList()
}

onMounted(() => {
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
@import '@/styles/other/paginations.scss';
@import "index.scss";
</style>
