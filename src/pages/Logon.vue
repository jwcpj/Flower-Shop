<template>
  <div class="main">
    <HomeHeader></HomeHeader>
    <div class="login">
      <div class="login_content">
        <p>
          <span>欢迎注册鲜花网</span
          ><router-link to="login"><b>已有账号？</b>快速登录</router-link>
        </p>
        <dl>
          <dt>用户名/邮箱/手机号</dt>
          <dd>
            <input type="text" />
          </dd>
          <dt>密码</dt>
          <dd>
            <input type="password" id="pwd-type" />
            <span id="pwd-icon" class="iconfont icon-yincangmima"></span>
          </dd>
        </dl>
        <button type="submit">注 册</button>
        <div class="pw"><a href="#">忘记密码</a></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";

export default {
  name: "Login",
  components: {
    HomeHeader,
    Footer,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 30vw;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
}
.login {
  width: 100%;
  height: 25vw;
  margin: 42px auto;
  display: flex;
  justify-content: space-between;
  background-image: url(@/assets/img/banner2.jpg);
}
.login .login_content {
  margin-top: 3vw;
  margin-left: 10vw;
  background-color: #fff;
  padding: 36px;
  height: 18vw;
  box-sizing: border-box;
  border: 1px solid #ddd;
  box-shadow: 0 0 15px rgba(204, 204, 204, 0.3);
}
.login .login_content p {
  display: flex;
  justify-content: space-between;
}
.login .login_content p span {
  color: #ff7b57;
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
  background: #ff7b57;
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
