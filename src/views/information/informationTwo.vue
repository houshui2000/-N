<template>
  <div class="informationTwo">
    <div class="mianbao">
      <CrumbsVue
        :arr="[
          { name: '首页', path: '/information' },
          { name: asd.categoryName || '咨询详情', path: route.params.id },
          { name: asd.title, path: route.params.id }
        ]"
      />
      <!-- {{ asd.title }} -->
    </div>
    <!-- -->
    <div class="center">
      <div class="center_top">
        <p class="top">{{ asd.title }}</p>
        <div class="top_bottom">
          <!--<p>
            <!~~ <span>作者：</span> ~~>
            <!~~ <span>文章来源：</span> ~~>
          </p>-->
          <p>{{ asd.publishTime }}</p>
        </div>
      </div>
      <div class="center_bottom_dv">
        <div v-html="asd.content" class="center_bottom ql-editor"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CrumbsVue from "@/components/crumbs/index.vue"
import { shopnewsdetail } from "@/network/information"
import { onMounted, nextTick } from "vue"
import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"
const route = useRoute()

const router = useRouter()
onMounted(() => {})

const asd = ref("")
const init = async () => {
  if (!route.query.id) {
    router.back()
    return
  }
  const res = await shopnewsdetail({ id: route.query.id })

  asd.value = res.data
  nextTick(() => {
    let img = document.querySelector(".center_bottom img")
    if (!img) return
    img.style.maxWidth = "100%"
  })
}
init()
</script>
<style lang="scss" scoped>
.center_bottom_dv {
  font-size: 12px;
  letter-spacing: 2px !important;
}
//滚动条整体样式
.center_bottom::-webkit-scrollbar {
  width: 5px;
  height: 6px; //高宽分别对应横竖滚动条的尺寸
}
.informationTwo {
  padding-top: 14px;
  margin: auto;

  color: white;
  // height: 2000px;
  width: 1470px;
  .mianbao {
    @include Myflex(flex-start);
  }
  .center {
    margin-top: 12px;
    min-height: 300px;
    width: 100%;
    border-radius: 6px;
    padding: 20px 33px 33px 33px;
    @include bordergradientMY(linear-gradient(180deg, rgba(45, 38, 81, 0.9) 0%, rgba(46, 37, 81, 0.9) 100%));
    .center_top {
      padding-bottom: 18px;
      border-bottom: 1px solid #2a314c;
      .top {
        font: normal normal 400 24px "PingFang SC";
        color: #ffffff;
        text-align: center;
        margin-bottom: 10px;
      }
      .top_bottom {
        color: rgba(255, 255, 255, 0.8);
        font: normal normal 400 14px "PingFang SC";
        @include Myflex(space-between);
        > p {
          text-align: center;
          margin: auto;
          &:first-child {
            span {
              text-align: center;
              margin-right: 12px;
            }
          }
        }
      }
    }
    .center_bottom {
      margin-top: 30px;
      min-height: 600px;
    }
  }
}
</style>
