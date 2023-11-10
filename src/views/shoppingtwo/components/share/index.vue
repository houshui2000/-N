<template>
  <div ref="section" class="share_all">
    <!-- 分享弹框 -->
    <el-dialog
      :modelValue="dialogVisiblePay"
      @update:dialogVisiblePay="$emit('update:dialogVisiblePay', $event)"
      title="Tips"
      :lock-scroll="false"
      :showClose="false"
      @close="$emit('update:dialogVisiblePay', false)"
      @closed="closeMy"
    >
      <template #header>
        <div class="top"></div>
      </template>
      <div class="img_upload">
        <img :src="imgLoad" alt="" />
      </div>
      <div @click="upload" class="download">下载</div>
      <section>
        <div class="img">
          <img class="" :src="realPictures" alt="" />
        </div>
        <div class="section_bottom">
          <div class="bottom_left">
            <p class="title">{{ creatData.authorName }}</p>
            <!-- <p v-html="props.creatData.productIntroduction" class="center"></p> -->
            <p class="center">发现一款猴赛雷的数藏，快来瞧瞧</p>

            <div class="cardJ">
              <div class="cardJ_top">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 41 25" fill="none">
                  <rect y="16.373" width="8.10213" height="8.10213" fill="#96DBF8" />
                  <rect y="8.271" width="8.10213" height="8.10213" fill="#26A9E1" />
                  <rect x="8.10211" y="0.168701" width="8.10213" height="8.10213" fill="#A0FFA5" />
                  <rect x="16.0355" y="8.4397" width="8.10213" height="8.10213" fill="#4B4BF7" />
                  <rect x="24.3064" y="16.373" width="8.10213" height="8.10213" fill="#EB80FC" />
                  <rect x="32.4085" y="8.271" width="8.10213" height="8.10213" fill="#F5911F" />
                  <rect x="32.4085" y="0.168701" width="8.10213" height="8.10213" fill="#D5DE21" />
                </svg>
              </div>
              <div class="cardJ_foter">中国首家可信版权链交易平台</div>
            </div>
          </div>
          <div class="bottom_right">
            <div class="img">
              <!-- <div ref="erweima" class="erweima"></div> -->
              <canvas id="erweima" class="erweima" ref="erweima"></canvas>
            </div>
          </div>
        </div>
      </section>
    </el-dialog>
  </div>
</template>
<script setup name="uploadXia">
import { toRefs, watch, ref, nextTick } from "vue"
import html2canvas from "html2canvas"
import QRCode from "qrcode"
const props = defineProps({
  dialogVisiblePay: { type: Boolean, required: true },
  creatData: { type: Object, required: true }
})

const realPictures = ref(
  new URL("../../../../assets/images/shoppingCentre/missingWakeupPage.png", import.meta.url).href
) // 真正的图片
const toBase64 = (imgUrl) => {
  // 一定要设置为let，不然图片不显示
  const image = new Image()
  // 解决跨域问题
  image.setAttribute("crossOrigin", "anonymous")
  const imageUrl = imgUrl
  image.src = imageUrl
  // image.onload为异步加载
  image.onload = () => {
    var canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    var context = canvas.getContext("2d")
    context.drawImage(image, 0, 0, image.width, image.height)
    var quality = 0.8
    // 这里的dataurl就是base64类型
    // 使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
    const dataurl = canvas.toDataURL("image/jpeg", quality)

    realPictures.value = dataurl
  }
}

const { dialogVisiblePay, creatData } = toRefs(props)
const $emit = defineEmits(["update:dialogVisiblePay"])

