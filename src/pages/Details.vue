<template>
  <div id="Detail">
    <HomeHeader />
    <div class="product">
      <div class="product_info">
        <div class="img_left">
          <div class="top">
            <img :src="this.info.product_img" alt="" />
          </div>
        </div>
        <div class="info">
          <div class="bt">{{ this.info.product_name }}</div>
          <div class="bt1">
            <span>{{ this.info.product_type }} </span>
          </div>
          <div class="price">
            <div class="sj">
              售价
              <span>￥{{ this.info.price }}</span>
            </div>
            <div class="ys">
              已售 <span>{{ this.info.sale }}</span
              >件
            </div>
          </div>
          <div class="hy">
            花语
            <span>{{ this.info.hy }}</span>
          </div>
          <div class="hy">
            材料
            <span>{{ this.info.cl }}</span>
          </div>
          <div class="bu">
            <img src="@/assets/image/cart.png" alt="" />
            <span @click="toCart()">加入购物车</span>
          </div>
          <div class="bu">
            <img src="@/assets/image/cart.png" alt="" />
            <span @click="toOrder">立即购买</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品 End -->
    <Footer />
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";
import { addCart } from "@/api";
export default {
  name: "Detail",
  components: {
    HomeHeader,
    Footer,
  },
  data() {
    return {
      info: JSON.parse(this.$route.query.info1),
      itemIndex: 0,
    };
  },
  methods: {
    toOrder() {
      console.log(this.info);
      this.$router.push("/settlement");
    },
    async toCart() {
      let res = await addCart(this.info);
      console.log(res);
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
}
.product_info .img_left {
  float: left;
  width: 40%;
}

.product_info .img_left .top {
  width: 100%;
  height: 600px;
}
.top img {
  width: 100%;
  height: 100%;
}
.current {
  outline: 5px #fff;
  box-shadow: 3px 3px #ccc;
}
.product_info .img_left .bottom {
  height: 200px;
}
.product_info .img_left .bottom ul {
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
}
.bottom ul li {
  width: 20%;
}
.bottom ul li img {
  width: 100%;
  height: 130px;
}
.product_info .info {
  margin-left: 50px;
  float: left;
  width: 50%;
}
.info .bt {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
.info .bt1 {
  font-size: 18px;
  margin-bottom: 20px;
}
.bt1 span {
  color: orange;
}
.info .price {
  background-color: #ccc;
  opacity: 0.7;
}
.sj {
  font-size: 16px;
  padding: 15px 20px;
}
.sj span {
  font-size: 30px;
  font-weight: 700;
  color: red;
  margin: 0 20px;
}
.ys {
  font-size: 16px;
  padding: 15px 20px;
}
.ys span {
  font-weight: 700;
  color: orangered;
  margin: 0 10px;
}
.hy {
  color: #887777;
  font-size: 16px;
  padding: 10px 0;
}
.hy span {
  color: #564b4b;
  margin-left: 20px;
}
.bu {
  display: block;
  float: left;
  position: relative;
  width: 200px;
  height: 50px;
  background-color: rgb(243, 217, 208);
  border: 0;
  border-radius: 30px;
  margin: 20px 25px;
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
  left: 50%;
  transform: translate(-50%);
  color: rgb(218, 137, 51);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.img_info {
  clear: both;
  width: 100%;
  margin-top: 40px;
}
.xq {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  font-weight: 700;
  padding-left: 30px;
  background-color: #e9e6e6;
  margin-bottom: 20px;
}
.img_info .img_left {
  float: left;
  width: 20%;
  margin-left: 20px;
  margin-right: 100px;
}
.left img {
  margin-bottom: 10px;
  width: 100%;
}
.img_info .img_right {
  float: left;
  width: 60%;
}
.right img {
  margin-bottom: 10px;
  width: 100%;
}
</style>
