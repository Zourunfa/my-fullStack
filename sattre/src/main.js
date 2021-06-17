import Vue from "vue";
import App from "./App.vue";
import router from "./route.js"
import VueParticles from 'vue-particles'
// import VueMsg from 'vue-msg-start-kn'
import VueMsg from 'plugin-afbzd-msg'


Vue.use(VueParticles)
Vue.use(VueMsg)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
