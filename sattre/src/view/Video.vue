<template>
  <div>
     <videoPlayer
     :options="playerOptions"
     id="video-player"
      class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
    />
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
export default {
  name: "Video",
  components: {
    videoPlayer
  },
  data() {
    return {
       playerOptions: {
          // videojs options
          // autoplay: true,
          loop: true, // 是否视频一结束就重新开始。
          muted: false,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          fluid:'16:9',
          sources: [{
            type: "video/mp4",
            src:
             "https://2021060612.oss-cn-hangzhou.aliyuncs.com/videos/VID_20201224_204738.mp4?Expires=1622974038&OSSAccessKeyId=TMP.3KgYjWJKdwxKKyb1ptLkRZZ1xf7P1a1nGBkP2cnGDQmQDGkgtHGsJRDzZVNzPYPvzhQjjqYc92PbtFVWfHayyxNAWQAANE&Signature=wodvQWMYFfdRde2ud0jMAkTzPtQ%3D"
          }],
          poster: "",
        },
        controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
    }
  },
};
</script>

<style>
    #video-player{
    position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     margin:auto;
    height: 80%;
    width: 80%;
    display: block;

  }
   .video-js .vjs-big-play-button {
     /* display: none; */
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     margin:auto;

	}

</style>
