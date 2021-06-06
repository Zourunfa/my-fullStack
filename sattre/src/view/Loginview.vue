<template>
  <div class="login">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-default" @click.prevent="login">Submit</button>
    </form>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import router from '../route.js'
import axios from "axios"
export default {
  name: "Loginview",
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    async login(){
      const  res = await axios.post('/api/user/login',{
        username:this.username,
        password:this.password
      })
      console.log(res.data);
     if(res.data.errno == 0){
       router.push("./video")
       return 
     }
     alert('登录失败')
    }
  },
};
</script>

<style>

  .login{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>
