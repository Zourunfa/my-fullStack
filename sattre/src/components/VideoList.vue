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
};
</script>

<style></style>
