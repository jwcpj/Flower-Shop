<template>
  <div id="top">
    <img src="@/assets/img/top.png" alt="" />
    <div class="top_nav">
      <div class="container flex">
        <span> 鲜花礼品网:国内领先鲜花网品牌 </span>
        <div class="denglu">
          你好，
          <router-link to="/login">请登录</router-link>
          &emsp;
          <router-link to="/logon">注册</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="logo_line flex">
        <div class="logo">
          <img src="@/assets/img/105.jpeg" alt="" />
        </div>
        <div class="home_input">
          <input type="text" />
          <button class="search_button">搜索</button>
        </div>
        <div class="gouwu" @click="toTarget">
          <i class="el-icon-shopping-cart-full"></i>
          <span>购物车</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <nav>
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/">新品抢先</router-link>
            </li>
            <li>
              <router-link to="/">年货节专场</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  methods: {
    toTarget() {
      this.$router.push("/shopping-cart");
    },
  },
};
</script>

<style scoped>
.logo {
  height: 100%;
}

.logo img {
  height: 100%;
}

.logo_line {
  height: 200px;
}

.home_input {
  position: relative;
  width: 600px;
  margin-top: 80px;
  height: 40px;
  border: 1px solid #ff481e;
  border-radius: 8px;
}

.home_input input {
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  text-indent: 6px;
  font-size: 12px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 15px;
  text-indent: 8px;
}

.home_input button {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
  height: 100%;
  background-color: #ff481e;
  color: white;
  text-align: center;
  outline: none;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 17px;
}

.gouwu {
  cursor: pointer;
  height: 40px;
  margin-top: 80px;
  font-size: 20px;
  line-height: 42px;
  background-color: #ff481e;
  padding: 0 32px;
  color: white;
  border-radius: 4px;
}

.gouwu span {
  display: inline-block;
  margin-left: 8px;
  font-size: 16px;
  transform: translateY(-2px);
}

.gouwu:hover {
  background-color: #ef5634;
}

.nav ul {
  display: flex;
}

.nav ul li {
  cursor: pointer;
  list-style: none;
  background-color: #ef5634;
  transition: all 0.3s;
}

.nav ul li:hover {
  background-color: #ec7358;
}

.nav ul li a {
  padding: 0 30px;
  line-height: 50px;
  display: inline-block;
  height: 50px;
  text-decoration: none;
  color: rgb(248, 248, 248);
  transition: all 0.3s;
}

.nav {
  background-color: #ef5634;
}

.top_nav {
  height: 30px;
  background-color: #e3e3e3;
  transform: translateY(-4px);
  line-height: 30px;
  font-size: 12px;
  color: rgb(148, 148, 148);
}
</style>
