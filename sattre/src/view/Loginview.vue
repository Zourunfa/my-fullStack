<template>
  <div class="login">
    <form>
      <h2 class="title">Login</h2>
      <div class="form-group form-group-lg">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="username"
          v-model="username"
        />
      </div>
      <div class="form-group form-group-lg">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="login">
        Submit
      </button>
    </form>
    <vue-msg ref="msg"></vue-msg>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import router from '../route.js';
import axios from 'axios';
export default {
  name: 'Loginview',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  // component: {
  //   VueMsg,
  // },
  methods: {
    async login() {
      const res = await axios.post('/api/user/login', {
        username: this.username,
        password: this.password,
      });
      console.log(res.data);
      if (res.data.errno == 0) {
        // this.$refs.msg.msgPlugin('登录成功');

        this.$nextTick(() => {
          this.$refs.msg.msgPlugin('请输入电话号码', 5000);
        });

        router.push('./video');
        return;
      }
      alert('登录失败');
    },
  },
};
</script>

<style>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.btn {
  position: absolute;
  left: 50%;
  margin-left: -35px;
}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>
