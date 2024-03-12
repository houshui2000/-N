<template>
  <view class="content">
    <image @tap="stores.increment()" class="logo" src="/static/logo.png" />
    <view class="text-area">
      {{ stores.count }}
      <!-- <text class="title">{{ res }}</text>
      <uni-badge text="1"></uni-badge>
      <uni-badge text="2" type="success"></uni-badge>
      <uni-badge text="3" type="primary" :inverted="true"></uni-badge> -->
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/index'
const { stores } = useStore()

const res = ref(323)


const cliksTOP = () => {
  console.log(34);
  // res.value = res.value + 1

}



const as = () => {

}
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
