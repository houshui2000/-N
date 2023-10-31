<template>
  <div class="footer">
    <div class="top">
      <div class="left_top">
        <p @click="classify.index = index" v-for="(item, index) in classify.arr" :key="index">
          <span>{{ item }}</span>
          <span v-show="classify.index === index"></span>
        </p>
      </div>
      <div class="right_top">
        <!-- 排序方式 -->
        <div class="S_L_Par">
          <div class="input">
            <el-select
              :popper-append-to-body="false"
              class="Mysecleet m-2"
              v-model="mallHomepagName.asc"
              placeholder="卡牌编号正序"
              size="large"
            >
              <div class="sortDiv">
                <el-option
                  class="blueBack"
                  v-for="item in mallHomepageTTwo"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </div>
            </el-select>
          </div>
        </div>
        <!-- <input type="text"> -->
        <div class="input">
          <el-input v-model.lazy="mallHomepagName.orders" class="w-50 m-2" placeholder="请输入编号" />
          <div class="icon">
            <SvgIcon icon-class="sousuo" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <tablesVue v-show="classify.index === 0" :records="creatData.records">
        <div class="fenye">
          <div class="fen_xi">
            <el-pagination
              :page-size="Fenye.size"
              v-model:current-page="Fenye.currentPage"
              :pager-count="11"
              layout="prev, pager, next"
              :total="Fenye.pages"
            />
          </div>
        </div>
      </tablesVue>
      <!-- 作品介绍 -->
      <IntroTpTheWorkVue v-show="classify.index === 1" />
      <!-- 购买须知 -->
      <purchasingNotice v-show="classify.index === 2" />
    </div>
  </div>
</template>
<script setup name="xiangqiangBorrttom">
import SvgIcon from '@/components/SvgIcon/index.vue'
import IntroTpTheWorkVue from './components/introductionToTheWork/index.vue'
import purchasingNotice from './components/purchasingNotice/index.vue'
import tablesVue from './components/tables/index.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { shopcarddetail } from '@/network/shoppingCentre/shoppingtwo.js'
const route = useRoute()
const creatData = ref({
  records: []
})

const classify = ref({
  // 动态组建切换分类
  index: 0,
  arr: ['该系列作品', '作品介绍', '购买须知']
})

const mallHomepageTTwo = [
  {
    id: 0,
    value: 'true',
    name: 'true',
    label: '根据卡牌编号正序排序'
  },
  {
    id: 1,
    value: 'false',
    name: 'false',
    label: '(默认)根据卡牌编号倒序排序'
  }
]
const mallHomepagName = ref({
  // 排序 + 搜索
  orders: '',
  asc: 'false'
}) // 当前页
const Fenye = ref({
  currentPage: 1,
  size: 10, // 一页多少条
  pages: 1 // 总数
})
const init = async () => {
  const res = await shopcarddetail({
    cardVaultId: route.params.vaultId,
    size: Fenye.value.size,
    current: Fenye.value.currentPage,
    // orders: mallHomepagName.value.orders, // 搜索
    asc: mallHomepagName.value.asc // 排序 true 升，false 降
  })
  Fenye.value.pages = res.data.total
  creatData.value = res.data
}
init()
let time = null
watch(
  [() => Fenye.value.currentPage, mallHomepagName],
  () => {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      init()
    }, 500)
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
@import '@/styles/other/paginations.scss';
// 修改 el-select
:deep(.el-input__inner) {
  color: white;
}
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
// 修改 el-select end
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
    }
  }
}
</style>
