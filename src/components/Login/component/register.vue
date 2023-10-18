<template>
  <div id='registerBox'>
    <div class='inputBox'>
      <div class='inputs'>
        <el-input v-model='phone' placeholder='请输入手机号' type='number' />
      </div>
      <div class='inputs'>
        <el-input v-model='phone' placeholder='请输入验证码' type='number' />
        <div class='text' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}</div>
      </div>
      <div class='inputs'>
        <el-input v-model='phone' placeholder='请输入不超过16位密码' type='number' />
      </div>
      <div class='inputs' v-if='loginStore.registerState==="register"'>
        <el-input v-model='phone' placeholder='请输入昵称（选填）' type='number' />
      </div>
      <div class='inputs' v-if='loginStore.registerState==="register"'>
        <el-input v-model='phone' placeholder='请输入推荐码（选填）' type='number' />
      </div>
      <div class='agreementBox' v-if='loginStore.registerState==="register"'>
        <el-checkbox v-model='agreement'></el-checkbox>
        <div class='text'>我已满18周岁，并同意《<span>用户协议</span>》《<span>隐私协议</span>》</div>
      </div>
      <div class='registerBtn' v-if='loginStore.registerState==="register"'>注册</div>
      <div class='registerBtn' v-if='loginStore.registerState==="retrievePassword"'>确认</div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/pinia'
const { loginStore } = useStore()
let agreement = ref(false)
</script>

<style lang='scss' scoped>
#registerBox {
  .inputBox {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs {
      width:300px;
      margin-top: 20px;
    }

    .agreementBox {
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: 20px;

      .text {
        margin-left: 5px;

        span {
          color: #018ef8;
        }
      }
    }
    .registerBtn{
      width: 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #018ef8;
      border-radius: 10px;
      font-size: 20px;
      color: white;
      font-weight: bold;
      margin-top: 40px;
    }
  }
}
</style>
