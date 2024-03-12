<template>
  <div class="input_vue">
    <el-input ref="input" v-bind="$attrs" class="w-50 m-2" :placeholder="props.placeholder">
      <template v-for="(value, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
    <!--  @keyup.enter="$emit('LeftDataInput', search.name)" -->
    <div @click="$emit('clickIcon')" v-if="props.icon" class="icon">
      <SvgIcon Height="15" size="20" icon-class="sousuo" />
    </div>
  </div>
</template>

<script setup>
/**
 * <InputVue ref="InputVueRef" v-model="modulue" />
 * import InputVue from "@/components/Input"
 */
import { ref, onMounted } from "vue"
const props = defineProps({
  // height: { type: String, default: "40px" },
  placeholder: { type: String, default: "找寻理想的资产" },
  icon: { type: Boolean, default: true }
})
const $emit = defineEmits(["clickIcon"])
const input = ref("")
onMounted(() => {
  inputlivingexample()
})
let inputlivingexampleObject = ref({})
/**获取 input 的所有实例 */
const inputlivingexample = () => {
  const Array = Object.entries(input?.value)
  for (const [key, value] of Array) {
    inputlivingexampleObject.value[key] = value
  }
}
defineExpose(inputlivingexampleObject.value)
</script>
<style lang="scss" scoped>
.input_vue {
  width: 100%;
  // height: 100%;

  position: relative;
  :deep(.el-input__wrapper) {
    box-shadow: none;
    // height: 100%;
    // height: v-bind("props.height");
    // height: 140px;
    border-radius: 5px;

    .el-input__inner {
      color: white;
      padding-right: 28px;
    }
  }
  .icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    @include var.Myflex();
    transform: translateY(-50%);
  }
}
</style>
