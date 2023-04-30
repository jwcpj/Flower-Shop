<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <!-- <div class="categoryNav container">
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
    </div> -->
    <div class="center">
      <!-- <div class="category">
        <div class="item">
          <ul>
            <li
              v-for="item in category.useList"
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
      </div> -->
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
            <div class="content_left" @click="toTarget">
              <img src="@/assets/image/玫瑰1.1.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="toTarget">
                  <img src="@/assets/image/玫瑰1.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰.满天星</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m1[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m1[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget1">
                  <img src="@/assets/image/玫瑰2.jpeg" alt="" />
                  <div class="card_title">爱情.浪漫红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m2[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m2[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget2">
                  <img src="@/assets/image/玫瑰3.jpeg" alt="" />
                  <div class="card_title">爱情.白玫瑰.红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m3[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m3[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget3">
                  <img src="@/assets/image/玫瑰4.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰.百合</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m4[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m4[0].sale }} 件
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="card" @click="toTarget4">
                  <img src="@/assets/image/玫瑰5.jpeg" alt="" />
                  <div class="card_title">爱情.热情向日葵</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m5[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m5[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget5">
                  <img src="@/assets/image/玫瑰6.jpeg" alt="" />
                  <div class="card_title">爱情.蓝白色渐变玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    {{ this.details[0].m6[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m6[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget6">
                  <img src="@/assets/image/玫瑰7.jpeg" alt="" />
                  <div class="card_title">爱情.红玫瑰</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m7[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m7[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="toTarget7">
                  <img src="@/assets/image/玫瑰8.jpeg" alt="" />
                  <div class="card_title">爱情.粉玫瑰.特别的关怀</div>
                  <div class="badge">情人节定制款</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].m8[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].m8[0].sale }} 件
                  </div>
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
            <div class="content_left" @click="qqtotarget2">
              <img src="@/assets/image/亲情2.2.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="qqtotarget1">
                  <img src="@/assets/image/亲情1.jpeg" alt="" />
                  <div class="card_title">亲情.红色绣球花</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q1[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q1[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget2">
                  <img src="@/assets/image/亲情2.1.jpeg" alt="" />
                  <div class="card_title">亲情.粉色绣球.粉玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q2[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q2[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget3">
                  <img src="@/assets/image/亲情3.jpeg" alt="" />
                  <div class="card_title">亲情.黄玫瑰.向日葵</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q3[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q3[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget4">
                  <img src="@/assets/image/亲情4.jpeg" alt="" />
                  <div class="card_title">亲情.向日葵</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q4[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q4[0].sale }} 件
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="card" @click="qqtotarget5">
                  <img src="@/assets/image/亲情5.jpeg" alt="" />
                  <div class="card_title">亲情.绣球</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q5[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q5[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget6">
                  <img src="@/assets/image/亲情6.jpeg" alt="" />
                  <div class="card_title">亲情.绣球.粉玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q6[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q6[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget7">
                  <img src="@/assets/image/亲情7.jpeg" alt="" />
                  <div class="card_title">亲情.绣球.满天星</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q7[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q7[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="qqtotarget8">
                  <img src="@/assets/image/亲情8.jpeg" alt="" />
                  <div class="card_title">亲情.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].q8[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].q8[0].sale }} 件
                  </div>
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
            <div class="content_left" @click="yqtotarget5">
              <img src="@/assets/image/友情5.1.jpeg" alt="" />
            </div>
            <div class="content_right">
              <div class="flex">
                <div class="card" @click="yqtotarget1">
                  <img src="@/assets/image/友情1.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y1[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y1[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget2">
                  <img src="@/assets/image/友情2.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y2[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y2[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget3">
                  <img src="@/assets/image/友情3.jpeg" alt="" />
                  <div class="card_title">友情.向日葵.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y3[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y3[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget4">
                  <img src="@/assets/image/友情4.jpeg" alt="" />
                  <div class="card_title">友情.百合.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y4[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y4[0].sale }} 件
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="card" @click="yqtotarget5">
                  <img src="@/assets/image/友情5.jpeg" alt="" />
                  <div class="card_title">友情.绣球.向日葵</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y5[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y5[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget6">
                  <img src="@/assets/image/友情6.jpeg" alt="" />
                  <div class="card_title">友情.满天星</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y6[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y6[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget7">
                  <img src="@/assets/image/友情7.jpeg" alt="" />
                  <div class="card_title">友情.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y7[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y7[0].sale }} 件
                  </div>
                </div>
                <div class="card" @click="yqtotarget8">
                  <img src="@/assets/image/友情8.jpeg" alt="" />
                  <div class="card_title">友情.绣球.玫瑰</div>
                  <div class="card_title2">
                    ￥{{ this.details[0].y8[0].price }}
                  </div>
                  <div class="card_text">
                    已售 {{ this.details[0].y8[0].sale }} 件
                  </div>
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
import meigui1_1 from "@/assets/image/玫瑰1.jpeg";
import meigui1_2 from "@/assets/image/玫瑰1.1.jpeg";
import meigui1_3 from "@/assets/image/玫瑰1.2.jpeg";
import meigui1_4 from "@/assets/image/玫瑰1.3.jpeg";
import meigui2_1 from "@/assets/image/玫瑰2.jpeg";
import meigui2_2 from "@/assets/image/玫瑰2.1.jpeg";
import meigui2_3 from "@/assets/image/玫瑰2.2.jpeg";
import meigui2_4 from "@/assets/image/玫瑰2.3.jpeg";
import meigui3_1 from "@/assets/image/玫瑰3.jpeg";
import meigui3_2 from "@/assets/image/玫瑰3.1.jpeg";
import meigui3_3 from "@/assets/image/玫瑰3.2.jpeg";
import meigui3_4 from "@/assets/image/玫瑰3.3.jpeg";
import meigui4_1 from "@/assets/image/玫瑰4.jpeg";
import meigui4_2 from "@/assets/image/玫瑰4.1.jpeg";
import meigui4_3 from "@/assets/image/玫瑰4.2.jpeg";
import meigui4_4 from "@/assets/image/玫瑰4.3.jpeg";
import meigui5_1 from "@/assets/image/玫瑰5.jpeg";
import meigui5_2 from "@/assets/image/玫瑰5.1.jpeg";
import meigui5_3 from "@/assets/image/玫瑰5.2.jpeg";
import meigui5_4 from "@/assets/image/玫瑰5.3.jpeg";
import meigui6_1 from "@/assets/image/玫瑰6.jpeg";
import meigui6_2 from "@/assets/image/玫瑰6.1.jpeg";
import meigui6_3 from "@/assets/image/玫瑰6.2.jpeg";
import meigui6_4 from "@/assets/image/玫瑰6.3.jpeg";
import meigui7_1 from "@/assets/image/玫瑰7.jpeg";
import meigui7_2 from "@/assets/image/玫瑰7.1.jpeg";
import meigui7_3 from "@/assets/image/玫瑰7.2.jpeg";
import meigui7_4 from "@/assets/image/玫瑰7.3.jpeg";
import meigui8_1 from "@/assets/image/玫瑰8.jpeg";
import meigui8_2 from "@/assets/image/玫瑰8.1.jpeg";
import meigui8_3 from "@/assets/image/玫瑰8.2.jpeg";
import meigui8_4 from "@/assets/image/玫瑰8.3.jpeg";
import qq1_1 from "@/assets/image/亲情1.jpeg";
import qq1_2 from "@/assets/image/亲情1.1.jpeg";
import qq1_3 from "@/assets/image/亲情1.2.jpeg";
import qq1_4 from "@/assets/image/亲情1.3.jpeg";
import qq2_1 from "@/assets/image/亲情2.4.jpeg";
import qq2_2 from "@/assets/image/亲情2.1.jpeg";
import qq2_3 from "@/assets/image/亲情2.2.jpeg";
import qq2_4 from "@/assets/image/亲情2.3.jpeg";
import qq3_1 from "@/assets/image/亲情3.jpeg";
import qq3_2 from "@/assets/image/亲情3.1.jpeg";
import qq3_3 from "@/assets/image/亲情3.2.jpeg";
import qq3_4 from "@/assets/image/亲情3.3.jpeg";
import qq4_1 from "@/assets/image/亲情4.jpeg";
import qq4_2 from "@/assets/image/亲情4.1.jpeg";
import qq4_3 from "@/assets/image/亲情4.2.jpeg";
import qq4_4 from "@/assets/image/亲情4.3.jpeg";
import qq5_1 from "@/assets/image/亲情5.jpeg";
import qq5_2 from "@/assets/image/亲情5.1.jpeg";
import qq5_3 from "@/assets/image/亲情5.2.jpeg";
import qq5_4 from "@/assets/image/亲情5.3.jpeg";
import qq6_1 from "@/assets/image/亲情6.jpeg";
import qq6_2 from "@/assets/image/亲情6.1.jpeg";
import qq6_3 from "@/assets/image/亲情6.2.jpeg";
import qq6_4 from "@/assets/image/亲情6.3.jpeg";
import qq7_1 from "@/assets/image/亲情7.jpeg";
import qq7_2 from "@/assets/image/亲情7.1.jpeg";
import qq7_3 from "@/assets/image/亲情7.2.jpeg";
import qq7_4 from "@/assets/image/亲情7.3.jpeg";
import qq8_1 from "@/assets/image/亲情8.jpeg";
import qq8_2 from "@/assets/image/亲情8.1.jpeg";
import qq8_3 from "@/assets/image/亲情8.2.jpeg";
import qq8_4 from "@/assets/image/亲情8.3.jpeg";
import yq1_1 from "@/assets/image/友情1.jpeg";
import yq1_2 from "@/assets/image/友情1.1.jpeg";
import yq1_3 from "@/assets/image/友情1.2.jpeg";
import yq1_4 from "@/assets/image/友情1.3.jpeg";
import yq2_1 from "@/assets/image/友情2.jpeg";
import yq2_2 from "@/assets/image/友情2.1.jpeg";
import yq2_3 from "@/assets/image/友情2.2.jpeg";
import yq2_4 from "@/assets/image/友情2.3.jpeg";
import yq3_1 from "@/assets/image/友情3.jpeg";
import yq3_2 from "@/assets/image/友情3.1.jpeg";
import yq3_3 from "@/assets/image/友情3.2.jpeg";
import yq3_4 from "@/assets/image/友情3.3.jpeg";
import yq4_1 from "@/assets/image/友情4.jpeg";
import yq4_2 from "@/assets/image/友情4.1.jpeg";
import yq4_3 from "@/assets/image/友情4.2.jpeg";
import yq4_4 from "@/assets/image/友情4.3.jpeg";
import yq5_1 from "@/assets/image/友情5.jpeg";
import yq5_2 from "@/assets/image/友情5.1.jpeg";
import yq5_3 from "@/assets/image/友情5.2.jpeg";
import yq5_4 from "@/assets/image/友情5.3.jpeg";
import yq6_1 from "@/assets/image/友情6.jpeg";
import yq6_2 from "@/assets/image/友情6.1.jpeg";
import yq6_3 from "@/assets/image/友情6.2.jpeg";
import yq6_4 from "@/assets/image/友情6.3.jpeg";
import yq7_1 from "@/assets/image/友情7.jpeg";
import yq7_2 from "@/assets/image/友情7.1.jpeg";
import yq7_3 from "@/assets/image/友情7.2.jpeg";
import yq7_4 from "@/assets/image/友情7.3.jpeg";
import yq8_1 from "@/assets/image/友情8.jpeg";
import yq8_2 from "@/assets/image/友情8.1.jpeg";
import yq8_3 from "@/assets/image/友情8.2.jpeg";
import yq8_4 from "@/assets/image/友情8.3.jpeg";
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
      details: [
        {
          m1: [
            {
              name: "你是唯一",
              summary: "[11枝热销 一心一意的爱] 卡罗拉红玫瑰11枝",
              price: 198,
              originPrice: 216,
              sale: 1436,
              hy: "人间蹉跎，你是唯一值得",
              material: "卡罗拉红玫瑰11枝、白色满天星3枝、尤加利10枝",
              Package: "红/金色鎏金纸5张、白色雪梨纸2张、酒红色罗纹烫金丝带2米",
            },
          ],
          m2: [
            {
              name: "深情挚爱/33枝",
              summary: "[2023热卖33枝红玫瑰] 卡罗拉玫瑰33枝",
              price: 329,
              originPrice: 459,
              sale: 9701,
              hy: "许你三生三世，可伴朝朝暮暮",
              material: "卡罗拉玫瑰33枝",
              Package:
                "红色风华纸3大张、 白色小号英文插画纸（You are my love）4张、白色雪梨纸1张、酒红色罗纹烫金丝带2米",
            },
          ],
          m3: [
            {
              name: "我心有你/限定款",
              summary: "[新品抱抱桶] 红玫瑰13枝、白玫瑰26枝",
              price: 429,
              originPrice: 558,
              sale: 144,
              hy: "天上有云，林间有雾，我心有你",
              material: "红玫瑰卡罗拉13枝搭配成心形；白玫瑰26枝围绕",
              Package:
                "贝斯特银色抱抱桶大号（20cm直径），白色烫金丝带蝴蝶结，鱼尾纱丝带蝴蝶结",
            },
          ],
          m4: [
            {
              name: "爱你/红玫瑰香水百合",
              summary:
                "[百合花开，幸福自来] 卡罗拉红玫瑰11枝、白色香水百合2枝、尤加利叶10枝",
              price: 216,
              originPrice: 298,
              sale: 1371,
              hy: "永远爱你，始终如一",
              material: "卡罗拉红玫瑰11枝、白色香水百合2枝、尤加利叶10枝",
              Package: "黑色雾面纸7张、白色雪梨纸2张、酒红色罗纹烫金丝带2米",
            },
          ],
          m5: [
            {
              name: "韩式系列/绽放",
              summary: "[暖阳系列新品] 向日葵+香槟玫瑰+多头玫瑰",
              price: 190,
              originPrice: 359,
              sale: 1571,
              hy: "元气满满，永远向着太阳",
              material: "香槟玫瑰3枝、向日葵3枝、橙色多头玫瑰2枝、尤加利叶5枝",
              Package:
                "蜜瓜/奶茶色欧雅纸4张、香槟色雪梨纸2张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          m6: [
            {
              name: "星辰大海/52枝",
              summary: "[密西根碎冰蓝，清新而高雅] 碎冰蓝玫瑰52枝",
              price: 499,
              originPrice: 599,
              sale: 2475,
              hy: "送给你的希望是星辰和大海",
              material:
                " 52枝碎冰蓝玫瑰（坦尼克白玫瑰，使用密西根碎冰蓝边缘喷淡蓝色工艺处理）",
              Package:
                "茵蓝/白 欧雅纸10张，密西根碎冰蓝37#喷漆（注意：只喷边缘淡蓝色），英文纸Pretty flowers studio，4张，牛奶棉白色3张，烫金罗纹缎带浅蓝色2米，鱼尾丝带白色1米",
            },
          ],
          m7: [
            {
              name: "元气满满",
              summary: "用希望迎接太阳，用笑声相伴时光",
              price: 589,
              originPrice: 599,
              sale: 245,
              hy: "送给你的希望是星辰和大海",
              material: "红色玫瑰卡罗拉15枝进口红橙色针垫2枝荷兰郁金香红色4枝",
              Package:
                "茵蓝/白 欧雅纸10张，密西根碎冰蓝37#喷漆（注意：只喷边缘淡蓝色），英文纸Pretty flowers studio，4张，牛奶棉白色3张，烫金罗纹缎带浅蓝色2米，鱼尾丝带白色1米",
            },
          ],
          m8: [
            {
              name: "百事合意/粉玫瑰香水百合plus",
              summary:
                "[百合花开，幸福自来] 戴安娜玫瑰19枝、白色香水百合2枝、尤加利叶10枝",
              price: 269,
              originPrice: 369,
              sale: 4595,
              hy: "百合花开，幸福自来，手执玫瑰，挚爱此生。",
              material: "戴安娜玫瑰19枝、白色香水百合2枝、尤加利叶10枝",
              Package:
                "嫣粉/玫粉色欧雅纸7张、白色雪梨纸2张、樱花粉色罗纹烫金丝带2米",
            },
          ],
          q1: [
            {
              name: "幸福快乐plus款/母亲节定制款",
              summary:
                "[热情尊敬，表达感激] 红色康乃馨19枝、3枝多头粉百合，10枝栀子叶",
              price: 298,
              originPrice: 370,
              sale: 455,
              hy: "愿世间所有的美好都与你息息相关",
              material: "红色康乃馨19枝、3枝多头粉百合，10枝栀子叶",
              Package:
                "英文纸Pretty flowers studio2张，杏色雪梨纸2张,嫣粉玫粉6张，红色烫金丝带蝴蝶结，白色鱼尾纱蝴蝶结",
            },
          ],
          q2: [
            {
              name: "韩式系列/温柔以待",
              summary:
                "[花艺师打造 韩式系列] 粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
              price: 275,
              originPrice: 378,
              sale: 472,
              hy: "温柔的人，都是人间宝藏",
              material:
                "韩式花束系列：粉色康乃馨13枝，戴安娜粉玫瑰5枝、3头以上粉色洋桔梗5枝、浅紫紫罗兰5枝（紫罗兰花期为12-4月，其他月份用浅紫色金鱼草/浅紫色桔梗/浅紫色风铃花等相似线状花材替代）、尤加利10枝",
              Package:
                "嫣粉/玫粉色欧雅纸8张、白色雪梨纸2大张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          q3: [
            {
              name: "真挚祝福",
              summary: "[暖阳系列] 红康乃馨33枝、香槟玫瑰9枝、向日葵3枝",
              price: 330,
              originPrice: 540,
              sale: 2698,
              hy: "一生中有很多祝福，最真挚的祝福送给你",
              material: "红色康乃馨33枝、香槟玫瑰9枝、向日葵3枝、尤加利叶5枝",
              Package:
                "红/金色鎏金纸6张、香槟色雪梨纸2张、酒红色罗纹烫金丝带2米",
            },
          ],
          q4: [
            {
              name: "韩式系列/一路向阳",
              summary:
                "[花艺师打造 韩式花束系列] 向日葵3枝、香槟玫瑰9枝、橙色多头玫5枝、黄色腊梅5枝、大叶尤加利5枝",
              price: 298,
              originPrice: 459,
              sale: 370,
              hy: "以秋色和暖阳为设计主题，打造全新韩式系列，在凛冽冬日，你的爱就像一束阳光，照进了我的心中！",
              material:
                "韩式花束系列：向日葵3枝、香槟玫瑰9枝、橙色多头玫5枝、黄色或橙色腊梅5枝、大叶尤加利5枝（腊梅花期为11-4月初，其他季节用跳舞兰或其他黄色线状花材代替）",
              Package:
                "姜黄色双面牛皮纸8张、白色雪梨纸1大张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          q5: [
            {
              name: "暖暖情意",
              summary: "[66枝粉康乃馨新款] 粉色康乃馨66枝、粉色多头康乃馨6枝",
              price: 366,
              originPrice: 596,
              sale: 660,
              hy: "无限的眷恋，来源于爱的温暖，只为能靠在您的臂弯，说声，谢谢",
              material: "粉色康乃馨66枝、粉色多头康乃馨6枝、栀子叶10枝",
              Package:
                "樱粉色雪梨纸3张、粉色雾面纸7张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          q6: [
            {
              name: "妈，辛苦啦",
              summary: "玫红色康乃馨16枝、粉色洋桔梗5枝、尤加利10枝",
              price: 229,
              originPrice: 309,
              sale: 1280,
              hy: "妈妈不是超人，却为我们变成万能",
              material: "玫红色康乃馨16枝、粉色洋桔梗5枝、尤加利10枝",
              Package:
                "豆蔻粉色牛津纸4张、樱粉色雪梨纸3张、粉色罗纹烫金丝带2米",
            },
          ],
          q7: [
            {
              name: "感恩密码",
              summary: "[全新升级款] 粉色康乃馨16枝、浅粉满天星3枝、尤加利10枝",
              price: 168,
              originPrice: 279,
              sale: 665,
              hy: "只有你最知道，那些成长中眼泪和欢笑，这些点点滴滴专属我们之间小密秘，变成我们一辈子的感恩密码。",
              material: "粉色康乃馨16枝、浅粉满天星3枝、尤加利10枝",
              Package:
                "嫣粉/玫粉色欧雅纸5张、樱粉色雪梨纸3张、粉色罗纹烫金丝带2米",
            },
          ],
          q8: [
            {
              name: "感恩密码",
              summary: "[全新升级款] 粉色康乃馨16枝、浅粉满天星3枝、尤加利10枝",
              price: 168,
              originPrice: 279,
              sale: 665,
              hy: "只有你最知道，那些成长中眼泪和欢笑，这些点点滴滴专属我们之间小密秘，变成我们一辈子的感恩密码。",
              material: "粉色康乃馨16枝、浅粉满天星3枝、尤加利10枝",
              Package:
                "嫣粉/玫粉色欧雅纸5张、樱粉色雪梨纸3张、粉色罗纹烫金丝带2米",
            },
          ],
          y1: [
            {
              name: "韩式系列/温柔以待",
              summary:
                "[花艺师打造 韩式系列] 粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
              price: 239,
              originPrice: 368,
              sale: 235,
              hy: "温柔的人，都是人间宝藏",
              material:
                "韩式花束系列：粉色康乃馨13枝，戴安娜粉玫瑰5枝、3头以上粉色洋桔梗5枝、浅紫紫罗兰5枝（紫罗兰花期为12-4月，其他月份用浅紫色金鱼草/浅紫色桔梗/浅紫色风铃花等相似线状花材替代）、尤加利10枝",
              Package:
                "嫣粉/玫粉色欧雅纸8张、白色雪梨纸2大张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          y2: [
            {
              name: "韩式系列/亲爱的你",
              summary:
                "[花艺师打造 韩式花束系列] 粉玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色/浅粉色绣球1枝",
              price: 369,
              originPrice: 540,
              sale: 259,
              hy: "我喜欢的样子你都有",
              material:
                "韩式花束系列：粉佳人粉玫瑰16枝、3头或以上白色洋桔梗5枝、3头或以上粉色洋桔梗5枝、尤加利10枝、浅紫色小菊3枝、深粉色/浅粉色绣球1枝",
              Package: " 蓝色人造纸8张、白色雪梨纸2张、粉色罗纹烫金丝带1.5米",
            },
          ],
          y3: [
            {
              name: "韩式花篮/阳光使者",
              summary:
                "[秋日暖阳系列] 香槟玫瑰11枝、向日葵2枝、香槟色洋桔梗3枝、橙色多头玫瑰2枝、尤加利叶5枝",
              price: 298,
              originPrice: 425,
              sale: 5387,
              hy: " 你逆光而来，配得上这世间所有的温柔美好",
              material:
                "香槟玫瑰11枝、向日葵2枝、香槟色洋桔梗3枝、橙色多头玫瑰2枝、尤加利叶5枝",
              Package: "花泥、长方形手提花篮（花篮款式以各城市实际出货为准）",
            },
          ],
          y4: [
            {
              name: "韩式系列/你笑起来真好看",
              summary: "[全新韩式系列 珍品玫瑰] 艾莎玫瑰19枝",
              price: 298,
              originPrice: 459,
              sale: 105,
              hy: "平凡的日子，因为有你的笑容，世界都充满了色彩",
              material:
                "艾莎玫瑰19枝、白色洋桔梗3枝、多头白色香水百合3枝、尤加利10枝",
              Package:
                "深浅绿双面人造纸5张、透明雾面纸2张、白色雪梨纸2张、白绿粗条纹罗文带2米",
            },
          ],
          y5: [
            {
              name: "韩式系列/乘风破浪",
              summary:
                "[2022畅销新款] 向日葵3枝、橙色康乃馨19枝、香槟玫瑰11枝、橙色腊梅2枝",
              price: 339,
              originPrice: 459,
              sale: 2325,
              hy: "但愿你在人生每个年龄段，都有乘风破浪的勇气，活出最美的自己",
              material:
                "向日葵3枝、橙色康乃馨19枝、香槟玫瑰11枝、橙色（或黄色）腊梅2枝（腊梅属于季节性花材，缺货则用跳舞兰或者橙色多头玫瑰等类似花材代替）、尤加利5枝",
              Package:
                "红/金色鎏金纸5张、香槟色雪梨纸3张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          y6: [
            {
              name: "满天星-浅粉",
              summary: "[满天星辰，只因有你] 满天星10枝",
              price: 228,
              originPrice: 295,
              sale: 6306,
              hy: "我携满天星辰赠你，好教你不逊色人间错落烟火；只有这满天星辰，足够与你相配。",
              material: "浅粉满天星10枝",
              Package: "粉蓝人造纸9张、浅粉色罗纹玫瑰金丝带2米",
            },
          ],
          y7: [
            {
              name: "莫吉托",
              summary: "[让杰伦带你找到初恋的感觉] 糖果雪山玫瑰33枝，勿忘我",
              price: 358,
              originPrice: 611,
              sale: 696,
              hy: "麻烦给我的爱人来一束mojito",
              material: "糖果雪山玫瑰33枝、浅紫色勿忘我10枝",
              Package:
                "浅紫/香芋紫人造纸7张、白色雪梨纸2张、粉色罗纹烫金丝带2米",
            },
          ],
          y8: [
            {
              name: "韩式系列/青春有你",
              summary:
                "[花艺师打造 韩式花束系列] 苏醒玫瑰16枝、白色洋桔梗5枝、浅蓝绣球1枝",
              price: 356,
              originPrice: 530,
              sale: 2085,
              hy: "青春有你，才温柔又闪光",
              material:
                "韩式花束系列精选：苏醒玫瑰16枝、3头或以上白色洋桔梗5枝、尤加利10枝、浅紫色紫罗兰5枝（紫罗兰花期为12-4月，其他月份用浅紫色金鱼草/浅紫色桔梗/浅紫色风铃花等相似线状花材替代）、浅蓝绣球1枝、小菊4枝",
              Package:
                "浅紫/香芋紫人造纸7张、白色雪梨纸2张、灰蓝色罗纹烫金丝带2米",
            },
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
          ],
          meigui2: [
            {
              src: meigui2_1,
            },
            {
              src: meigui2_2,
            },
            {
              src: meigui2_3,
            },
            {
              src: meigui2_4,
            },
          ],
          meigui3: [
            {
              src: meigui3_1,
            },
            {
              src: meigui3_2,
            },
            {
              src: meigui3_3,
            },
            {
              src: meigui3_4,
            },
          ],
          meigui4: [
            {
              src: meigui4_1,
            },
            {
              src: meigui4_2,
            },
            {
              src: meigui4_3,
            },
            {
              src: meigui4_4,
            },
          ],
          meigui5: [
            {
              src: meigui5_1,
            },
            {
              src: meigui5_2,
            },
            {
              src: meigui5_3,
            },
            {
              src: meigui5_4,
            },
          ],
          meigui6: [
            {
              src: meigui6_1,
            },
            {
              src: meigui6_2,
            },
            {
              src: meigui6_3,
            },
            {
              src: meigui6_4,
            },
          ],
          meigui7: [
            {
              src: meigui7_1,
            },
            {
              src: meigui7_2,
            },
            {
              src: meigui7_3,
            },
            {
              src: meigui7_4,
            },
          ],
          meigui8: [
            {
              src: meigui8_1,
            },
            {
              src: meigui8_2,
            },
            {
              src: meigui8_3,
            },
            {
              src: meigui8_4,
            },
          ],
          qq1: [
            {
              src: qq1_1,
            },
            {
              src: qq1_2,
            },
            {
              src: qq1_3,
            },
            {
              src: qq1_4,
            },
          ],
          qq2: [
            {
              src: qq2_1,
            },
            {
              src: qq2_2,
            },
            {
              src: qq2_3,
            },
            {
              src: qq2_4,
            },
          ],
          qq3: [
            {
              src: qq3_1,
            },
            {
              src: qq3_2,
            },
            {
              src: qq3_3,
            },
            {
              src: qq3_4,
            },
          ],
          qq4: [
            {
              src: qq4_1,
            },
            {
              src: qq4_2,
            },
            {
              src: qq4_3,
            },
            {
              src: qq4_4,
            },
          ],
          qq5: [
            {
              src: qq5_1,
            },
            {
              src: qq5_2,
            },
            {
              src: qq5_3,
            },
            {
              src: qq5_4,
            },
          ],
          qq6: [
            {
              src: qq6_1,
            },
            {
              src: qq6_2,
            },
            {
              src: qq6_3,
            },
            {
              src: qq6_4,
            },
          ],
          qq7: [
            {
              src: qq7_1,
            },
            {
              src: qq7_2,
            },
            {
              src: qq7_3,
            },
            {
              src: qq7_4,
            },
          ],
          qq8: [
            {
              src: qq8_1,
            },
            {
              src: qq8_2,
            },
            {
              src: qq8_3,
            },
            {
              src: qq8_4,
            },
          ],
          yq1: [
            {
              src: yq1_1,
            },
            {
              src: yq1_2,
            },
            {
              src: yq1_3,
            },
            {
              src: yq1_4,
            },
          ],
          yq2: [
            {
              src: yq2_1,
            },
            {
              src: yq2_2,
            },
            {
              src: yq2_3,
            },
            {
              src: yq2_4,
            },
          ],
          yq3: [
            {
              src: yq3_1,
            },
            {
              src: yq3_2,
            },
            {
              src: yq3_3,
            },
            {
              src: yq3_4,
            },
          ],
          yq4: [
            {
              src: yq4_1,
            },
            {
              src: yq4_2,
            },
            {
              src: yq4_3,
            },
            {
              src: yq4_4,
            },
          ],
          yq5: [
            {
              src: yq5_1,
            },
            {
              src: yq5_2,
            },
            {
              src: yq5_3,
            },
            {
              src: yq5_4,
            },
          ],
          yq6: [
            {
              src: yq6_1,
            },
            {
              src: yq6_2,
            },
            {
              src: yq6_3,
            },
            {
              src: yq6_4,
            },
          ],
          yq7: [
            {
              src: yq7_1,
            },
            {
              src: yq7_2,
            },
            {
              src: yq7_3,
            },
            {
              src: yq7_4,
            },
          ],
          yq8: [
            {
              src: yq8_1,
            },
            {
              src: yq8_2,
            },
            {
              src: yq8_3,
            },
            {
              src: yq8_4,
            },
          ],
        },
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
          mg1: JSON.stringify(this.rosy[0].meigui1),
          info1: JSON.stringify(this.details[0].m1),
        },
      });
    },
    toTarget1() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui2),
          info1: JSON.stringify(this.details[0].m2),
        },
      });
    },
    toTarget2() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui3),
          info1: JSON.stringify(this.details[0].m3),
        },
      });
    },
    toTarget3() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui4),
          info1: JSON.stringify(this.details[0].m4),
        },
      });
    },
    toTarget4() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui5),
          info1: JSON.stringify(this.details[0].m5),
        },
      });
    },
    toTarget5() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui6),
          info1: JSON.stringify(this.details[0].m6),
        },
      });
    },
    toTarget6() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui7),
          info1: JSON.stringify(this.details[0].m7),
        },
      });
    },
    toTarget7() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].meigui8),
          info1: JSON.stringify(this.details[0].m8),
        },
      });
    },
    qqtotarget1() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq1),
          info1: JSON.stringify(this.details[0].q1),
        },
      });
    },
    qqtotarget2() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq2),
          info1: JSON.stringify(this.details[0].q2),
        },
      });
    },
    qqtotarget3() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq3),
          info1: JSON.stringify(this.details[0].q3),
        },
      });
    },
    qqtotarget4() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq4),
          info1: JSON.stringify(this.details[0].q4),
        },
      });
    },
    qqtotarget5() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq5),
          info1: JSON.stringify(this.details[0].q5),
        },
      });
    },
    qqtotarget6() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq6),
          info1: JSON.stringify(this.details[0].q6),
        },
      });
    },
    qqtotarget7() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq7),
          info1: JSON.stringify(this.details[0].q7),
        },
      });
    },
    qqtotarget8() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].qq8),
          info1: JSON.stringify(this.details[0].q8),
        },
      });
    },
    yqtotarget1() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq1),
          info1: JSON.stringify(this.details[0].y1),
        },
      });
    },
    yqtotarget2() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq2),
          info1: JSON.stringify(this.details[0].y2),
        },
      });
    },
    yqtotarget3() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq3),
          info1: JSON.stringify(this.details[0].y3),
        },
      });
    },
    yqtotarget4() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq4),
          info1: JSON.stringify(this.details[0].y4),
        },
      });
    },
    yqtotarget5() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq5),
          info1: JSON.stringify(this.details[0].y5),
        },
      });
    },
    yqtotarget6() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq6),
          info1: JSON.stringify(this.details[0].y6),
        },
      });
    },
    yqtotarget7() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq7),
          info1: JSON.stringify(this.details[0].y7),
        },
      });
    },
    yqtotarget8() {
      this.$router.push({
        name: "details",
        query: {
          mg1: JSON.stringify(this.rosy[0].yq8),
          info1: JSON.stringify(this.details[0].y8),
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
