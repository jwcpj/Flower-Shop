<template>
  <div id="top">
    <div class="top_nav">
      <div class="container flex">
        <span class="welcome"> 鲜花礼品网 欢迎您 </span>
        <router-link to="/" class="order">首页</router-link>
        <router-link to="/order" class="order">我的订单</router-link>
        <span>鲜花网 为您提供优质购物体验</span>
      </div>
    </div>
    <div class="container">
      <div class="logo_line flex">
        <router-link to="/" class="logo"></router-link>
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
.top_nav {
  height: 40px;
  background-color: #fd808e;
  transform: translateY(-4px);
  line-height: 40px;
  font-size: 14px;
  color: white;
}
.login,
.register {
  color: rgba(0, 110, 255, 0.501);
}
.order {
  color: white;
}
.logo {
  height: 100%;
  width: 100px;
  background: url("@/assets/img/logo.png") no-repeat;
}
.logo_line {
  height: 50px;
  margin: 30px 0;
}

.home_input {
  position: relative;
  width: 600px;
  height: 40px;
  border: 1px solid #fd808e;
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
  background-color: #fd808e;
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
  font-size: 20px;
  line-height: 42px;
  background-color: #fd808e;
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
  background-color: #fd808e;
}
</style>
