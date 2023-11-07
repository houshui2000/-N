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
            <div class="input_select">
              <selectVue v-model:orderColumn="mallHomepagName.asc" :mallHomepage="mallHomepageTTwo">
                <template #top_icon_true="{ dropdownMenu }">
                  <div class="top_icon">
                    <p v-show="dropdownMenu">
                      <el-icon><ArrowUpBold /></el-icon>
                    </p>
                    <p v-show="!dropdownMenu">
                      <el-icon><ArrowDownBold /></el-icon>
                    </p>
                  </div>
                </template>
              </selectVue>
            </div>
          </div>
        </div>

        <!-- <input type="text"> -->
        <div class="input">
          <el-input v-model.lazy="mallHomepagName.orders" class="w-50 m-2" placeholder="请输入编号" />
          <div class="icon">
            <SvgIcon size="20" icon-class="sousuo" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <tablesVue v-show="classify.index === 0" @PayFun="init()" :records="creatData.records">
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
import selectVue from '@/components/select/index.vue'
import { ArrowDownBold, ArrowUpBold } from '@element-plus/icons-vue'
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
    label: '根据资产编号正序排序'
  },
  {
    id: 1,
    value: 'false',
    name: 'false',
    label: '(默认)根据资产编号倒序排序'
  }
]
const mallHomepagName = ref({
  // 排序 + 搜索
  orders: '',
  asc: 'false'
})
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
    name: mallHomepagName.value.orders, // 搜索
    'orders[0].column': 'cardNo',
    'orders[0].asc': mallHomepagName.value.asc // 排序 true 升，false 降
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
watch(
  () => route.params.vaultId,
  () => {
    if (route.name !== 'SCDetailName') return
    init()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
@import '@/styles/other/paginations.scss';

:deep(.el-input__wrapper) {
  background-color: transparent;
  box-shadow: none;
  height: 50px;
  border-radius: 4px;
  // @include bordergradientMY(linear-gradient(180deg, rgba(244, 158, 255, 0.6) 0%, rgba(89, 110, 223, 0.6) 100%));
  @include bordergradientMY(
    linear-gradient(180deg, rgba(244, 158, 255, 0.6) 0%, rgba(89, 110, 223, 0.6) 100%),
    linear-gradient(180deg, rgba(28, 0, 45, 0.8) 0%, rgba(24, 0, 30, 0.8) 0.01%, rgba(0, 9, 54, 0.8) 100%)
  );
  .el-input__inner {
    color: white;
  }
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

      .input_select {
        margin-right: 20px;
        width: 244px;
        border-radius: 4px;
        @include bordergradientMY(
          linear-gradient(180deg, rgba(244, 158, 255, 0.6) 0%, rgba(89, 110, 223, 0.6) 100%),
          linear-gradient(180deg, rgba(28, 0, 45, 0.8) 0%, rgba(24, 0, 30, 0.8) 0.01%, rgba(0, 9, 54, 0.8) 100%)
        );
        :deep(section) {
          border: 1px solid transparent;
          @include bordergradientMY(
            linear-gradient(0deg, rgba(48, 35, 82, 0.9) 0%, rgba(36, 54, 77, 0.9) 100%),
            linear-gradient(180deg, #241328 0%, #000c2c 100%)
          );
          // background: var(--Linear, linear-gradient(180deg, rgba(28, 0, 45, 0.80) 0%, rgba(24, 0, 30, 0.80) 0.01%, rgba(0, 9, 54, 0.80) 100%));
          .article {
            width: 244px;
          }
        }
        :deep(.option) {
          &:hover {
            color: white;
            // background: linear-gradient(90deg, #633d6b -1.59%, #000c2c 99.97%);
            background: linear-gradient(180deg, rgba(245, 158, 255, 0.05) 0.01%, rgba(99, 125, 255, 0.05) 100%);
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
      }
      .input {
        // margin-left: 20px;
        position: relative;
        // width: 163px;

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
      // padding: 23px 0 0 0;
    }
    .fen_xi {
      display: inline-block;
      margin: auto;
    }
  }
}
</style>
