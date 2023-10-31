<template>
  <div id='personal'>
    <div class='personalBg'>
      <div class='content'>
        <div class='title'>账号管理</div>
        <div class='inputBox ' :class='{active:!adminInput.nickName}'>
          <div class='label'>用户昵称</div>
          <div>
            <input class='inputSumnickName' v-model='admin.nickName' :disabled='adminInput.nickName' placeholder='请输入昵称'>
          </div>
          <div class='inputBtn'>
            <div class='inputBtn2' @click='handleEditInput("nickName")' :class='{active:!adminInput.nickName}'>
              {{ adminInput.nickName?'修改':'保存' }}</div>
          </div>
        </div>
        <div class='inputBox'>
          <div class='label'>绑定手机号</div>
          <div>
            <input class='inputSum' v-model='mobileValue' disabled @blur='handleEditInput("nickName")'>
          </div>
        </div>
        <div class='inputBox'>
          <div class='label'>登录密码</div>
          <div>
            <input class='inputSum' v-model='admin.password' disabled>
          </div>
          <div class='inputBtn'>
            <div class='inputBtn2' @click='handleEditInput("password")'>
             修改</div>
          </div>
        </div>
        <div class='inputBox '>
          <div class='label'>实名认证</div>
          <div>
            <input class='inputSumnickName' v-model='admin.authentication' disabled>
          </div>
          <div class='inputBtn'>
            <div class='inputBtn2' @click='handleEditInput("authentication")'>
            去实名</div>
          </div>
        </div>
      </div>
    </div>
    <div class='personalBg'>
      <div class='content'>
        <div class='title'>邀请码</div>
        <div class='inputBox ' :class='{active:!adminInput.invitationCode}'>
          <div class='label'>邀请码</div>
          <div style='display: flex'>
            <input class='inputSuminvitationCode' v-model='admin.invitationCode' disabled>
            <div class='copyIcon' @click='handleCopyIcon'></div>
          </div>
          <div class='inputBtn'>
            <div class='inputBtn2' @click='handleEditInput("invitationCode")' :class='{active:!adminInput.invitationCode}'>
              {{ adminInput.invitationCode?'修改':'保存' }}</div>
          </div>
        </div>
        <div class='prompt'>
          *只可以修改一次
          <span class='text'>去推广</span>
        </div>
        <div class='inputBox ' :class='{active:!adminInput.bindingCode}'>
          <div class='label'>绑定邀请码</div>
          <div>
            <input class='inputSumbindingCode' v-model='admin.bindingCode' :disabled='adminInput.bindingCode' placeholder='请输入邀请码'>
          </div>
          <div class='inputBtn'>
            <div class='inputBtn2' @click='handleEditInput("bindingCode")' :class='{active:!adminInput.bindingCode}'>
              {{ adminInput.bindingCode?'修改':'保存' }}</div>
          </div>
        </div>
        <div class='bindingPrompt'>*只可以绑定一次</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick, computed } from 'vue'
import { ElMessage } from 'element-plus'


let admin = reactive({
  nickName: '今天也要睡觉',
  mobile: '15650053503',
  password:'******',
  authentication:'未实名',
  invitationCode:'CARD95666',
  bindingCode:'',
})
let adminInput = reactive({
  nickName: true,
  invitationCode:true,
  bindingCode:true
})
const mobileValue=computed(()=>{
  return admin.mobile.substring(0, 3)+"****"+admin.mobile.substring(7)
})
// 修改接口
const handleEditInput = (item) => {
  for (let adminInputKey in adminInput) {
    if (adminInputKey === item) {
      // 未选中状态
      if(adminInput[item]){
        adminInput[item] = false
        let dom = document.querySelector('.inputSum' + adminInputKey)
        console.log(dom)
        nextTick(()=>{
          dom.focus()
        })
      //   选中状态
      }else {
        ElMessage({
          message: '修改成功',
          type: 'success',
        })
        adminInput[item] = true
      }
    }
  }
}

const handleCopyIcon = ()=>{
  const textField = document.createElement('textarea');
  textField.innerText = admin.invitationCode;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  ElMessage({
    message: '复制成功',
    type: 'success',
  })
}
</script>

<style lang='scss' scoped>
@import "index.scss";
</style>
