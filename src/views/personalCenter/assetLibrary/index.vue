<template>
  <div id='assetLibrary'>
    <div class='title'>
      <div class='left'>资产数量:<span>0</span></div>
      <div class='right'>
        <div class='frameSort1'>
          <el-select v-model='value' value-key='id' placeholder='Select'>
            <el-option
              v-for='item in options'
              :key='item.id'
              :label='item.label'
              :value='item'
            />
          </el-select>
        </div>
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
        <el-pagination background layout='prev, pager, next' :total='1000' />
      </div>
    </div>
    <assetLibraryDetail v-model:errDialoVueUpdate='errDialoVueUpdate' title='查证' />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import assetLibraryDetail from '../components/assetLibraryDetail.vue'
const  errDialoVueUpdate= ref(false)
const value = ref('卡牌编号正序')
const options = ref([
  { id: 1, label: '卡牌编号正序', desc: 'Option A - 230506' },
  { id: 2, label: '卡牌编号倒序', desc: 'Option B - 230506' }
])
let search = ref('')
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

@import "./index.scss";
</style>
