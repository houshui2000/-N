<template>
  <div class="audio_right_da">
    <audio @timeupdate="updateProgress" controls ref="audioRef" style="display: none">
      <source :src="fileurl" type="audio/mpeg" />
      您的浏览器不支持音频播放
    </audio>
    <div class="audio_right">
      <div v-if="!audioIsPlay" @click="playAudio" class="audio_icon play" alt="播放">
        <SvgIcon size="20px" Height="20px" icon-class="stop3D" />
      </div>
      <div v-if="audioIsPlay" @click="playAudio" class="audio_icon suspend" alt="暂停">
        <SvgIcon size="20px" Height="20px" icon-class="play3D" />
      </div>
      <!-- 时间 -->
      <div class="audio_time">
        <span class="audio_current">{{ audioStart }}</span>
        &nbsp;/&nbsp;
        <span class="audio_total">{{ durationTime }}</span>
      </div>
    </div>
    <!-- 文字展示 -->
    <div v-if="!audioIsPlay && audioStart !== durationTime" class="wenzi">
      {{ auditText }}
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/index.vue"
import { ref, onMounted } from "vue"
const props = defineProps({
  fileurl: { type: String, default: "" },
  auditText: { type: String, default: "" }
})
const audioIsPlay = ref(true) //音频是否在播放
const audioStart = ref("0:00")
const durationTime = ref("0:00") //音频的总时长，显示的时间格式
const duration = ref(0) //音频的总时长
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
// watch(
//   () => props.fileurl,
//   () => {
//     calculateDuration()
//   },
//   {
//     deep: true
//   }
// )
//调整播放进度
// const handleProgressChange = (val) => {
//   if (!val) {
//     return
//   }
//   audioRef.value.pause()
//   let currentTime = duration.value * (val / 100)
//   // 更新音频的当前播放时间
//   audioRef.value.currentTime = currentTime
//   audioRef.value.play()
//   audioIsPlay.value = false
// }
// //调整音量
// const handleAudioVolume = (val) => {
//   audioRef.value.volume = val / 100
// }
</script>

<style lang="scss" scoped>
.audio_right_da {
  width: 100%;
  height: 100%;
  // @include Myflex();
}
.audio_right {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  @include Myflex();
  padding: 5px;
  .audio_icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    @include Myflex();
  }
  .audio_time {
    color: #f1f1f1;
    overflow: hidden;
    font-size: 12px;
    width: calc(100% - 34px);
    @include Myflex();
    height: 24px;
    font: normal normal 400 12px "PingFang SC";
    .audio_total {
      float: right;
    }
    .audio_current {
      float: left;
    }
  }
}

// 文字展示
.wenzi {
  padding: 6px 10px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 86px;
  // min-width: 500px;

  // display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 30px;
  border-radius: 100px;
  font: normal normal 400 12px "PingFang SC";
  color: white;
  // @include Myflex();
  background: linear-gradient(180deg, rgba(28, 0, 45, 0.2) 0%, rgba(24, 0, 30, 0.2) 0.01%, rgba(0, 9, 54, 0.2) 100%);
}
// 文字展示end
</style>
<!-- <style scoped lang="scss">
.volume .volume_bar {
  background-color: #383b6d;
  // height: ;
}
:deep(.el-slider__bar) {
  background-color: saddlebrown !important;
}
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
// .slider_box {
//   .el-slider__button-wrapper {
//     width: 8px;
//   }
// }
.volume_bar {
  .el-slider__runway {
    margin: 0 14px !important;
  }
}
</style> -->
