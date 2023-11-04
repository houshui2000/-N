<template>
  <div id='assetLibrary'>
    <div class='title'>
      <div class='left'>资产数量:<span>0</span></div>
      <div class='right'>
        <gxsSelect :options='options' :arrayValue='arrayValue' @handleEdit='handleSelectValue'></gxsSelect>
        <div class='frameSort2'>
          <input v-model='search' placeholder='请输入编号' />
          <div class='searchIcon'></div>
        </div>
        <div class='question'></div>
      </div>
    </div>
    <div class='contentBox'>
      <div class='cardBox'>
        <div class='card' v-for='item in 32'>
          <div class='cardContent'>
            <div class='cardImg'>
              <img src='@/assets/images/myAccount/linshiImage.png' alt=''>
            </div>
            <div class='text'>阿克苏加快速度</div>
            <div class='number'>12354-2454112</div>
          </div>
        </div>
      </div>
      <!--    分页   -->
      <div class='paginationBox'>
        <div class='fen_xi'>
        <el-pagination background layout='prev, pager, next' :total='1000' />
        </div>
      </div>
    </div>
    <assetLibraryDetail v-model:errDialoVueUpdate='errDialoVueUpdate' title='查证' />
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
import assetLibraryDetail from '../components/assetLibraryDetail.vue'
import gxsSelect from '../components/gxsSelect.vue'
const  errDialoVueUpdate= ref(false)
const value = ref('卡牌编号正序')
const options = ref([
  { values: 1, label: '卡牌编号正序'},
  { values: 2, label: '卡牌编号倒序'}
])
let search = ref('')

// { values: 5, label: '登记中' },
const arrayValue = reactive({
  values: 1,
  label: '全部状态'
})
const handleSelectValue = (val) => {
  console.log('val', val)
  arrayValue.label = val.label
  arrayValue.values = val.values
}
</script>

<style lang='scss' scoped>
:deep(.el-input__inner) {
  box-shadow: none !important;
  color: white;
  font-family: "PingFang SC";
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