let one = 0 // 来检测只生成一次二维码
const erweima = ref(null)
const show = () => {
  if (!erweima.value) return
  QRCode.toCanvas(erweima.value, window.location.href)
  // upload()

  // toBase64('http://172.16.1.38:5173/src/assets/images/carggotoBase64(creatData.value.productUrl)/ceshi_xia.png')
}
const section = ref(null)
const imgLoad = ref("")
/**生成图片 */
const upload = () => {
  let eldialog = document.querySelector(".share_all .el-dialog section")
  html2canvas(eldialog).then((canvas) => {
    imgLoad.value = canvas.toDataURL()
    downloadFile(canvas.toDataURL(), creatData.value.authorName)
  })
}
const downloadFile = (url, downloadName = "图片下载") => {
  const link = document.createElement("a")

  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      link.href = URL.createObjectURL(blob)
      link.download = downloadName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
}
const closeMy = () => {
  realPictures.value = new URL("../../../../assets/images/shoppingCentre/missingWakeupPage.png", import.meta.url).href
}
watch(
  dialogVisiblePay,
  (newVal) => {
    toBase64(creatData.value.productUrl)
    if (!newVal || one > 0) return
    nextTick(() => {
      show()
    })

    one++
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.share_all {
  :deep(.el-dialog) {
    border-radius: 4px;
    width: 390px;
    height: 546px;
    overflow: hidden;
    background: transparent;
    header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
.download {
  cursor: pointer;
  position: absolute;
  color: white;
  right: 12px;
  top: 12px;
  z-index: 2;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.7);
  font: normal normal 400 12px "PingFang SC";
  @include Myflex();
  width: 70px;
  height: 30px;
}
.img_upload {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -99;
  opacity: 0;

  top: 0;
  > img {
    width: 100%;
    height: 100%;
  }
}
section {
  width: 100%;
  position: relative;
  color: white;
  height: 546px;

  border: 3px solid #561895;
  // @include bordergradientMY();
  border-radius: 15px;
  background-color: transparent;
  overflow: hidden;
  // background: linear-gradient(180deg, #122743 -1.45%, #030d15 100%);
  flex-direction: column;
  @include Myflex(flex-start);
  padding: 0 51px;

  > .img {
    position: absolute;
    left: -3px;
    top: 0px;
    // background: linear-gradient(180deg, #122743 -1.45%, #030d15 100%);
    background-color: transparent;
    width: 390px;
    height: 565px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .section_bottom {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    height: 176px;
    background-color: rgba(0, 0, 0, 0.5);
    // background-color: saddlebrown;
    @include Myflex(space-between);
    padding: 25px 17px 17px 17px;
    .bottom_left {
      width: 222px;
      height: 100%;
      .title {
        font: normal normal 700 16px "PingFang SC";
      }
      .center {
        margin: 9px 0;
        font: normal normal 400 14px "PingFang SC";
      }
      .cardJ {
        // background-color: salmon;
        background: linear-gradient(141deg, #b8009a 15.76%, #1615f2 79.59%);
        border-radius: 4px;
        width: 201px;
        height: 69px;
        @include Myflex(space-between, flex-start);
        flex-direction: column;
        padding: 9px 11px;
        .cardJ_top {
          width: 40px;
          height: 25px;
          overflow: hidden;
        }
        .cardJ_foter {
          font: normal normal 400 12px "PingFang SC";
        }
      }
    }
    .bottom_right {
      width: 132px;
      height: 132px;
      background: url("@/assets/images/shoppingCentre/erweima.png") no-repeat scroll left top/ 100% 100%;
      // @include bordergradientMY(
      //   linear-gradient(180deg, rgba(83, 56, 119, 1) 0%, rgba(53, 81, 125, 1) 100%),
      //   linear-gradient(180deg, rgba(36, 19, 40, 0.5) 0%, rgba(36, 19, 40, 0.5) 100%)
      // );
      border-radius: 2px;
      @include Myflex();
      .img {
        // @include bordergradientMY(
        //   linear-gradient(180deg, rgba(83, 56, 119, 0.7) 0%, rgba(53, 81, 125, 0.6) 100%),
        //   linear-gradient(180deg, #241328 0%, #000c2c 100%)
        // );
        width: 111.092px;
        border-radius: 8px;
        height: 112.286px;
        @include Myflex();
        .erweima {
          width: 107% !important;
          height: 106% !important;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
