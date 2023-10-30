<template>
  <div class="footer">
    <div class="top">
      <div class="left_top">
        <p v-for="(item, index) in 3" :key="index">
          <span>该系列左心</span>
          <span></span>
        </p>
      </div>
      <div class="right_top">
        <!-- 排序方式 -->
        <div class="S_L_Par">
          <div class="input">
            <el-select v-model="value" class="m-2" placeholder="卡牌编号正序" size="large">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </div>
        <!-- <input type="text"> -->
        <div class="input">
          <el-input v-model="input1" class="w-50 m-2" placeholder="请输入编号" />
          <div class="icon">
            <SvgIcon icon-class="sousuo" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <tablesVue :records="creatData.records">
        <div class="fenye">
          <div class="fen_xi">
            <el-pagination
              :page-size="Fenye.size"
              v-model:current-page="currentPage"
              :pager-count="11"
              layout="prev, pager, next"
              :total="Fenye.pages"
            />
          </div>
        </div>
      </tablesVue>
    </div>
  </div>
</template>
<script setup name="xiangqiangBorrttom">
import SvgIcon from '@/components/SvgIcon/index.vue'
import tablesVue from './components/tables/index.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { shopcarddetail } from '@/network/shoppingCentre/shoppingtwo.js'
const input1 = ref('')
const route = useRoute()
const creatData = ref({})

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
const currentPage = ref(1)
const Fenye = ref({
  size: 10,
  pages: 10
})
const init = async () => {
  const res = await shopcarddetail({
    cardVaultShopId: route.params.vaultId,
    size: Fenye.value.size,
    current: currentPage.value
  })
  // const shopcarddetailRes =await shopcarddetail({
  // })
  console.log(res)
  creatData.value = res.data
}
init()
</script>
<style lang="scss" scoped>
:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: transparent;
  border-color: #4f4f4f !important;
}
:deep(.el-input__wrapper) {
  background-color: transparent;
  box-shadow: none;
  height: 48px;
  border: 1px solid #2f2351;
}
:deep(.el-input.is-focus .el-input__wrapper) {
  box-shadow: none !important;
}
:deep(.el-checkbox__inner) {
  background-color: transparent;
  border: 1px solid #4f4f4f;
}
.footer {
  // padding-top: 54px;
  margin-top: 54px;
  width: 100%;
  .top {
    padding: 0 20px;
    @include Myflex(space-between);
    .left_top {
      @include Myflex(flex-start);
      > p {
        margin-right: 88px;
        font: normal normal 400 16px 'PingFang SC';
        color: white;
        span {
          &:last-child {
            margin: 7px auto 0 auto;
            display: block;
            width: 38px;
            height: 2px;
            flex-shrink: 0;
            border-radius: 7px;
            background: linear-gradient(90deg, #3041fe 1.2%, #d903cb 99.97%);
          }
        }
      }
    }
    .right_top {
      @include Myflex(flex-end);

      .input {
        margin-left: 20px;
        position: relative;
        width: 163px;

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
  }
  .bottom {
    .fenye {
      height: 100%;
      width: 100%;
      @include Myflex();
      padding: 23px 0 0 0;
    }
    .fen_xi {
      display: inline-block;
      margin: auto;
      // width: 300px;
      // @include Myflex(space-between);
      :deep(.el-pagination) {
        margin: auto;
      }
      :deep(.btn-prev) {
        &::after {
          content: '<';
          display: inline-block;
          width: 100%;
          height: 100%;
          color: white;
        }
      }
      :deep(.btn-next) {
        &::after {
          content: '>';
          display: inline-block;
          width: 100%;
          height: 100%;
          color: white;
        }
      }
      :deep(.el-pagination button) {
        font: normal normal 500 14px 'PingFang SC';
        background-color: transparent !important;
        i {
          display: none;
        }
        font-size: 20px;
      }
      // :deep(.el-pagination button) {
      //   background-color: transparent !important;
      // }
      :deep(.el-pager li) {
        background-color: transparent !important;
        color: white;
        transition: all 1s;
        border-radius: 8px;
      }
      :deep(.el-pager li.is-active) {
        color: white;
        border: 1px solid #8122e5;
        background-color: transparent !important;
      }
    }
  }
}
</style>
