<template>
  <div class="video-list">
    <div v-for="data in urls" :key="data.id">
      <Video :url="data.url" />
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
  data() {
    return {
      urls: urls,
    };
  },
};
</script>

<style>
.video-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.box {
  height: 100px;
  width: 400px;
  background-color: skyblue;
}

.video-box {
  width: 800px;
  height: 400px;
}
</style>
