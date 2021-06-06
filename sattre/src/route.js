import VueRouter from 'vue-router';
import vue from 'vue';
import Login from './view/Loginview'
import Video from './view/Video'

vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/video',
      component: Video
    }
  ]
});

export default router;
