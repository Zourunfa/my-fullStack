<template>
  <div id="app">
    <div class="main">
      <vue-particles
        :particleOpacity="2.0"
        :particlesNumber="200"
        :particleSize="6"
        :linesWidth="2"
        color="#81ecec"
        class="bgc"
      >
      </vue-particles>

      <router-link to="./login"></router-link>

      <router-link to="./home"></router-link>
      <router-link to="./video"></router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

.bgc {
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
}

.main {
  height: 100%;
  width: 100%;
  /* text-align: center; */
}
</style>
