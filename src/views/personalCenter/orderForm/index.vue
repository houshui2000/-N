<template>
  <div id='orderForm'>
    <div class='title'>
      <div class='left'>
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
        <div class='CreateDateTime' @click='handleCreateDateTimeShow'>
          <div class='text'>创建时间检索</div>
          <el-date-picker
            class='CreateDateTimePicker'
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('全部状态')
const options = ref([
  { id: 1, label: '全部状态' }
])
let search = ref('')
let createTime = ref('')
const handleCreateDateTimeShow= ()=>{
  document.querySelector('.CreateDateTimePicker').querySelector('input').focus()

}
</script>

<style lang='scss' scoped>
@import "index.scss";
</style>
