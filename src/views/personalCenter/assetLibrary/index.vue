<template>
  <transition name="transition05s">
    <div id='assetLibrary'>
      <div class='title'>
        <div class='left'>资产数量:<span>{{ total }}</span></div>
        <div class='right'>
          <gxsSelect :options='options' :arrayValue='arrayValue' @handleEdit='handleSelectValue'></gxsSelect>
          <div class='frameSort2'>
            <input v-model='assetInfo.issueName' placeholder='请输入卡牌名称'  @keyup.enter='assetLibrary' />
            <div class='searchIcon' @click='assetLibrary'></div>
          </div>
<!--          <div class='question' @click='handleOpenShow'></div>-->
        </div>
      </div>
      <div class='contentBox'>
        <div class='cardBox'>
          <div class='card' v-for='(item,index) in assetList' :key='"asset"+index'>
            <div class='cardContent' @click='handleThereJSShow(item)'>
              <div class='cardImg'>
                <img :src='item.productUrl' alt=''>
              </div>
              <div class='text'>{{ item.productName }}</div>
              <div class='cardIdBox'>
                <div class='cardIdIcon'></div>
                <div class='cardIdText' :title='item.cardNo'>{{ item.cardNo }}4</div>
              </div>
            </div>
          </div>
        </div>
        <!--    分页   -->
        <div class='paginationBox'>
          <div class='fen_xi'>
            <!--     v-if='assetList.length!==0'     -->
            <el-pagination background v-model:current-page='assetInfo.currentPage'
                           v-model:page-size='assetInfo.pageSize' layout='prev, pager, next' :total='total'
                           @current-change='handleCurrentChange' />
          </div>
        </div>
      </div>
      <!-- <assetLibraryDetail v-model:errDialoVueUpdate='errDialoVueUpdate' title='查证' /> -->
      <assetgrameRulePopup :show='assetPlay' :textHtml='textHtml' @close='handleAssetgrameRulePopupClose' ></assetgrameRulePopup>
    </div>
  </transition>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
// import assetLibraryDetail from '../components/assetLibraryDetail.vue'
import assetgrameRulePopup from '../components/assetgrameRulePopup.vue'
import gxsSelect from '../components/gxsSelect.vue'
import { getAssetList } from '@/network/personalCenter.js'
import { router } from '@/router/index.js'

// const errDialoVueUpdate = ref(false)
const value = ref('卡牌编号正序')
const options = ref([
  { values: 'desc', label: '时间倒序排序' },
  { values: 'asc', label: '时间正序排序' }
])
const assetInfo = ref({
  currentPage: 1,
  pageSize: 32,
  sort: 'time',
  direction: 'desc',
  issueName: ''
})
const total = ref(0)
const  assetPlay=ref(false)
const textHtml=ref('')
const handleAssetgrameRulePopupClose =()=>{
  assetPlay.value=false
}


let assetList = ref([])
// { values: 5, label: '登记中' },
const arrayValue = reactive({
  values: 'desc',
  label: '时间倒序排序'
})
const handleSelectValue = (val) => {
  console.log('val', val)
  arrayValue.label = val.label
  arrayValue.values = val.values
  assetInfo.value.direction = arrayValue.values
  assetLibrary()
}
const assetLibrary = async () => {
  let result = await getAssetList(assetInfo.value)
  if (result.code === 200) {
    assetList.value = result.data.records
    total.value = result.data.total
  }
}
const handleCurrentChange = (val) => {
  assetList.value.currentPage = val
  assetLibrary()
}
//打开玩法说明弹窗
const handleOpenShow =()=>{
  assetPlay.value=true
}
//跳转thereJS
const handleThereJSShow=(item)=>{
  // router.push('cardDetail3D')
// router.push(`/cardDetail3D/${item.qrCodeId}`)
  window.open(`/cardDetail3D/${item.qrCodeId}`)
}
onMounted(() => {
  assetLibrary()
})
</script>

<style lang='scss' scoped>
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

@import '@/styles/other/paginations.scss';
@import "./index.scss";
</style>
