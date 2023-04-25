<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <div class="categoryNav container">
      <ul>
        <li
          v-for="(item, index) in category"
          :key="item.key"
          :class="{ current: itemIndex == index }"
          @click="show(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="center">
      <div class="category">
        <div class="item">
          <ul>
            <li
              v-for="item in category[0].useList"
              :key="item.id"
              v-show="use == true"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li
              v-for="item in category[1].kinds"
              :key="item.id"
              v-show="kind == true"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="item">
          <ul>
            <li
              v-for="item in category[2].new"
              :key="item.id"
              v-show="news == true"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <el-carousel indicator-position="outside" height="26vw">
          <el-carousel-item v-for="item in bannerImg" :key="item.src">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="bg1">
      <div class="container">
        <div class="content">
          <div class="content_title">
            爱情鲜花
            <span> | 许 · 她一生承诺</span>
          </div>
          <div class="flex .content_img">
            <div class="content_left">
              <img src="@/assets/image/玫瑰1.1.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="toTarget">
                  <img src="@/assets/image/玫瑰1.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰.满天星</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥199</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰2.jpeg" alt="" />
                  <div class="card_title">爱情.浪漫红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥330</div>
                  <div class="card_text">已售 999 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰3.jpeg" alt="" />
                  <div class="card_title">爱情.白玫瑰.红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 440 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰4.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰.百合</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥440</div>
                  <div class="card_text">已售 428 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/image/玫瑰5.jpeg" alt="" />
                  <div class="card_title">爱情.热情向日葵</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰6.jpeg" alt="" />
                  <div class="card_title">爱情.蓝白色渐变玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">560</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰7.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/玫瑰8.jpeg" alt="" />
                  <div class="card_title">爱情.粉玫瑰.特别的关怀</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">￥550</div>
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
            送长辈鲜花
            <span> | 赠 · 父母/恩师/长辈</span>
          </div>
          <div class="flex">
            <div class="content_left">
              <img src="@/assets/image/亲情2.2.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card">
                  <img src="@/assets/image/亲情1.jpeg" alt="" />
                  <div class="card_title">亲情.红色绣球花</div>
                  <div class="card_title2">￥230</div>
                  <div class="card_text">已售 468 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情2.1.jpeg" alt="" />
                  <div class="card_title">亲情.粉色绣球.粉玫瑰</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 48 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情3.jpeg" alt="" />
                  <div class="card_title">亲情.黄玫瑰.向日葵</div>
                  <div class="card_title2">￥370</div>
                  <div class="card_text">已售 4280件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情4.jpeg" alt="" />
                  <div class="card_title">亲情.向日葵</div>
                  <div class="card_title2">￥378</div>
                  <div class="card_text">已售 4285 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/image/亲情5.jpeg" alt="" />
                  <div class="card_title">亲情.绣球</div>
                  <div class="card_title2">￥380</div>
                  <div class="card_text">已售 488 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情6.jpeg" alt="" />
                  <div class="card_title">亲情.绣球.粉玫瑰</div>
                  <div class="card_title2">￥390</div>
                  <div class="card_text">已售 425 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情7.jpeg" alt="" />
                  <div class="card_title">亲情.绣球.满天星</div>
                  <div class="card_title2">￥390</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/亲情8.jpeg" alt="" />
                  <div class="card_title">亲情.玫瑰</div>
                  <div class="card_title2">￥460</div>
                  <div class="card_text">已售 4287 件</div>
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
              <img src="@/assets/image/友情5.1.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="toTarget">
                  <img src="@/assets/image/友情1.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">￥440</div>
                  <div class="card_text">已售 564 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情2.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">￥160</div>
                  <div class="card_text">已售 4678 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情3.jpeg" alt="" />
                  <div class="card_title">友情.向日葵.玫瑰</div>
                  <div class="card_title2">￥350</div>
                  <div class="card_text">已售 498 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情4.jpeg" alt="" />
                  <div class="card_title">友情.百合.玫瑰</div>
                  <div class="card_title2">￥180</div>
                  <div class="card_text">已售 4278 件</div>
                </div>
              </div>
              <div class="flex">
                <div class="card">
                  <img src="@/assets/image/友情5.jpeg" alt="" />
                  <div class="card_title">友情.绣球.向日葵</div>
                  <div class="card_title2">￥260</div>
                  <div class="card_text">已售 528 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情6.jpeg" alt="" />
                  <div class="card_title">友情.满天星</div>
                  <div class="card_title2">￥380</div>
                  <div class="card_text">已售 498 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情7.jpeg" alt="" />
                  <div class="card_title">友情.玫瑰</div>
                  <div class="card_title2">￥360</div>
                  <div class="card_text">已售 428 件</div>
                </div>
                <div class="card">
                  <img src="@/assets/image/友情8.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">￥443</div>
                  <div class="card_text">已售 5628 件</div>
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
import banner1 from "@/assets/img/banner_lover.png";
import banner2 from "@/assets/img/banner_elder.png";
import banner3 from "@/assets/img/banner_friend.png";
import banner4 from "@/assets/img/banner_male.png";
import meigui1_1 from "@/assets/image/玫瑰1.jpeg"
import meigui1_2 from "@/assets/image/玫瑰1.1.jpeg"
import meigui1_3 from "@/assets/image/玫瑰1.2.jpeg"
import meigui1_4 from "@/assets/image/玫瑰1.3.jpeg"
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
      category: [
        {
          name: "鲜花用途",
          key: "1",
          useList: [
            { name: "送恋人：甜蜜浪漫，一生一世", id: "01" },
            { name: "送长辈：平安健康，福气东来", id: "02" },
            { name: "送朋友：", id: "03" },
            { name: "送闺蜜", id: "04" },
          ],
        },
        {
          name: "鲜花种类",
          key: "2",
          kinds: [
            { name: "红玫瑰：热恋、热情、热爱着你", id: "01" },
            { name: "粉玫瑰：初恋、求爱、特别的关怀", id: "02" },
            { name: "向日葵：沉默、没有说出口的爱", id: "03" },
            { name: "康乃馨：真情、温馨的祝福", id: "04" },
            { name: "满天星：思念、青春、梦境、真心", id: "05" },
          ],
        },
        {
          name: "新品上线",
          key: "3",
          new: [
            { name: "浪漫如你粉玫瑰", id: "01" },
            { name: "青春如你满天星", id: "02" },
            { name: "真情如你黄玫瑰", id: "03" },
            { name: "阳光如你向日葵", id: "04" },
          ],
        },
      ],
      rosy: [
        {
          meigui1: [
        {
          src: meigui1_1,
        },
        {
          src: meigui1_2,
        },
        {
          src: meigui1_3,
        },
        {
          src: meigui1_4,
        },
        ]
        }
      ],
      itemIndex: 0,
      use: true,
      kind: false,
      news: false,
    };
  },
  components: { HomeHeader, Footer },
  methods: {
    toTarget() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui1)
        }
      });
    },
    show(index) {
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
  /* margin-top: 50px; */
  width: 30%;
  height: 600px;
}

.content_left img {
  width: 100%;
  height: 100%;
}

.content_right {
  width: 74%;
  height: 100%;
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
