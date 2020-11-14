<!--
 * @Author: your name
 * @Date: 2020-11-13 13:50:35
 * @LastEditTime: 2020-11-14 10:47:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\view\Home\index.vue
-->
<template>
  <div class="home">
    <input type="text" v-model="user.username" />
    <input type="text" v-model="user.password" />
    <button @click="Login">登录</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    Login() {
      axios({
        method: "post",
        url: "/api/admin/login",
        data: this.user
      }).then(res => {
        alert(res.data.msg);
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.data.token);
          this.$router.push("/layout/list");
        }
      });
    }
  }
};
</script>

<style></style>
