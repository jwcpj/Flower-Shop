<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <div class="banner">
      <el-carousel indicator-position="outside" height="26vw">
        <el-carousel-item v-for="item in bannerImg" :key="item.src">
          <img :src="item.src" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bg1">
      <div class="container">
        <div class="content">
          <div class="content_title">
            爱情鲜花
            <span> | 许 · 她一生承诺</span>
          </div>
          <div class="flex">
            <div class="content_left">
              <img src="@/assets/img/l3.jpg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="toTarget">
                  <img src="@/assets/img/1.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/2.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/3.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/4.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/img/5.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/6.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/7.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/8.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg2">
      <div class="container">
        <div class="content">
          <div class="content_title">
            送长辈鲜花
            <span> | 赠 · 父母/恩师/长辈</span>
          </div>
          <div class="flex">
            <div class="content_left">
              <img src="@/assets/img/l2.jpg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card">
                  <img src="@/assets/img/19.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/20.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/21.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/22.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/img/23.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/24.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/25.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/26.jpeg" alt="" />
                  <div class="card_title">爱情·亲爱的/情人节</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg1">
      <div class="container">
        <div class="content">
          <div class="content_title">
            友情鲜花
            <span> | 送·让你怦然心动的人</span>
          </div>
          <div class="flex">
            <div class="content_left">
              <img src="@/assets/img/l1.jpg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="toTarget">
                  <img src="@/assets/img/35.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/34.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/33.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/32.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/img/31.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/30.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/28.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/img/29.jpeg" alt="" />
                  <div class="card_title">花好月圆永生花</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
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
import Footer from "@/components/Front/Footer.vue";
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";

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
      ],
    };
  },
  components: { HomeHeader,Footer },
  methods: {
    toTarget() {
      this.$router.push("/details");
    },
  },
};
</script>

<style scoped>
.el-carousel__indicators {
  position: absolute;
  left: 0;
  top: 0;
}

.content {
  margin: 60px 0;
}

.content_title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 16px;
}

.content_title span {
  margin-left: 10px;
  font-weight: 400;
  font-size: 20px;
  color: rgb(121, 121, 121);
}

.content_left {
  width: 24%;
}

.content_left img {
  height: 100%;
}

.content_right {
  width: 74%;
}

.card {
  cursor: pointer;
  width: 22%;
  background-color: #fff;
  padding: 8px;
  text-align: center;
}

.card_title {
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
}

.card_title2 {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.bg1 {
  background-color: #f7f9fa;
  padding: 40px 0;
}

.card img {
  height: 230px;
}

.badge {
  display: inline-block;
  padding: 2px 10px;
  background-color: #f3dbd4;
  border: 1px solid #ff7b57;
  border-radius: 50px;
  color: #ff7b57;
  font-size: 13px;
}

.card_text {
  font-size: 13px;
  color: rgb(130, 127, 127);
}

.content_right .flex:first-child {
  margin-bottom: 16px;
}

.bg2 {
  background-color: #e9ecf0;
  padding: 40px 0;
}
</style>
