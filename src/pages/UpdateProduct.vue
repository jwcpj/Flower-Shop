<template>
  <div id="home">
    <HomeHeader></HomeHeader>
    <div class="content">
      <div class="add">
        <el-button type="text" @click="centerDialogVisible = true" class="bt"
          >修改鲜花</el-button
        >

        <el-dialog
          :modal-append-to-body="false"
          id="zz"
          title="修改鲜花"
          :visible.sync="centerDialogVisible"
          width="30%"
          center
        >
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="鲜花名称" prop="product_name">
              <el-input v-model="ruleForm.product_name"></el-input>
            </el-form-item>
            <el-form-item label="鲜花类型" prop="product_type">
              <el-select
                v-model="ruleForm.product_type"
                placeholder="请选择鲜花类型"
              >
                <el-option label="爱情鲜花" value="爱情鲜花"></el-option>
                <el-option label="友情鲜花" value="友情鲜花"></el-option>
                <el-option label="亲情鲜花" value="亲情鲜花"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="鲜花价格" prop="price">
              <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="鲜花销量" prop="sale">
              <el-input v-model="ruleForm.sale"></el-input>
            </el-form-item>
            <el-form-item label="鲜花花语" prop="hy">
              <el-input v-model="ruleForm.hy"></el-input>
            </el-form-item>
            <el-form-item label="鲜花材料" prop="cl">
              <el-input v-model="ruleForm.cl"></el-input>
            </el-form-item>
            <el-form-item label="鲜花图片" prop="product_img">
              <el-upload
                class="avatar-uploader"
                :action="server"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :headers="headers"
                :http-request="upload"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :plain="true"
                @click="submitForm('ruleForm')"
                >确认修改</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
      <div class="bu">
        <span><router-link to="/adminhome">返回首页</router-link></span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";
import axios from "axios";
export default {
  components: { HomeHeader, Footer },
  data() {
    return {
      centerDialogVisible: false,
      imageUrl: "",
      formData: {},
      // msg: ,
      server: "http://localhost:8081/product/uploads",
      headers: {
        token: localStorage.getItem("token"),
      },
      ruleForm: {
        product_name: JSON.parse(this.$route.query.info1).product_name,
        product_img: JSON.parse(this.$route.query.info1).product_img,
        product_type: JSON.parse(this.$route.query.info1).product_type,
        price: JSON.parse(this.$route.query.info1).price,
        sale: JSON.parse(this.$route.query.info1).sale,
        hy: JSON.parse(this.$route.query.info1).hy,
        cl: JSON.parse(this.$route.query.info1).cl,
      },
      rules: {
        product_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        product_type: [{ required: true, trigger: "change" }],
        price: [
          {
            required: true,
          },
        ],
        sale: [
          {
            required: true,
          },
        ],
        hy: [
          {
            required: true,
          },
        ],
        cl: [{ required: true }],
        product_img: [{ required: true }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // let res = await addProduct(this.ruleForm);
      axios({
        method: "POST",
        url: "/product/update",
        header: {
          "content-type": "application/x-www-form-urlencoded",
        },
        data: {
          product_name: this.ruleForm.product_name,
          product_img: this.imageUrl,
          product_type: this.ruleForm.product_type,
          price: this.ruleForm.price,
          sale: this.ruleForm.sale,
          hy: this.ruleForm.hy,
          cl: this.ruleForm.cl,
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.yz = true;

          alert("修改成功！");
        } else {
          this.yz = false;
          console.log("error submit!!");
          return this.yz;
        }
      });
      if (this.yz == true) {
        this.centerDialogVisible = false;
      }
    },
    upload(param) {
      const formData = new FormData();
      formData.append("file", param.file);
      axios.post("/product/upload", formData).then((res) => {
        this.imageUrl = res.data.data.url;
        console.log(this.imageUrl);
      });
    },
    beforeAvatarUpload(file) {
      const typeArr = ["image/png", "image/jpeg", "image/jpg"];
      if (!typeArr.includes(file.type)) {
        this.$message.error("上传头像图片只支持jpg，png，jpeg格式");
        return false;
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.content {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.bt {
  font-size: 18px;
  color: #fff !important;
}
.add {
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: #dd5a5a;
  text-align: center;
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