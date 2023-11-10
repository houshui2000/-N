<template>
  <transition name="transition05s">
    <div id="orderForm">
      <div class="title">
        <div class="left">
          <gxsSelect :options="options" :arrayValue="arrayValue" @handleEdit="handleSelectValue"></gxsSelect>
          <div class="CreateDateTime" @click="handleCreateDateTimeShow">
            <div class="text">
              创建时间检索
              <div class="icon"></div>
            </div>
            <el-date-picker
              class="CreateDateTimePicker"
              popper-class="CreateDateTimePickerKuang_CreationTime_retrieval"
              v-model="createTime"
              type="datetimerange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD HH:mm:ss"
              date-format="YYYY-MM-DD"
              time-format="hh:mm:ss"
              @change="handleCreateDateTime"
            />
          </div>
          <div class="PayDateTime" @click="handlePayDateTimeShow">
            <div class="text">
              支付时间检索
              <div class="icon"></div>
            </div>
            <el-date-picker
              class="PayDateTimePicker"
              popper-class="CreateDateTimePickerKuang_CreationTime_retrieval"
              v-model="payTime"
              type="datetimerange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD HH:mm:ss"
              date-format="YYYY-MM-DD"
              time-format="hh:mm:ss"
              @change="handlePayTime"
            />
          </div>
        </div>
        <div class="right">
          <div class="frameSort2">
            <input v-model="orderInfo.key" placeholder="请输入名称" @keyup.enter="handleOrderList" />
            <div class="searchIcon" @click.stop="handleOrderList"></div>
          </div>
        </div>
      </div>
      <div class="orderDetails">
        <div class="orderTitleBg">
          <div class="text">资产</div>
          <div class="text">交易金额</div>
          <div class="text">支付方式</div>
          <div class="text">创建时间</div>
          <div class="text">支付时间</div>
          <div class="text">状态</div>
        </div>
        <div class="borderFrame"></div>
        <div class="orderList">
          <div class="orderListBox" v-for="(item, index) in orderList" :key="item.orderNo">
            <div class="head">
              订单号: {{ item.orderNo }}
              <div class="copyIcon" @click="handleCopyIcon(item.orderNo)"></div>
            </div>
            <div class="content">
              <div class="cardImgBox" @mouseenter="handleMouseover(index)" @mouseleave="handleMouseout(index)">
                <div class="cardImg">
                  <img v-if="item.productUrl" :src="`${item.productUrl}`" />
                </div>
                <div class="orderDetailsBox" v-if="index === indexDetail" @mouseenter="handleMouseover(index)">
                  <div
                    class="orderDetailsPopup"
                    :class="{ dzb: item.payStatus === 0 }"
                    @mouseleave="handleMouseout(index)"
                  >
                    <div
                      class="titleIcon"
                      :class="{
                        active0: item.payStatus === 0,
                        active1: item.payStatus === 1,
                        activef1: item.payStatus === -1,
                        activef2: item.payStatus === -2,
                        active2: item.payStatus === 2
                      }"
                    ></div>
                    <div class="titleText">
                      <span v-if="item.payStatus === 0">待支付</span>
                      <span v-if="item.payStatus === 1">登记中</span>
                      <span v-if="item.payStatus === -1" style="color: #909399">已取消</span>
                      <span v-if="item.payStatus === -2" style="color: #1cc46c">已退款</span>
                      <span v-if="item.payStatus === 2" style="color: #1cc46c">交易成功</span>
                    </div>
                    <div class="imgBox">
                      <!--       ${loginStore.cossUrl} -->
                      <img v-if="item.productUrl" :src="`${item.productUrl}`" />
                    </div>
                    <div class="name">{{ item.productName }}</div>
                    <div class="numberBox">
                      <div class="numberBox-text">
                        <div class="numberBox-icon"></div>
                        {{ item.cardNo }}
                      </div>
                    </div>
                    <div class="btnBox" v-if="item.payStatus === 0">
                      <div class="close" @click="handlePayClose(item.orderNo)">取消支付</div>
                      <div class="payBtn" @click="goPay(item.orderNo)">去支查付</div>
                    </div>
                    <div class="border"></div>
                    <div class="contentText">
                      <div class="contentTextBox">
                        <div class="label">订单编号</div>
                        <div class="dataValue">{{ item.orderNo }}</div>
                      </div>
                      <div class="contentTextBox">
                        <div class="label">创建时间</div>
                        <div class="dataValue">{{ item.createTime }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === -1">
                        <div class="label">取消时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                      <div
                        class="contentTextBox"
                        v-if="item.payTime === 1 || item.payTime === 2 || item.payTime === -2"
                      >
                        <div class="label">支付时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === -2">
                        <div class="label">退款时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                      <div class="contentTextBox">
                        <div class="label">支付方式</div>
                        <div class="dataValue">
                          {{ item.payType === 0 ? "支付宝" : "微信" }}
                          <span v-if="item.payStatus === -2">(已退款)</span>
                        </div>
                      </div>
                      <div class="contentTextBox">
                        <div class="label">交易金额</div>
                        <div class="dataValue">￥{{ item.payAmount }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === -2">
                        <div class="label">退款金额</div>
                        <div class="dataValue">￥{{ item.payAmount }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === 2">
                        <div class="label">登记时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="nameBox">
                <div class="name">{{ item.productName }}</div>
                <div class="number">
                  <div class="icon"></div>
                  <div class="text">{{ item.cardNo }}</div>
                </div>
              </div>
              <div class="money">￥{{ item.payAmount }}</div>
              <div class="payment">{{ item.payType === 0 ? "支付宝" : "微信" }}</div>
              <div class="createTime">{{ item.createTime }}</div>
              <div class="payTime">{{ item.payTime ? item.payTime : "-" }}</div>
              <div class="payBox">
                <div class="state">
                  <span v-if="item.payStatus === 0">待支付</span>
                  <span v-if="item.payStatus === 1">登记中</span>
                  <span v-if="item.payStatus === -1">已取消</span>
                  <span v-if="item.payStatus === -2">退款</span>
                  <span v-if="item.payStatus === 2">交易成功</span>
                </div>
                <div class="btn" v-if="item.payStatus === 0" @click="handlePayShow(item)">去支付</div>
              </div>
            </div>
          </div>
          <div class="bottomMsg" v-if="orderList.length === 0">暂无明细</div>
        </div>
      </div>
      <div class="fen_xi">
        <el-pagination
          background
          v-model:current-page="orderInfo.current"
          v-model:page-size="orderInfo.size"
          layout="prev, pager, next"
          :total="total"
          v-if="orderList.length !== 0"
          @current-change="handleCurrentChange"
        />
      </div>
      <union-pay-popup></union-pay-popup>
      <errDialoVue :mounchRef="mounchRef" v-model:errDialoVueUpdate="errDialoVueUpdate" />
    </div>
  </transition>
</template>

<script setup>
import { reactive, ref, watch, onMounted } from "vue"
import errDialoVue from "./component/errdialo/index.vue"
import { ElMessage } from "element-plus"
import gxsSelect from "../components/gxsSelect.vue"
import { useRoute } from "vue-router"
// import orderDetailsPopup from "../components/orderDetailsPopup.vue"
import { GetorderList, orderCancel, shopbuyPay } from "@/network/personalCenter.js"
import MessageBoxVue from "@/components/MessageBox/index.js"
// import { useStore } from "@/pinia/index.js"
import UnionPayPopup from "@/views/personalCenter/components/unionPayPopup.vue"
const route = useRoute()
// const { loginStore, useUsersStore } = useStore()
const errDialoVueUpdate = ref(false) //支付成功弹框

let orderList = ref([])
let orderInfo = ref({
  payTimes: null,
  createTimes: null,
  current: 1,
  size: 10,
  key: null,
  payStatus: null
})

let total = ref(0)
let createTime = ref("")
let payTime = ref("")
let indexDetail = ref(-1)
const mounchRef = ref("")
const handleMouseover = (indexV) => {
  indexDetail.value = indexV
}
const handleMouseout = () => {
  indexDetail.value = -1
}
const handleCreateDateTimeShow = () => {
  document.querySelector(".CreateDateTimePicker").querySelector("input").focus()
}
const handlePayDateTimeShow = () => {
  document.querySelector(".PayDateTimePicker").querySelector("input").focus()
}
const handleCopyIcon = (item) => {
  const textField = document.createElement("textarea")
  textField.innerText = item
  document.body.appendChild(textField)
  textField.select()
  document.execCommand("copy")
  textField.remove()
  ElMessage({
    message: "复制成功",
    type: "success"
  })
}
//下拉框
const options = reactive([
  { values: null, label: "全部状态" },
  { values: 0, label: "待支付" },
  { values: -1, label: "已取消" },
  { values: 1, label: "登记中" },
  { values: 2, label: "交易成功" },
  { values: -2, label: "已退款" }
])
// { values: 5, label: '登记中' },
const arrayValue = reactive({
  values: null,
  label: "全部状态"
})

const handleSelectValue = (val) => {
  arrayValue.label = val.label
  arrayValue.values = val.values
  orderInfo.value.payStatus = val.values
  handleOrderList()
}
const handleOrderList = async () => {
  let res = await GetorderList(orderInfo.value)
  console.log(res.data.records)

  let data = res.data.records
  if (res.code === 200) {
    orderList.value = data
    total.value = res.data.total
  }
}
const timeZhuan = (time) => {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, "0") // 月份从0开始，所以需要加1，并补0
  const day = date.getDate().toString().padStart(2, "0") // 补0
  const hours = date.getHours().toString().padStart(2, "0") // 补0
  const minutes = date.getMinutes().toString().padStart(2, "0") // 补0
  const seconds = date.getSeconds().toString().padStart(2, "0") // 补0
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
//选择时间
const handleCreateDateTime = () => {
  if (!createTime.value) {
    orderInfo.value.createTimes = null
  } else {
    let str = ""
    for (let i = 0; i < createTime.value.length; i++) {
      str += timeZhuan(createTime.value[i]) + ","
    }
    orderInfo.value.createTimes = str.slice(0, -1)
  }
  handleOrderList()
}
const handlePayTime = () => {
  if (!payTime.value) {
    payTime.value.createTimes = null
  } else {
    let str = ""
    for (let i = 0; i < payTime.value.length; i++) {
      str += timeZhuan(payTime.value[i]) + ","
    }
    orderInfo.value.payTime = str.slice(0, -1)
  }
  handleOrderList()
}
const handleCurrentChange = (val) => {
  orderInfo.value.current = val
  handleOrderList()
}
//取消支付
const handlePayClose = async (orderNo) => {
  const res = await orderCancel({ orderNo })
  if (res.code === 200) {
    await handleOrderList()
    MessageBoxVue({
      title: "取消成功"
    })
  }
}

//去支付
const goPay = async (orderNo) => {
  const res = await orderCancel({ orderNo })
  if (res.code === 200) {
    await handleOrderList()
    MessageBoxVue({
      title: "取消成功"
    })
  }
}
//待支付弹窗
const handlePayShow = async (item) => {
  const res = await shopbuyPay({
    orderNo: item.orderNo
  })
  console.log(res.data)
  window.location.href = res.data
}

onMounted(() => {
  handleOrderList()
})
watch(
  route,
  (newVal) => {
    if (!newVal.query.payAmount) return
    errDialoVueUpdate.value = true
    mounchRef.value = newVal.query.payAmount
    // http://test.card.cardesport.com/orderForm?payAmount=1.00
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<!-- <style lang="scss">
.CreateDateTimePickerKuang_CreationTime_retrieval {
  box-shadow: 0 0 0 0 !important;
  border: 1px solid #4a5173 !important;
  background-color: saddlebrown;
}
.CreateDateTimePickerKuang_CreationTime_retrieval {
  .el-picker-panel {
    background-color: rgba(5, 13, 23, 1);
  }
  .el-picker-panel__footer {
    background-color: rgba(5, 13, 23, 1);
  }
  .el-date-range-picker__time-header {
    border-bottom: 1px solid #4a5173 !important;
  }
  .el-input__wrapper {
    background-color: transparent;
    box-shadow: 0 0 0 0;
    border: 1px solid #4a5173;
  }
  .el-button.is-plain {
    background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
    color: white;
    border: 0;
  }
  .el-date-table th {
    border-bottom: 1px solid #4a5173 !important;
  }
  .el-date-range-picker__content.is-left {
    border-right: 1px solid #4a5173 !important;
  }
  .el-picker-panel__footer {
    border-top: 1px solid #4a5173 !important;
  }
  .el-popper__arrow {
    &::before {
      border: 0 !important;
      background-color: #4a5173 !important;
    }
  }
}
</style> -->
<style lang="scss" scoped>
// :deep(.el-date-range-picker) {
//   background: #018ef8;
// }

// ::v-deep .el-picker-panel__body {
//   background-color: #000;
// }

@import "@/styles/other/paginations.scss";
@import "index.scss";
</style>
