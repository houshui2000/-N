<template>
  <div>
    <div class="S_L_top">
      <p>搜索</p>
      <div class="input">
        <el-input v-model.trim="search.name" class="w-50 m-2" placeholder="找寻理想的卡牌" />
        <div class="icon">
          <SvgIcon icon-class="sousuo" />
        </div>
      </div>
    </div>
    <!-- 排序方式 -->
    <div class="S_L_Par">
      <p>排序方式</p>
      <div class="input">
        <el-select
          popper-class="blueBack"
          v-model="search.orderColumn"
          class="m-2"
          placeholder="价格由低到高"
          size="large"
        >
          <!-- <el-option v-for="item in mallHomepage" :key="item.value" :label="item.label" :value="item.value" /> -->
        </el-select>
      </div>
    </div>
    <!-- 类别 -->
    <div class="S_L_LetBie">
      <p @click="showhide = !showhide">
        <span>类别</span>
        <span v-show="showhide">
          <el-icon size="10"><ArrowDownBold /></el-icon>
        </span>
        <span v-show="!showhide">
          <el-icon size="10"><ArrowUpBold /></el-icon>
        </span>
      </p>
      <div ref="LeiBie_xia" class="LeiBie_xia">
        <div ref="lei" v-for="item in categoryData" :key="item" class="lei">
          <el-checkbox-group v-model="search.categoryIds">
            <el-checkbox :label="item.id"></el-checkbox>
            <span class="wenzi">{{ item.name }}</span>
            <span class="shu">{{ item.count }}</span>
          </el-checkbox-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="lefetSectuibLet">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref, watch, nextTick } from 'vue'
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
import { shopcardcategories } from '@/network/shoppingCentre/shoppingCentre'
// import { mallHomepage } from '@/enumerate/index.js'
const props = defineProps({
  LeftData: { type: Object, required: true }
})
const search = ref({
  name: '',
  orderColumn: '1',
  categoryIds: []
})
const inputFuncation = () => {
  search.value.name = props.LeftData.name
}

// const checkList = ref([]) // 多选框里面的数量
inputFuncation()
const showhide = ref(false) // 显示隐藏 -- 类别
const LeiBie_xia = ref(null)
const lei = ref(null)

const categoryData = ref([{ id: '', name: '', count: '', boolea: false }]) //类别
const creatMy = async () => {
  const res = await shopcardcategories()
  categoryData.value = res.data
}
creatMy()
watch(
  showhide,
  (newVal) => {
    nextTick(() => {
      if (newVal) {
        LeiBie_xia.value.style.height = '0'
        return
      }
      const heigh = 10 * lei.value[0].offsetHeight + 20

      LeiBie_xia.value.style.height = `${heigh}px`
    })
  },
  {
    immediate: true
  }
)
const $emit = defineEmits(['LeftData'])

watch(
  search,
  (newVal) => {
    $emit('LeftData', newVal)
  },
  {
    deep: true
  }
)
</script>
<style lang="scss">
.blueBack.el-popper.is-light {
  background-color: #00081a !important;
  border: 1px solid #2f2351;
}
.blueBack {
  .el-popper.is-light .el-popper__arrow::before {
    border: 1px solid #376edc;
    background: #151111 !important;
  }
}
</style>
<style lang="scss" scoped>
:deep(.el-popper.is-light) {
  color: white;
}
%mt {
  padding: 34px 25px;
  border-bottom: 1px solid #1a2a40;
  > p {
    font: normal normal 500 14px 'PingFang SC';
    color: white;
    margin-bottom: 20px;
  }
  .input {
    :deep(.el-input__wrapper) {
      background-color: transparent;
      box-shadow: none;
      height: 48px;
      border: 1px solid #2f2351;
    }
  }
}
.S_L_top {
  @extend %mt;

  .input {
    position: relative;

    .icon {
      width: 15px;
      height: 15px;
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-100%);
    }
  }
}
.S_L_Par {
  @extend %mt;

  :deep(.el-input.is-focus .el-input__wrapper) {
    box-shadow: none !important;
  }
}
//
.S_L_LetBie {
  @extend %mt;
  font: normal normal 400 14px 'PingFang SC';
  color: white;
  > p {
    cursor: pointer;
    @include Myflex(space-between);
  }
  .show {
    transform: scaleY(1) !important;
  }
  .LeiBie_xia {
    // transform: scaleY(0);
    // transtions: 1s;
    transition: 1s;
    overflow: hidden;
    transform-origin: center top;
    :deep(.el-checkbox__label) {
      display: none;
    }
    .lei {
      margin-top: 20px;
      position: relative;
      @include Myflex(flex-start);
      .wenzi {
        margin-left: 14px;
        height: 20px;
        font: normal normal 400 14px 'PingFang SC';
        line-height: 20px;
      }
      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background-color: transparent;
        border-color: #4f4f4f !important;
      }
      :deep(.el-checkbox__inner) {
        background-color: transparent;
        border: 1px solid #4f4f4f;
      }
      .shu {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        font: normal normal 400 12px 'PingFang SC';
        color: #666;
      }
    }
  }
}
</style>
