<template>
  <div class="information">
    <div class="zixun">资讯信息</div>
    <section>
      <div class="section_top">
        <p v-for="(item, index) in 2" @click="nameRef = index" :class="{ active: nameRef == index }" :key="index">
          {{ item }}
        </p>
      </div>
      <div class="section_bottom">
        <div v-for="(item, index) in 6" :key="index" class="Xin_xi_tiao">
          <p>
            <span>置顶</span>
            火眼金睛，发现美的眼睛
          </p>
          <div class="xin_xi_center">
            <div class="img"></div>
            <div class="center_right">dasdas</div>
          </div>
          <div class="xinix">2023-2-4</div>
        </div>
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
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const nameRef = ref('0')
const Fenye = ref({
  currentPage: 1,
  size: 10, // 一页多少条
  pages: 12 // 总数
})
</script>
<style lang="scss" scoped>
@import '@/styles/other/paginations.scss';
.information {
  margin: auto;
  padding-top: 32px;
  width: 1473px;
  .zixun {
    height: 36px;
    width: 138px;
    font: normal normal 500 18px 'PingFang SC';
    color: #ffffff;
    @include Myflex(flex-start);
    padding-left: 10px;
    background: linear-gradient(90deg, rgba(235, 87, 220, 0.5) 20%, rgba(65, 81, 253, 0) 100%);
    position: relative;
    &::after {
      content: '';
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

    margin: 30px auto;
    .section_top {
      @include bordergradientMY(
        linear-gradient(90deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%),
        linear-gradient(180deg, rgba(60, 63, 130, 0.1) 0%, rgba(4, 4, 7, 0.54) 100%)
      );
      height: 100%;
      @include Myflex(flex-start);
      padding: 0 69px;
      .active {
        transition: all 0.5s;
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 50%;
          height: 4px;
          border-radius: 5px;
          background: linear-gradient(149deg, rgb(213, 5, 205) 45.99%, rgb(53, 63, 253) 85.48%);
        }
      }
      > p {
        font: normal normal 400 14px ' PingFang SC';
        color: white;
        display: inline-block;
        background-color: saddlebrown;
        height: 100%;
        // width: 300px;
        padding: 20px 12px;
        @include Myflex();
        margin-right: 100px;
        background: linear-gradient(180deg, rgba(223, 0, 201, 0) 0%, rgba(0, 21, 94, 0.3) 100%);
      }
    }
    .section_bottom {
      margin-top: 23px;
      padding: 11px 0;
      background-color: saddlebrown;
      @include bordergradientMY(linear-gradient(90deg, rgba(83, 56, 119, 0.9) 0%, rgba(53, 81, 125, 0.9) 100%));
      .Xin_xi_tiao {
        border-bottom: 1px solid rgb(42, 49, 76);
        padding: 24px 51px;
        > p {
          font: normal normal 400 16px ' PingFang SC';
          color: white;
          span {
            border-radius: 4px;
            padding: 5px;
            margin-right: 6 px;
            font: normal normal 600 12px ' PingFang SC';
            background: #ed614c;
          }
        }
        .xin_xi_center {
          height: 120px;
          margin: 21px 0;
          @include Myflex(space-between);
          .img {
            width: 160px;
            height: 120px;
          }
          .center_right {
            width: calc(100% - 160px);
            padding-left: 36px;
            height: 100%;
            background-color: sandybrown;
          }
        }
        .xinix {
          font: normal normal 600 14px ' PingFang SC';
          color: #fff;
          opacity: 0.6;
        }
      }
    }
  }
}

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
</style>
