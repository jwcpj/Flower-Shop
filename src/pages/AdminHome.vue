<template>
  <div class="main">
    <HomeHeader></HomeHeader>
    <div class="update">
      <div class="container flex">
        <div class="add" @click="toAdd">添加鲜花</div>
        <div class="home_input">
          <input
            type="text"
            value="请输入鲜花名称"
            v-model="info.product_name"
          />
          <button class="search_button" @click="search">搜索</button>
        </div>
      </div>
    </div>
    <div class="bg1 container">
      <div class="content">
        <div class="content_title">
          爱情鲜花
          <span> | 许 · 她一生承诺</span>
        </div>
        <div class=".content_img">
          <div class="content_right">
            <div
              class="card"
              v-for="item in aa"
              :key="item.product_id"
              v-show="item.product_type == '爱情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">
                已售 {{ item.sale }} 件
                <span
                  style="color: red"
                  @click="deleteProduct(item.product_name)"
                  >&nbsp &nbsp 删除</span
                >
                <span style="color: red" @click="updateProduct(item)"
                  >&nbsp 修改</span
                >
              </div>
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
          <div class="content_right">
            <div
              class="card"
              v-for="item in aa"
              :key="item.product_id"
              v-show="item.product_type == '亲情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">
                已售 {{ item.sale }} 件
                <span
                  style="color: red"
                  @click="deleteProduct(item.product_name)"
                  >&nbsp &nbsp &nbsp删除</span
                >
                <span style="color: red" @click="updateProduct(item)"
                  >&nbsp &nbsp &nbsp修改</span
                >
              </div>
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
          <div class="content_right">
            <div
              class="card"
              v-for="item in aa"
              :key="item.product_id"
              v-show="item.product_type == '友情鲜花'"
            >
              <img :src="item.product_img" alt="" />
              <div class="card_title">{{ item.product_name }}</div>
              <div class="badge">{{ item.product_type }}</div>
              <div class="card_title2">￥{{ item.price }}</div>
              <div class="card_text">
                已售 {{ item.sale }} 件
                <span
                  style="color: red"
                  @click="deleteProduct(item.product_name)"
                  >&nbsp &nbsp &nbsp删除</span
                >
                <span style="color: red" @click="updateProduct(item)"
                  >&nbsp &nbsp &nbsp修改</span
                >
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
import { productList } from "@/api";
import { yqList } from "@/api";
import { deleteProduct } from "@/api";
export default {
  components: { HomeHeader, Footer },
  data() {
    return {
      yz: false,
      aa: "",
      info: {
        product_name: "",
      },
      msg: {},
    };
  },
  mounted() {
    this.cc();
  },
  methods: {
    async cc() {
      let res = await productList();
      this.aa = res.data;
      this.$forceUpdate();
      // this.$set(this.aa, res.data);
    },
    async deleteProduct(name) {
      const info = { product_name: name };
      let res = await deleteProduct(info);
      if (res.code == "10000") {
        alert("删除成功");
        this.cc();
      }
    },
    async search() {
      if (this.info.product_name == "") {
        this.cc();
      } else {
        let res = await yqList(this.info);
        this.aa = res.data;
        this.$forceUpdate();
        this.$set(this.aa, 0, res.data);
        // console.log(this.aa);
      }
    },
    toAdd() {
      this.$router.push({
        name: "addproduct",
      });
    },

    updateProduct(msg) {
      // const info = { product_name: name };
      console.log(msg);
      this.$router.push({
        name: "updateproduct",
        query: {
          info1: JSON.stringify(msg),
        },
      });
    },
  },
};
</script>

<style scoped>
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
  top: 4px;
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  text-indent: 6px;
  font-size: 12px;
  color: #8c939d;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 15px;
  text-indent: 8px;
}

.home_input button {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 4px;
  width: 20%;
  height: 100%;
  background-color: rgb(236, 70, 103);
  color: white;
  text-align: center;
  outline: none;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 17px;
}
.update {
  width: 100%;
  height: 50px;
  background-color: #ffa4af;
  line-height: 50px;
}
.add {
  width: 100px;
  height: 50px;
  background-color: rgb(236, 70, 103);
  color: #fff;
  margin-left: 5px;
  text-align: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
el-popup-parent--hidden .v-modal {
  z-index: 0 !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
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

.content_right {
  margin: 20px 0;
  width: 100%;
  height: 100%;
}

.card {
  float: left;
  cursor: pointer;
  width: 23%;
  background-color: #fff;
  padding: 12px;
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
#zz {
  z-index: 9999 !important;
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