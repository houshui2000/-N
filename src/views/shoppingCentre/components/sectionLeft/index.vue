<template>
  <div>
    <div class="S_L_top">
      <p>搜索</p>
      <div class="input">
        <el-input v-model.trim="search.name" class="w-50 m-2" placeholder="找寻理想的资产" />
        <div class="icon">
          <SvgIcon Height="15" size="20" icon-class="sousuo" />
        </div>
      </div>
    </div>
    <!-- 排序方式 -->
    <div class="S_L_Par">
      <p>排序方式</p>
      <div class="input_select">
        <selectVue v-model:orderColumn="search.orderColumn" :mallHomepage="mallHomepage">
          <template #top_icon_true="{ dropdownMenu }">
            <div class="top_icon">
              <!-- {{ dropdownMenu }} -->
              <p v-show="!dropdownMenu">
                <el-icon><ArrowUpBold /></el-icon>
              </p>
              <p v-show="dropdownMenu">
                <el-icon><ArrowDownBold /></el-icon>
              </p>
            </div>
          </template>
        </selectVue>
        <!-- <el-select
          popper-class="blueBack"
          v-model="search.orderColumn"
          class="m-2"
          placeholder="价格由低到高"
          size="large"
        >
          <!~~ <el-option v-for="item in mallHomepage" :key="item.value" :label="item.label" :value="item.value" /> ~~>
        </el-select>-->
      </div>
    </div>
    <!-- 类别 -->
    <div class="S_L_LetBie">
      <p @click="showhide = !showhide">
        <span>类别</span>
        <span class="sadas" v-show="showhide">
          <el-icon><ArrowDownBold /></el-icon>
          <!-- <el-icon><ArrowUpBold /></el-icon> -->
        </span>
        <span class="sadas" v-show="!showhide">
          <!-- <el-icon size="10"><ArrowUpBold /></el-icon> -->
          <el-icon><ArrowUpBold /></el-icon>
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
import selectVue from '@/components/select/index.vue'
import { ref, watch, nextTick } from 'vue'
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
import { shopcardcategories } from '@/network/shoppingCentre/shoppingCentre'
import { mallHomepage } from '@/enumerate/index.js'
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
<style lang="scss" scoped>
:deep(.el-popper.is-light) {
  color: white;
}
%mt {
  padding: 34px 25px 20px 25px;
  border-bottom: 1px solid #1a2a40;
  > p {
    font: normal normal 500 14px 'PingFang SC';
    color: white;
    margin-bottom: 20px;
  }
  .input {
    :deep(.el-input__wrapper) {
      box-shadow: none;
      height: 48px;
      border-radius: 2px;
      @include bordergradientMY(
        linear-gradient(0deg, rgba(48, 35, 82, 0.9) 0%, rgba(36, 54, 77, 0.9) 100%),
        linear-gradient(180deg, #070d13 -1.45%, #070d13 100%)
      );
      .el-input__inner {
        color: white;
      }
    }
  }
}
.S_L_top {
  @extend %mt;
  :deep(.el-input) {
    width: 213px;
  }
  .input {
    position: relative;
    .icon {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
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
  padding: 20px 25px 45px 25px;

  font: normal normal 400 14px 'PingFang SC';
  color: white;
  > p {
    cursor: pointer;
    @include Myflex(space-between);
  }
  .sadas {
    @include Myflex();
  }
  .show {
    transform: scaleY(1) !important;
  }
  .LeiBie_xia {
    transition: 1s;
    overflow: hidden;
    transform-origin: center top;
    :deep(.el-checkbox__label) {
      display: none;
    }
    .lei {
      margin-bottom: 20px;
      position: relative;
      @include Myflex(flex-start);
      &:last-child {
        margin-bottom: 0px;
      }
      .wenzi {
        margin-left: 14px;
        height: 20px;
        font: normal normal 400 14px 'PingFang SC';
        line-height: 20px;
      }
      :deep(.el-checkbox-group) {
        @include Myflex();
      }
      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background-color: transparent;
        @include Myflex();
        border-color: #4f4f4f !important;
      }
      :deep(.el-checkbox__inner) {
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: 1px solid rgb(51, 51, 51);
      }
      :deep(.el-checkbox__inner::after) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg) scaleY(1);
      }
      .shu {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        font: normal normal 700 12px 'PingFang SC';
        color: #666;
      }
    }
  }
}
.input_select {
  width: 213px;
  height: 48px;
  border-radius: 2px;
  @include bordergradientMY(
    linear-gradient(0deg, rgba(48, 35, 82, 0.9) 0%, rgba(36, 54, 77, 0.9) 100%),
    linear-gradient(180deg, #070d13 -1.45%, #070d13 100%)
  );

  :deep(section) {
    border: 1px solid transparent;
    transform: translate(-1px, -2px);

    @include bordergradientMY(
      linear-gradient(0deg, rgba(48, 35, 82, 0.9) 0%, rgba(36, 54, 77, 0.9) 100%),
      linear-gradient(180deg, #070d13 -1.45%, #070d13 100%)
    );
  }
}
.top_icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  > p {
    width: 100%;
    height: 100%;
    @include Myflex();
  }
}
</style>
