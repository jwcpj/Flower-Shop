<template>
  <div id="settlement">
    <HomeHeader></HomeHeader>
    <div class="js">
      <h1>恭喜您以完成商品结算</h1>
      <div class="bu">
        <img src="@/assets/image/cart.png" alt="" />
        <span><router-link to="/">返回首页</router-link></span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";

export default {
  name: "settlement",
  components: {
    HomeHeader,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    toTarget() {
      this.$router.push({
        name: "/",
      });
    },
  },
};
</script>

<style scoped>
.js {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.js h1 {
  color: #e47655;
}
.bu {
  display: block;
  position: relative;
  margin: 50px 540px;
  width: 200px;
  height: 50px;
  background-color: rgb(243, 217, 208);
  border: 0;
  border-radius: 30px;
  outline: none;
}
.bu img {
  position: absolute;
  top: 15px;
  left: 23px;
  width: 20px;
  height: 20px;
}
.bu span {
  position: absolute;
  top: 10px;
  left: 52%;
  transform: translate(-50%);
  color: rgb(218, 137, 51);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
</style>
