<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <div class="center">
      <div class="banner">
        <el-carousel indicator-position="outside" height="26vw">
          <el-carousel-item v-for="item in bannerImg" :key="item.src">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bg1 container">
      <div class="content">
        <div class="content_title">
          爱情鲜花
          <span> | 许 · 她一生承诺</span>
        </div>
        <div class=".content_img">
          <div class="content_left">
            <img :src="this.aa[0].product_img" alt="" />
          </div>
          <div class="content_right">
            <div
              class="card"
              @click="toTarget(item.product_name)"
              v-for="item in aa"
              :key="item.product_id"
              v-show="item.product_type == '爱情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">已售 {{ item.sale }} 件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="qinqing container">
      <div class="content">
        <div class="content_title">
          亲情鲜花
          <span> | 许 · 她一生承诺</span>
        </div>
        <div class=".content_img">
          <div class="content_left">
            <img :src="this.aa[0].product_img" alt="" />
          </div>
          <div class="content_right">
            <div
              class="card"
              v-for="item in aa"
              :key="item.product_id"
              @click="toTarget(item.product_name)"
              v-show="item.product_type == '亲情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">已售 {{ item.sale }} 件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="yq container">
      <div class="content">
        <div class="content_title">
          友情鲜花
          <span> | 许 · 她一生承诺</span>
        </div>
        <div class=".content_img">
          <div class="content_left">
            <img :src="this.aa[0].product_img" alt="" />
          </div>
          <div class="content_right">
            <div
              class="card"
              @click="toTarget(item.product_name)"
              v-for="item in aa"
              :key="item.product_id"
              v-show="item.product_type == '友情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">已售 {{ item.sale }} 件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import store from "@/store";
import Footer from "@/components/Front/Footer.vue";
import banner1 from "@/assets/img/banner_lover.png";
import banner2 from "@/assets/img/banner_elder.png";
import banner3 from "@/assets/img/banner_friend.png";
import banner4 from "@/assets/img/banner_male.png";
import { productList } from "@/api";
import { yqList } from "@/api";
export default {
  data() {
    return {
      bannerImg: [
        {
          src: banner1,
        },
        {
          src: banner2,
        },
        {
          src: banner3,
        },
        {
          src: banner4,
        },
      ],
      itemIndex: 0,
      use: true,
      kind: false,
      news: false,
      aa: "",
      yq1: "",
    };
  },
  components: { HomeHeader, Footer },
  created() {
    this.cc();
  },
  methods: {
    async cc() {
      let res = await productList();
      this.aa = res.data;
      console.log(this.aa);
    },
    async toTarget(name) {
      const info = { product_name: name };
      console.log(info);
      let res = await yqList(info);
      const msg = res.data;
      // console.log(msg);
      this.$router.push({
        name: "details",
        query: {
          info1: JSON.stringify(msg),
        },
      });
    },

    show(index) {
      console.log(JSON.parse(JSON.stringify(this.details[0].m1)));
      this.itemIndex = index;
      if (index == 0) {
        this.use = true;
        this.kind = false;
        this.news = false;
      } else if (index == 1) {
        this.kind = true;
        this.use = false;
        this.news = false;
      } else if (index == 2) {
        this.news = true;
        this.kind = false;
        this.use = false;
      }
    },
  },
};
</script>

<style scoped>
.categoryNav ul {
  display: flex;
  height: 50px;
  list-style: none;
}

.current {
  background-color: rgb(241, 11, 61);
  transition: all 0.3s;
}

.categoryNav ul li {
  cursor: pointer;
  padding: 0 30px;
  line-height: 50px;
  display: inline-block;
  height: 50px;
  text-decoration: none;
  color: rgb(248, 248, 248);
  transition: all 0.3s;
}

.categoryNav {
  background-color: #fd808e;
}
.center {
  position: relative;
}
.category {
  position: absolute;
  top: 0;
  left: 5px;
  width: 19%;
  height: 94%;
  background-color: #7b7b79;
  opacity: 0.6;
  z-index: 999;
}
.category ul {
  list-style: none;
}
.category ul li {
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  font-size: 16px;
  color: rgb(248, 248, 248);
  transition: all 0.3s;
}
.category ul li:hover {
  background-color: rgb(241, 11, 61);
}
.el-carousel__indicators {
  position: absolute;
  left: 0;
  top: 0;
}

.content {
  margin: 15px 0;
}

.content_title {
  position: relative;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #fd808e;
  margin-bottom: 16px;
}

.content_title span {
  margin-left: 10px;
  font-weight: 400;
  font-size: 20px;
  color: rgb(241, 11, 61);
}
.content_title a {
  position: absolute;
  top: 6px;
  right: 20px;
  font-size: 20px;
  font-weight: 400;
  color: rgb(241, 11, 61);
}
.content_left {
  float: left;
  /* margin-top: 50px; */
  width: 30%;
  height: 600px;
}

.content_left img {
  width: 100%;
  height: 100%;
}

.content_right {
  float: right;
  /* flex-direction: row;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
  width: 69%;
  height: 100%;
}

.card {
  float: left;
  cursor: pointer;
  width: 22%;
  background-color: #fff;
  padding: 10px;
  /* margin-bottom: 5px; */
  text-align: center;
}

.card_title {
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
}
.bg1 {
  margin-bottom: 100px;
}
.qinqing {
  clear: both;
  margin-bottom: 100px;
}
.yq {
  clear: both;
}
.card_title2 {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.bg1 {
  background-color: #f7f9fa;
  padding: 20px 0;
  margin-bottom: 20px;
}

.card img {
  height: 230px;
}

.badge {
  display: inline-block;
  padding: 2px 10px;
  background-color: #f3dbd4;
  border: 1px solid #fd808e;
  border-radius: 50px;
  color: #fd808e;
  font-size: 13px;
}

.card_text {
  font-size: 13px;
  color: rgb(130, 127, 127);
}

.content_right .flex:first-child {
  margin-bottom: 16px;
}
</style>
