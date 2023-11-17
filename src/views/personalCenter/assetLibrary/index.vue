<template>
  <transition name="transition05s">
    <div id="assetLibrary">
      <div class="title">
        <div class="left">
          资产数量:
          <span>{{ total }}</span>
        </div>
        <div class="right">
          <gxsSelect :options="options" :arrayValue="arrayValue" @handleEdit="handleSelectValue"></gxsSelect>
          <div class="frameSort2">
            <input v-model="assetInfo.issueName" placeholder="请输入卡牌名称" @keyup.enter="assetLibrary" />
            <div class="searchIcon" @click="assetLibrary"></div>
          </div>
          <!--          <div class='question' @click='handleOpenShow'></div>-->
        </div>
      </div>
      <!--  -->
      <div v-if="assetList.length > 0" class="contentBox">
        <div class="cardBox">
          <div class="card" v-for="(item, index) in assetList" :key="'asset' + index">
            <div class="cardContent" @click="handleThereJSShow(item)">
              <!-- 空投 -->
              <!-- <div class="aiDrop">空投</div> -->
              <!-- 空投 end-->
              <!-- 是否查看 -->
              <div v-if="item.firstView" class="icon">新</div>
              <div class="cardImg">
                <!-- 确权 -->
                <!-- 0 已经确权 1 确权中 -->
                <div v-if="item.isChange == 1" class="quequan">确权中</div>

                <!-- 倒计时 -->
                <div v-if="item.lockExpireTime && item.isChange !== 1" class="dao_time">
                  <div class="back">
                    <p>冷却结束时间</p>
                  </div>
                  <div class="back">
                    <p>{{ item.lockExpireTime }}</p>
                  </div>
                </div>

                <!-- <div v-if="item.hasAudio" class="music">
                  <SvgIcon size="18px" Height="18px" icon-class="voiceShang" />
                </div> -->
                <img :src="item.productUrl" alt="" />
              </div>
              <el-tooltip class="box-item" effect="dark" :content="item.productName" placement="top-start">
                <div class="text danyi">{{ item.productName }}</div>
              </el-tooltip>
              <div class="cardIdBox">
                <div class="cardIdIcon">
                  <SvgIcon size="23px" Height="23px" icon-class="bianhao" />
                </div>
                <el-tooltip class="box-item" effect="dark" :content="item.cardNo" placement="top-start">
                  <div class="cardIdText danyi" :title="item.cardNo">{{ item.cardNo }}</div>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <!--    分页   -->
        <div class="paginationBox">
          <div class="fen_xi">
            <!--     v-if='assetList.length!==0'     -->
            <el-pagination
              background
              v-model:current-page="assetInfo.currentPage"
              v-model:page-size="assetInfo.pageSize"
              layout="prev, pager, next"
              :total="total"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
      <div v-else class="missingWakeupPage">
        <missingWakeupPageVue />
      </div>
      <!-- <assetLibraryDetail v-model:errDialoVueUpdate='errDialoVueUpdate' title='查证' /> -->
      <assetgrameRulePopup
        :show="assetPlay"
        :textHtml="textHtml"
        @close="handleAssetgrameRulePopupClose"
      ></assetgrameRulePopup>
    </div>
  </transition>
</template>

<script setup name="Assetlist">
import SvgIcon from "@/components/SvgIcon/index.vue"
// import {  } from "@/network/personalCenter"
import missingWakeupPageVue from "@/components/missingWakeupPage/index.vue"
import { ref, watch, reactive, onMounted } from "vue"
import { useStore } from "@/pinia/index"
// import assetLibraryDetail from '../components/assetLibraryDetail.vue'
import assetgrameRulePopup from "../components/assetgrameRulePopup.vue"
import gxsSelect from "../components/gxsSelect.vue"
import { getAssetList, assetview } from "@/network/personalCenter.js"
// import { router } from "@/router/index.js"
const { loginStore } = useStore()

// const errDialoVueUpdate = ref(false)
// const value = ref("卡牌编号正序")
const options = ref([
  { values: "desc", label: "时间正序排序" },
  { values: "asc", label: "时间倒序排序" }
])
const assetInfo = ref({
  currentPage: 1,
  pageSize: 32,
  sort: "time",
  direction: "desc",
  issueName: ""
})
const total = ref(0) // 上方资产数量 和 页码的数据
const assetPlay = ref(false)
const textHtml = ref("")
const handleAssetgrameRulePopupClose = () => {
  assetPlay.value = false
}

let assetList = ref([])
// { values: 5, label: '登记中' },
const arrayValue = reactive({
  values: "desc",
  label: "时间倒序排序"
})
const handleSelectValue = (val) => {
  arrayValue.label = val.label
  arrayValue.values = val.values
  assetInfo.value.direction = arrayValue.values
  assetLibrary()
}
/**初始化接口 */
const assetLibrary = async () => {
  let result = await getAssetList(assetInfo.value)

  if (result.code === 200) {
    assetList.value = result.data?.records || []
    // assetList.value = [{}]
    loginStore.firstView = result.data
    total.value = result.data?.total || 0
  }
}
/** 页码变化 */
const handleCurrentChange = (val) => {
  assetList.value.currentPage = val
  assetLibrary()
}
//打开玩法说明弹窗
// const handleOpenShow = () => {
//   assetPlay.value = true
// }
//跳转thereJS
const handleThereJSShow = async (item) => {
  if (item.isChange == 1) return
  await assetview({ cardNo: item.isChange })
  window.open(`/cardDetail3D?id=${item.qrCodeId}&time=${item.time}`)
  // window.open('https://www.baidu.com/' + item)
}
onMounted(() => {
  assetLibrary()
})

watch(
  () => loginStore.login,
  (newVal) => {
    if (newVal) return
    assetLibrary()
  },
  {
    deep: true
  }
)
</script>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  box-shadow: none !important;
  color: white;
  font-size: 12px;
}

/* 去除边框 */
:deep(.el-select .el-input__wrapper) {
  box-shadow: none !important;
  background-color: transparent;
}

/* 去除选中时蓝色边框（下面两个都要加上） */
:deep(.el-input .el-input__wrapper.is-focus) {
  box-shadow: none !important;
}

// .missingWakeupPage {
//   width: 100%;
// }
@import "@/styles/other/paginations.scss";
@import "./index.scss";
</style>
