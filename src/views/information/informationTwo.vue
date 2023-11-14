<template>
  <div class="informationTwo">
    <CrumbsVue
      :arr="[
        { name: '咨询', path: '/information' },
        { name: '咨询详情', path: route.params.id }
      ]"
    />
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
      <div v-html="asd.content" class="center_bottom ql-editor"></div>
    </div>
  </div>
</template>
<script setup>
import CrumbsVue from "@/components/crumbs/index.vue"
import { shopnewsdetail } from "@/network/information"
import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"
const route = useRoute()
const router = useRouter()
const asd = ref("")
const init = async () => {
  if (!route.query.id) {
    router.back()
    return
  }
  const res = await shopnewsdetail({ id: route.query.id })

  asd.value = res.data
}
init()
</script>
<style lang="scss" scoped>
.informationTwo {
  padding-top: 14px;
  margin: auto;

  color: white;
  // height: 2000px;
  width: 1470px;
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
        font: normal normal 400 12px "PingFang SC";
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
    }
  }
}
</style>
