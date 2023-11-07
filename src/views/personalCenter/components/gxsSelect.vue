<template>
  <div id='gxsSelect'>
    <div class='gxsSelect' @click.stop='handleShow'>
      <div class='text'>{{ props.arrayValue.label }}</div>
      <div class='icon' :class='{active:showState}'></div>
      <div class='option' :class='{active:showState}'>
        <div class='optionBox' v-for='(item,index) in props.options' :key='index' @click.stop='handleClick(item)'>
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['handleEdit'])
let showState = ref(false)
const props = defineProps(['options', 'arrayValue'])
const handleShow = () => {
  showState.value = true
}

const handleClick = (item) => {
  console.log(item.label)
  emit('handleEdit', item)
  showState.value = false

}
// 点击任意位置关闭
const queryFn = e => {
  const screenDoc = document.querySelector('.option') // 需要关闭的元素
  const valueInfoDoc = document.querySelector('.gxsSelect') // 用于开启的元素
  if (valueInfoDoc && valueInfoDoc.contains(e.target) && screenDoc && !screenDoc.contains(e.target)) {
  } else {
    showState.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', queryFn)
})
onUnmounted(() => {
  document.removeEventListener('click', queryFn)
})

</script>

<style lang='scss' scoped>
.gxsSelect {
  width: 134px;
  height: 36px;
  background: url($gxsAssetLibraryFrame1) no-repeat center;
  background-size: contain;
  line-height: 36px;
  font-size: 12px;
  position: relative;
  cursor: pointer;

  .text {
    width: 134px;
    height: 36px;
    //margin-left: 11px;
    padding-left: 22px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .icon {
    width: 11px;
    height: 6px;
    background: url($gxsAssetLibraryArrow) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 11px;
    transition: all .3s;
    z-index: 3;

    &.active {
      transform: rotateZ(180deg);
    }
  }

  .option {
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
    top: 36px;
    z-index: 1;
    transition: height .3s;

    &.active {
      height: auto;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      border: 1px solid transparent;
      background-image: linear-gradient(to top, #070d13, #070d13), linear-gradient(155.92deg, rgba(159, 98, 219, 0.5) 0%, rgba(126, 172, 186, 0.5) 48.67%, rgba(99, 149, 231, 0.5) 96.71%);

    }

    .optionBox {
      width: 134px;
      height: 36px;
      border-bottom: 1px solid #ccc;
      text-align: center;

      &:last-child {
        border-bottom: 0;
      }
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
