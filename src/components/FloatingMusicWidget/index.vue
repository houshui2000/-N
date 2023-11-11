<template>
  <div>
    <audio @timeupdate="updateProgress" controls ref="audioRef" style="display: none">
      <source :src="fileurl" type="audio/mpeg" />
      您的浏览器不支持音频播放
    </audio>
    <div class="audio_right">
      <div v-if="!audioIsPlay" @click="playAudio" class="audio_icon play" alt="播放">
        <svg
          t="1699702629794"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3991"
          width="20px"
          height="20px"
        >
          <path
            d="M512 62.389956c-248.312412 0-449.610044 201.297632-449.610044 449.610044s201.297632 449.610044 449.610044 449.610044 449.610044-201.297632 449.610044-449.610044S760.312412 62.389956 512 62.389956zM786.507004 786.507004c-35.672454 35.672454-77.196173 63.672158-123.416867 83.222423-47.821145 20.22667-98.655927 30.482245-151.09116 30.482245-52.435233 0-103.270015-10.255575-151.09116-30.482245-46.220694-19.549242-87.744413-47.549969-123.416867-83.222423-35.672454-35.672454-63.672158-77.196173-83.222423-123.416867-20.22667-47.821145-30.482245-98.655927-30.482245-151.090137 0-52.435233 10.255575-103.270015 30.482245-151.09116 19.549242-46.220694 47.549969-87.744413 83.222423-123.416867 35.672454-35.672454 77.196173-63.672158 123.416867-83.222423 47.821145-20.22667 98.654904-30.482245 151.09116-30.482245 52.435233 0 103.268992 10.255575 151.09116 30.482245 46.220694 19.549242 87.744413 47.549969 123.416867 83.222423 35.672454 35.672454 63.672158 77.196173 83.222423 123.416867 20.22667 47.821145 30.482245 98.655927 30.482245 151.09116 0 52.435233-10.255575 103.268992-30.482245 151.090137C850.179163 709.310831 822.179458 750.83455 786.507004 786.507004zM699.168844 285.84933 583.882144 285.84933c-3.203972 0-5.801123 2.597151-5.801123 5.801123l0 440.698071c0 3.203972 2.597151 5.801123 5.801123 5.801123l115.2867 0c3.203972 0 5.801123-2.597151 5.801123-5.801123L704.969966 291.650453C704.97099 288.446481 702.373839 285.84933 699.168844 285.84933zM440.117856 285.84933 324.830133 285.84933c-3.203972 0-5.801123 2.597151-5.801123 5.801123l0 440.698071c0 3.203972 2.597151 5.801123 5.801123 5.801123L440.117856 738.149647c3.203972 0 5.801123-2.597151 5.801123-5.801123L445.918979 291.650453C445.918979 288.446481 443.321828 285.84933 440.117856 285.84933z"
            fill="#272636"
            p-id="3992"
          ></path>
        </svg>
      </div>
      <div v-if="audioIsPlay" @click="playAudio" class="audio_icon suspend" alt="暂停">
        <svg
          t="1699702650500"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4965"
          width="20px"
          height="20px"
        >
          <path
            d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
            fill="#666666"
            p-id="4966"
          ></path>
          <path
            d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
            fill="#666666"
            p-id="4967"
          ></path>
        </svg>
      </div>
      <el-slider class="slider_box" v-model="currentProgress" :show-tooltip="false" @change="handleProgressChange" />
      <div class="audio_time">
        <span class="audio_current">{{ audioStart }}</span>
        &nbsp;/&nbsp;
        <span class="audio_total">{{ durationTime }}</span>
      </div>
      <div class="volume">
        <div class="volume_progress" v-show="audioHuds">
          <el-slider
            vertical
            height="90px"
            class="volume_bar"
            v-model="audioVolume"
            :show-tooltip="false"
            @change="handleAudioVolume"
          />
        </div>
        <div class="volume_icon" v-if="audioVolume > 0" @click.stop="audioHuds = !audioHuds" alt="">
          <svg
            t="1699702784435"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5959"
            width="20px"
            height="20px"
          >
            <path
              d="M816.416 301.288c-25.97 25.908-67.988 25.908-93.96 0-25.91-25.91-25.91-67.99 0-93.962l187.862-187.862c25.972-25.91 67.99-25.91 93.962 0 25.908 25.91 25.908 67.99 0 93.96l-187.864 187.864zM511.742 1023.454L256.016 767.726H64.22c-35.338 0-63.932-28.596-63.932-63.934V320.204c0-35.336 28.594-63.932 63.932-63.932h191.794L511.742 0.544s63.932-7.992 63.932 63.932V959.52c0 71.924-63.932 63.934-63.932 63.934z m-63.932-767.182l-127.864 127.864H128.152v255.726h191.794l127.864 127.866V256.272z m319.658 319.658c-35.338 0-63.932-28.594-63.932-63.932 0-35.336 28.594-63.932 63.932-63.932h191.794c35.338 0 63.932 28.596 63.932 63.932 0 35.338-28.594 63.932-63.932 63.932h-191.794z m48.948 146.78l187.864 187.862c25.908 25.972 25.908 68.052 0 93.962-25.972 25.91-67.99 25.91-93.962 0l-187.862-187.862c-25.91-25.972-25.91-68.052 0-93.962 25.972-25.91 67.99-25.91 93.96 0z"
              p-id="5960"
            ></path>
          </svg>
        </div>
        <div class="volume_icon" v-if="audioVolume <= 0" @click.stop="audioHuds = !audioHuds" alt="">
          <svg
            t="1699702818843"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6935"
            width="20px"
            height="20px"
          >
            <path
              d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z"
              fill="#272536"
              p-id="6936"
            ></path>
            <path
              d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955"
              fill="#272536"
              p-id="6937"
            ></path>
            <path
              d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993"
              fill="#272536"
              p-id="6938"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const props = defineProps({
  fileurl: { type: String, default: "" }
})
const audioIsPlay = ref(true) //音频是否在播放
const audioStart = ref("0:00")
const durationTime = ref("0:00") //音频的总时长，显示的时间格式
const duration = ref(0) //音频的总时长
const audioVolume = ref(50) //音量的默认值是0.5
const audioHuds = ref(false) //是否显示音量slider
const audioRef = ref(null)
const currentProgress = ref(0)

