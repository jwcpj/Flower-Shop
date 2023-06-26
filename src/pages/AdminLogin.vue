<template>
  <div class="main">
    <HomeHeader></HomeHeader>
    <div class="login">
      <div class="login_content">
        <p>
          <span>欢迎登录鲜花网</span>
          <router-link to="/adminregist"><b>还没有账号？</b>管理员秒注册</router-link>
        </p>
        <dl>
          <dt>用户名</dt>
          <dd>
            <input type="text" v-model="userInfo.username" value="username" />
          </dd>
          <dt>密码</dt>
          <dd>
            <input
              type="password"
              id="pwd-type"
              v-model="userInfo.password"
              value="password"
            />
          </dd>
        </dl>
        <button type="submit" @click="submit()">登 录</button>
        <router-link to="/login">用户登录</router-link>
      </div>
    </div>in
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";
import { loginUser } from "@/api";
export default {
  name: "AdminLogin",
  components: {
    HomeHeader,
    Footer,
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      let res = await loginUser(this.userInfo);
      let user = res.code;
      console.log(res.data);
      console.log(user);
         localStorage.setItem("token",res.msg)
      if (user == "10000") {
        localStorage.setItem("user", JSON.stringify(user));
      }
      if (res.code == "10000") {
        this.$router.push({
          name: "adminhome",
        });
      } else {
        alert(res.msg + "请重新登录！");
      }
    },
  },
};
</script>

<style scoped>
.main {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
}
.login {
  width: 100%;
  margin: 42px auto;
  display: flex;
  justify-content: space-between;
  background-image: url(@/assets/img/banner_elder.png);
}
.login .login_content {
  margin-top: 3vw;
  margin-left: 10vw;
  background-color: #fff;
  padding: 36px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5%;
  box-shadow: 0 0 15px rgba(204, 204, 204, 0.3);
}
.login .login_content p {
  display: flex;
  justify-content: space-between;
}
.login .login_content p span {
  color: rgb(241, 11, 61);
}
.login .login_content dl dt {
  padding: 15px 0 8px;
}
.login .login_content dl dd {
  position: relative;
}
.login .login_content dl dd input {
  width: 100%;
  height: 35px;
  border: 1px solid #d8d8d8;
  text-indent: 10px;
  transition: all 0.3s;
  outline: none;
}

.login .login_content dl dd input:focus {
  border: 1px solid #ff7b57;
}
.login .login_content dd span {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.login .login_content button {
  cursor: pointer;
  width: 100%;
  height: 34px;
  margin: 15px 0;
  background: #fd808e;
  text-align: center;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
}

.login_content a {
  font-size: 12px;
  margin-left: 10px;
  line-height: 22px;
}
</style>
