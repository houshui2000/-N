<template>
  <transition name="transition05s">
    <div id="orderForm">
      <div class="title">
        <div class="left">
          <gxsSelect :options="options" :arrayValue="arrayValue" @handleEdit="handleSelectValue"></gxsSelect>
          <div class="CreateDateTime" @click="handleCreateDateTimeShow">
            <!-- <div class="text">
              创建时间检索
              <div class="icon"></div>
            </div> -->
            <el-date-picker
              class="CreateDateTimePicker"
              popper-class="CreateDateTimePickerKuang_CreationTime_retrieval"
              v-model="createTime"
              type="datetimerange"
              start-placeholder="创建时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD"
              date-format="YYYY-MM-DD"
              @change="handleCreateDateTime"
            />
          </div>
          <div class="PayDateTime" @click="handlePayDateTimeShow">
            <!-- <div class="text">
              支付时间检索
              <div class="icon"></div>
            </div> -->
            <el-date-picker
              class="PayDateTimePicker"
              popper-class="CreateDateTimePickerKuang_CreationTime_retrieval"
              v-model="payTimes"
              type="datetimerange"
              start-placeholder="支付时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD"
              date-format="YYYY-MM-DD"
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
          <!-- <div v-if="arrayValue.values === 4" class="text">完成时间</div> -->
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
                        active2: item.payStatus === 4
                      }"
                    ></div>
                    <div class="titleText">
                      <span v-if="item.payStatus === 0">待支付</span>
                      <span v-if="item.payStatus === 1">登记中</span>
                      <span v-if="item.payStatus === -1" style="color: #909399">订单取消</span>
                      <span v-if="item.payStatus === -2" style="color: #1cc46c">已退款</span>
                      <span v-if="item.payStatus === 4" style="color: #1cc46c">订单完成</span>
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
                    <!-- 鼠标滑动去支付 -->
                    <div class="btnBox" v-if="item.payStatus === 0">
                      <div class="close" @click="handlePayClose(item.orderNo)">取消支付</div>
                      <div class="payBtn" @click="goPay(item)">去支付</div>
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
                        <div class="dataValue">{{ item.cancelTime }}</div>
                      </div>
                      <div
                        class="contentTextBox"
                        v-if="item.payStatus === 1 || item.payStatus === 2 || item.payStatus === -2"
                      >
                        <div class="label">支付时间</div>
                        <div class="dataValue">{{ item.payTime }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === 4">
                        <div class="label">完成时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                      <div class="contentTextBox" v-if="item.payStatus === -2">
                        <div class="label">退款时间</div>
                        <div class="dataValue">{{ item.currentStatusTime }}</div>
                      </div>
                      <div class="contentTextBox">
                        <div class="label">支付方式</div>
                        <div class="dataValue">
                          <!-- {{ item.payType === 0 ? "支付宝" : "微信" }} -->
                          {{ payway(item) }}
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
              <div class="payment">{{ payway(item) }}</div>

              <div class="createTime">{{ item.createTime }}</div>
              <!-- <div v-if="item.payStatus === 4" class="createTime">{{ item.currentStatusTime }}</div> -->
              <div class="payTime">{{ item.payTime ? item.payTime : "-" }}</div>
              <div class="payBox">
                <div class="state">
                  <span v-if="item.payStatus === 0">待支付</span>
                  <span v-if="item.payStatus === 1">登记中</span>
                  <span v-if="item.payStatus === -1">订单取消</span>
                  <span v-if="item.payStatus === -2">已退款</span>
                  <span v-if="item.payStatus === 4">订单完成</span>
                  <!-- <span v-if="item.payStatus === 0">去支付</span> -->
                </div>
                <!-- 页面显示去支付 -->

                <div class="btn" v-if="item.payStatus === 0" @click="handlePayShow(item)">去支付</div>
              </div>
            </div>
          </div>
          <div class="bottomMsg" v-if="orderList.length === 0">
            <!-- 暂无明细 -->
            <MissWakeupPage :title="'暂无订单数据'" :titleTwo="'请快去购买'" />
          </div>
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
      <!-- <payVue /> -->
      <payVue
        v-if="Gethelowestprice"
        :payFun="payFun"
        :creatDataAll="Gethelowestprice"
        v-model:dialogVisiblePay="dialogVisiblePay"
      />
    </div>
  </transition>
</template>
<!--  对三取模 1 ：银联  -->
<script setup name="orderFrom">
import { reactive, ref, watch, onMounted } from "vue"
import errDialoVue from "./component/errdialo/index.vue"
import gxsSelect from "../components/gxsSelect.vue"
import { useRoute } from "vue-router"
import payVue from "@/views/shoppingtwo/components/pay/index.vue"
import { GetorderList, shoporderdetai, orderCancel, shopbuyPay } from "@/network/personalCenter.js"
import MessageBoxVue from "@/components/MessageBox/index.js"
import { personalcenterPay } from "@/enumerate"
import UnionPayPopup from "@/views/personalCenter/components/unionPayPopup.vue"
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"
import { useStore } from "@/pinia"
const { loginStore } = useStore()

const route = useRoute()
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

const Gethelowestprice = ref({}) // 支付弹框 获取最低价
const dialogVisiblePay = ref(false) // 支付弹框弹出

let total = ref(0)
let createTime = ref("")
let payTimes = ref("")
let indexDetail = ref(-1)
// let indexDetail = ref(0)

const mounchRef = ref("")

/**
 * 支付方式 展示
 */
const payway = (item) => {
  const res = personalcenterPay.find((personalcenterPayitem) => {
    if (item?.payType == personalcenterPayitem.value) {
      return personalcenterPayitem
    }
  })

  return res?.name || "汇付银联"
}
/**取模 */

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
  MessageBoxVue({
    title: "复制成功"
  })
  // ElMessage({
  //   message: "复制成功",
  //   type: "success"
  // })
}
//下拉框
const options = reactive([
  { values: "", label: "全部状态" },
  { values: 0, label: "待支付" },
  { values: -1, label: "订单取消" },
  { values: 1, label: "登记中" },
  { values: 4, label: "订单完成" },
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
/**初始化接口 */
const handleOrderList = async () => {
  let res = await GetorderList(orderInfo.value)

  let data = res.data.records
  if (res.code === 200) {
    orderList.value = data
    // orderList.value = [{}, {}]
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
  if (!payTimes.value) {
    orderInfo.value.createTimes = null
  } else {
    let str = ""
    for (let i = 0; i < payTimes.value.length; i++) {
      str += timeZhuan(payTimes.value[i]) + ","
    }
    orderInfo.value.payTimes = str.slice(0, -1)
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
const goPay = async (item) => {
  // const res = await shopbuyPay({ orderNo })
  // if (res.code === 200) {
  //   window.location.href = res.data
  //   await handleOrderList()
  //   MessageBoxVue({
  //     title: "支付成功"
  //   })
  // }
  try {
    dialogVisiblePay.value = true
    Gethelowestprice.value = item
  } catch (err) {
    handleOrderList()
  }
}
//待支付弹窗
const handlePayShow = async (item) => {
  try {
    dialogVisiblePay.value = true
    Gethelowestprice.value = item
    // const res = await shopbuyPay({
    //   orderNo: item.orderNo
    // })
    // window.location.href = res.data
  } catch (err) {
    handleOrderList()
  }
}

/**
 * 支付
 * @param {*} payId
 */
const payFun = async (payId) => {
  try {
    const res = await shopbuyPay({
      orderNo: Gethelowestprice.value.orderNo, // 跳转页面的id 1
      payChanelId: payId.payId // 支付通道 1 是支付宝
    })
    window.location.href = res.data
  } catch (err) {
    handleOrderList()
    return false
  }
}

onMounted(() => {
  handleOrderList()
})
watch(
  () => loginStore.login,
  (newVal) => {
    if (newVal) return
    handleOrderList()
  },
  {
    deep: true
  }
)
watch(
  route,
  async () => {
    if (!route.query.orderNo) return
    const res = await shoporderdetai({
      orderNo: route.query.orderNo
    })

    if (res.data?.payStatus > 0) {
      errDialoVueUpdate.value = true
      mounchRef.value = route.query.payAmount
    }
    // http://172.16.0.166/orderForm?orderNo=1723984511501926400&payAmount=1.00
    // http://test.card.cardesport.com/orderForm?orderNo=1725038428381839360&payAmount=28.00
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="scss">
.CreateDateTimePickerKuang_CreationTime_retrieval {
  box-shadow: 0 0 0 0 !important;
  border: 1px solid #4a5173 !important;
}
.CreateDateTimePickerKuang_CreationTime_retrieval {
  .el-input.is-disabled .el-input__wrapper {
    background-color: rgba(5, 13, 23, 1);
    box-shadow: 0 0 0 0 !important;
  }
  .el-date-table td.today .el-date-table-cell__text {
    color: white;
  }
  .in-range.start-date,
  .in-range.end-date {
    .el-date-table-cell__text {
      background: linear-gradient(180deg, #f59eff 0.01%, #637dff 100%) !important;
      color: white;
    }
  }
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
  .el-date-table td.in-range .el-date-table-cell {
    background-color: #0f223a;
  }
  .el-time-panel {
    background-color: #050d17 !important;
    border: 1px solid #4a5173 !important;
  }
  .el-time-panel__footer {
    border-top: 1px solid #4a5173 !important;
  }
}
</style>
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
