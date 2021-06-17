<template>
  <div class="video-list">
    <div class="box">
      <!-- <Video :url="data.url" /> -->
    </div>
    <div class="box">
      <!-- <Video :url="data.url" /> -->
    </div>
    <div class="box">
      <!-- <Video :url="data.url" /> -->
    </div>
    <div class="box">
      <!-- <Video :url="data.url" /> -->
    </div>
  </div>
</template>

<script>
import Video from '../view/Video.vue';
import { urls } from '../virtualData.js';
export default {
  name: 'App',
  components: {
    Video,
  },
};
</script>

<style>
.box {
  height: 200px;
  width: 400px;
  background-color: skyblue;
}
</style>