onMounted(() => {
  calculateDuration()
})
// 获取音频时长
function calculateDuration() {
  var myVid = audioRef.value
  myVid.loop = false
  myVid.src = props.fileurl
  // 监听音频播放完毕
  myVid.addEventListener(
    "ended",
    function () {
      audioIsPlay.value = true
      currentProgress.value = 0
    },
    false
  )
  if (myVid != null) {
    myVid.oncanplay = function () {
      duration.value = myVid.duration // 计算音频时长
      durationTime.value = transTime(myVid.duration) //换算成时间格式
    }
    myVid.volume = 0.5 // 设置默认音量50%
  }
}
// 音频播放时间换算
function transTime(duration) {
  const minutes = Math.floor(duration / 60)
  const seconds = Math.floor(duration % 60)
  const formattedMinutes = String(minutes).padStart(2, "0") //padStart(2,"0") 使用0填充使字符串长度达到2
  const formattedSeconds = String(seconds).padStart(2, "0")
  return `${formattedMinutes}:${formattedSeconds}`
}
// 播放暂停控制
function playAudio() {
  if (audioRef.value.paused) {
    audioRef.value.play()
    audioIsPlay.value = false
  } else {
    audioRef.value.pause()
    audioIsPlay.value = true
  }
}
// 根据当前播放时间，实时更新进度条
function updateProgress(e) {
  var value = e.target.currentTime / e.target.duration
  if (audioRef.value.play) {
    currentProgress.value = value * 100
    audioStart.value = transTime(audioRef.value.currentTime)
  }
}
//调整播放进度
const handleProgressChange = (val) => {
  if (!val) {
    return
  }
  audioRef.value.pause()
  let currentTime = duration.value * (val / 100)
  // 更新音频的当前播放时间
  audioRef.value.currentTime = currentTime
  audioRef.value.play()
  audioIsPlay.value = false
}
//调整音量
const handleAudioVolume = (val) => {
  audioRef.value.volume = val / 100
}
</script>

<style lang="scss" scoped>
.audio_right {
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  // background: linear-gradient(to left, #2e7bff 0%, #8ee7ff 100%);
  background-color: saddlebrown;
  border-radius: 4px;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
  .slider_box {
    width: 160px;
    height: 4px;
    border-radius: 5px;
    background-color: #f1f1f1;
    flex: 1;
    margin: 0 8px 4px;
  }
  .audio_icon {
    width: 40px;
    height: 40px;
    margin-bottom: 4px;
    cursor: pointer;
    background-color: salmon;
    @include Myflex();
  }
  // .play{

  // }
  .audio_time {
    color: #f1f1f1;
    overflow: hidden;
    font-size: 12px;
    position: absolute;
    bottom: 3px;
    left: 80px;
    .audio_total {
      float: right;
    }
    .audio_current {
      float: left;
    }
  }
}
.volume {
  position: relative;
  background-color: salmon;
  .volume_progress {
    width: 32px;
    height: 140px;
    position: absolute;
    top: -142px;
    right: -4px;
  }
  .volume_bar {
    background: #f1f1f1;
    border-radius: 4px;
  }
  .volume_icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    @include Myflex();
  }
}
</style>
<style scoped lang="scss">
.volume .volume_bar {
  background-color: #383b6d;
  // height: ;
}
:deep(.el-slider__bar) {
  background-color: saddlebrown !important;
}
.slider_box,
.volume_bar {
  .el-slider__button {
    width: 8px;
    height: 8px;
    border: none;
  }
  .el-slider__bar {
    background: #00db15;
  }
}
.slider_box {
  .el-slider__button-wrapper {
    width: 8px;
  }
}
.volume_bar {
  .el-slider__runway {
    margin: 0 14px !important;
  }
}
</style>
