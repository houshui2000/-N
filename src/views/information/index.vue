<template>
  <div class="information">
    <!-- <div class="zixun">资讯信息</div> -->
    <LunBoVue />
    <!-- <asVue ref="audio" class="audio-box" :fileurl="asdad" /> -->
    <section>
      <div class="section_top">
        <p
          :style="{ color: nameRef == item.id ? 'white' : '#cccccc' }"
          v-for="(item, index) in listArr"
          @click="(nameRef = item.id), listOfInformation(), sessionStoragesetItem('categoryId', item.id)"
          :key="index"
        >
          <!--  :class="{ active: nameRef == item.id }" -->
          {{ item.name }}
          <span :style="{ opacity: nameRef !== item.id ? '0' : '1' }"></span>
        </p>
      </div>
      <div v-if="listOfInformationArr?.records?.length > 0" class="section_bottom">
        <div
          v-for="(item, index) in listOfInformationArr.records"
          @click="xin_xi_tiao(item)"
          :key="index"
          class="Xin_xi_tiao"
        >
          <div class="xin_xi_center">
            <div class="img">
              <img class="equalProportions" :src="item.imgUrl" alt="" />
            </div>
            <div class="center_right">
              <div class="top">
                <span v-if="item.top">置顶</span>
                {{ item.title }}
              </div>
              <div class="wenzi">{{ item.introduction }}</div>
            </div>
            <div class="xinix">{{ item.publishTime }}</div>
          </div>
        </div>

        <!-- v-if="listOfInformationArr?.records?.length !== Fenye.total" -->
        <div class="fenye">
          <div class="fen_xi">
            <el-pagination
              :page-size="Fenye.size"
              v-model:current-page="Fenye.currentPage"
              :pager-count="11"
              layout="prev, pager, next"
              :total="Fenye.total"
            />
          </div>
        </div>
      </div>
      <MissWakeupPage :title="'暂无数据'" titleTwo="" v-if="listOfInformationArr?.records?.length == 0" />
    </section>
  </div>
</template>
<script setup>
import { ref, watch } from "vue"
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"

import LunBoVue from "./components/LunBo/index.vue"
import { shopnewscategory, shopnews } from "@/network/information"
import { useRouter } from "vue-router"
import { sessionStoragesetItem, sessionStoragegetItem } from "@/utils/storage"
// import { useStore } from '@/pinia'
// import asdad from "@/assets/sadsa.mp3"
// const { loginStore } = useStore()
// const ll = ref()
const router = useRouter()
const nameRef = ref("")
const Fenye = ref({
  currentPage: 1,
  size: 5, // 一页多少条
  total: 0 // 总数
})
const listArr = ref({})
const listOfInformationArr = ref([])
const init = async () => {
  const res = await shopnewscategory()
  listArr.value = res.data

  const number = sessionStoragegetItem("categoryId") || res.data[0].id
  const index = res.data.findIndex((item) => item.id === Number(number))
  nameRef.value = res.data[index].id
  listOfInformation()
}
init()
const xin_xi_tiao = (item) => {
  sessionStoragesetItem("categoryId", nameRef.value)
  // router.push(`/informationTwo/${item.id}`)
  router.push({
    path: "/informationTwo",
    query: {
      id: item.id
    }
  })
}

