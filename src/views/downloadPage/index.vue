<template>
  <div id='downloadPage' @mousemove='handleLLYSP'>
    <div class='rw'></div>
    <div class='bg'></div>
    <div class='qrCode'>

    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
// import QRCode from 'qrcodejs2-fix'

let coordinate = ref({
  x: 0,
  y: 60
})
let height=ref(8)
let width=ref(19.2)
const handleLLYSP = (e) => {
  // console.log(e.target.offsetHeight, e.target.offsetWidth)
  console.log(width.value,height.value)
  let x = (e.clientX - coordinate.value.x) / height.value
  let y = (e.clientY - coordinate.value.y) / width.value
  let rw = document.querySelector('.rw')
  let bg = document.querySelector('.bg')
  rw.style.top = y + 'px'
  rw.style.right = x + 'px'
  bg.style.top = y + 'px'
  bg.style.left = x + 'px'
}
onMounted(()=>{
//监听窗口变化
  window.onresize=()=>{
    return(()=>{
      window.screenWidth=document.body.clientWidth;
      window.screenHight=document.body.clientHeight;
      width.value=window.screenWidth*0.01;
      height.value=window.screenHight*0.01;
    })();
  };
});
</script>

<style lang='scss' scoped>
#downloadPage {
  width: 1920px;
  height: 100vh;
  background-color: #cccccc;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .rw {
    width: 640px;
    height: 100vh;
    background: url($gxsRW) no-repeat center;
    background-size: contain;
    position: absolute;
    right: 30px;
  }

  .bg {
    width: 1920px;
    height: 800px;
    background: url($gxsDownBg) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
  }

  .qrCode {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    margin-right: -150px;
    margin-top: -150px;
    box-shadow: 10px 10px 20px #0d0d14;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
</style>
