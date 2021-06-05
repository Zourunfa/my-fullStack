<template>
  <div id="app">
    <Loginview />
  </div>
</template>

<script>
import Loginview from "./view/Loginview.vue";

export default {
  name: "App",
  components: {
    Loginview,
  },
};
</script>

<style>
   html,body,#app{
    height: 100%;
  }
</style>