// 资讯列表
const listOfInformation = async () => {
  const res = await shopnews({
    current: Fenye.value.currentPage,
    size: Fenye.value.size,
    categoryId: nameRef.value
  })
  Fenye.value.total = res.data.total
  listOfInformationArr.value = res.data
}
watch(
  () => Fenye.value.currentPage,
  () => {
    init()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
@import "@/styles/other/paginations.scss";
// :deep(.el-carousel__indicators) {
//   display: none;
// }
.information {
  margin: auto;
  width: 100%;
  transform: translateY(-70px);
  .zixun {
    height: 36px;
    width: 138px;
    font: normal normal 500 18px "PingFang SC";
    color: #ffffff;
    @include Myflex(flex-start);
    padding-left: 10px;
    background: linear-gradient(90deg, rgba(235, 87, 220, 0.5) 20%, rgba(65, 81, 253, 0) 100%);
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background-color: #d00a75;
    }
  }
  section {
    width: 1470px;
    margin: 26px auto 34px auto;
    .section_top {
      cursor: pointer;

      height: 100%;
      @include Myflex();
      padding: 0 69px;

      > p {
        cursor: pointer;
        font: normal normal 400 14px " PingFang SC";
        color: white;
        position: relative;
        display: inline-block;
        height: 100%;
        // opacity: ;
        // margin-right: 80px;
        padding: 0px 12px;
        height: 25px;
        @include Myflex();
        margin-right: 100px;
        &:last-child {
          margin-right: 0;
        }
        span {
          transition: all 1s;
          display: inline-block;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 50%;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(149deg, rgb(213, 5, 205) 45.99%, rgb(53, 63, 253) 85.48%);

          //   transition: all 0.5s;
          //   position: relative;
        }
      }
    }
    .section_bottom {
      position: relative;
      margin-top: 33px;
      min-height: 100vh;
      padding-bottom: 80px;
      @include bordergradientMY(linear-gradient(90deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%));
      .Xin_xi_tiao {
        cursor: pointer;
        border-bottom: 1px solid rgb(42, 49, 76);
        &:last-child {
          border-bottom: 0px solid rgb(42, 49, 76);
        }
        // > p {
        //   font: normal normal 400 16px ' PingFang SC';
        //   color: white;
        //   span {
        //     border-radius: 4px;
        //     padding: 5px;
        //     margin-right: 6 px;
        //     font: normal normal 600 12px ' PingFang SC';
        //     background: #ed614c;
        //   }
        // }
        .xin_xi_center {
          // height: 120px;
          // margin: 21px 0;
          position: relative;
          padding: 33px;
          @include Myflex(space-between);
          .img {
            width: 260px;
            height: 166px;
            border-radius: 6px;
            // @include bordergradientMY(linear-gradient(180deg, rgba(139, 98, 162, 1) 0%, rgba(46, 37, 81, 0.9) 100%));
            img {
              width: 100%;
              border-radius: 6px;
              height: 100%;
              // @include bordergradientMY(
              //   linear-gradient(180deg, rgba(83, 56, 119, 0.5) 0%, rgba(53, 81, 125, 0.3) 100%)
              // );
              @include bordergradientMY(linear-gradient(180deg, rgba(139, 98, 162, 1) 0%, rgba(61, 76, 156, 1) 100%));
            }
          }
          .center_right {
            width: calc(100% - 160px);
            padding-left: 32px;
            height: 166px;
            color: white;
            // @include Myflex(flex-start); // background-color: sandybrown;
            .top {
              font: normal normal 500 18px "PingFang SC";
              color: white;
              height: 40px;
              @include Myflex(flex-start, flex-start);
              span {
                padding: 4px;
                border-radius: 4px;
                font: normal normal 400 14px "PingFang SC";
                background: #ed614c;
                margin-right: 10px;
              }
            }
            .wenzi {
              font: normal normal 400 12px "PingFang SC";
              height: calc(100% - 65px);
              // -webkit-line-clamp: 6;
              overflow: hidden;
            }
            // .center_right_top {
            //   height: calc(100% - 35px);
            //   font: normal normal 400 14px "PingFang SC";
            //   overflow: hidden;
            //   color: rgba(255, 255, 255, 0.8);
            // }
          }
        }
        .xinix {
          position: absolute;
          right: 30px;
          bottom: 30px;
          font: normal normal 200 14px " PingFang SC";
          color: #fff;
          opacity: 0.8;
          text-align: right;
        }
      }
    }
  }
}

.fenye {
  position: absolute;
  left: 0;
  bottom: 0;
  // height: 100%;
  width: 100%;
  @include Myflex();
  padding: 23px 0 23px 0;
}
.fen_xi {
  display: inline-block;
  margin: auto;
}
</style>
