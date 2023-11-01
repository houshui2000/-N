<template>
  <div id="">
    <div class='gxsSelect' @click='handleShow'>
      <div class='text' >{{ value }}</div>
      <div class='icon'></div>
      <div class='option' :class='{active:showState}'>
        <div class='optionBox' v-for='item in 4'>全部状态</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('全部状态')
let showState =ref(true)
const options = ref([
  { id: 1, label: '全部状态' }
])
// const popus=defineProps([{
//
// }])
const handleShow =()=>{
  showState.value=!showState.value
}
</script>

<style lang="scss" scoped>
.gxsSelect {
  width: 134px;
  height: 36px;
  background: url($gxsAssetLibraryFrame1) no-repeat center;
  background-size: contain;
  line-height: 36px;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  .text{
    width: 134px;
    height: 36px;
    //margin-left: 11px;
    padding-left: 11px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .icon{
    width: 11px;
    height: 6px;
    background:url($gxsAssetLibraryArrow) no-repeat center;
    background-size:contain;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 11px;
    transition: all .3s;
    z-index: 3;
    &.active{
      transform: rotateZ(90deg);
    }
  }
  .option{
    width: 134px;
    height: 0;
    overflow: hidden;
    position: absolute;
    border-radius: 4px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border: 0px solid transparent;
    background-image: linear-gradient(to top, #070d13, #070d13), linear-gradient(155.92deg, rgba(159, 98, 219, 0.5) 0%, rgba(126, 172, 186, 0.5) 48.67%, rgba(99, 149, 231, 0.5) 96.71%);
    left: 0;
    top:33px;
    z-index: 1;
    transition: height .3s;
    &.active{
      height: auto;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      border: 1px solid transparent;
      background-image: linear-gradient(to top, #070d13, #070d13), linear-gradient(155.92deg, rgba(159, 98, 219, 0.5) 0%, rgba(126, 172, 186, 0.5) 48.67%, rgba(99, 149, 231, 0.5) 96.71%);

    }
    .optionBox{
      width: 134px;
      height: 36px;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }

  .arrow {
    width: 10px;
    height: 6px;
    background: url($gxsAssetLibraryArrow) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 50%;
    margin-top: -5px;
  }
}
</style>
