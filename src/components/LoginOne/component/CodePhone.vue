<template>
  <div class='text' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}</div>
</template>

<script setup>

</script>

<style lang='scss' scoped>

.text {
  width: 100px;
  color: #018ef8;
  position: absolute;
  top: 3px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  text-align: right;
}

</style>
