<template>
  <div id="app">
    <router-link to="./login"></router-link>
    <router-link to="./video"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: "App",
  components: {

  },
  
  
};
</script>

<style>
   html,body,#app{
    height: 100%;
  }

  
</style>
