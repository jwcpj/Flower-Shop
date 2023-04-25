<template>
  <div class="footer">
    <div class="f-top flex">
      <dl>
        <dt><img src="@/assets/img/f1.jpg" alt="" /></dt>
        <dd>
          <h6>卓越品牌</h6>
          <p>100%正品保障</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="@/assets/img/f2.jpg" alt="" /></dt>
        <dd>
          <h6>金牌服务</h6>
          <p>为您呈现最优服务</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="@/assets/img/f3.jpg" alt="" /></dt>
        <dd>
          <h6>手续简单</h6>
          <p>专业人员上门办理</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="@/assets/img/f4.jpg" alt="" /></dt>
        <dd>
          <h6>轻松还款</h6>
          <p>足不出户轻松还款</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="@/assets/img/f5.jpg" alt="" /></dt>
        <dd>
          <h6>专业配送</h6>
          <p>快速安全</p>
        </dd>
      </dl>
    </div>
    <div class="f-bom">
      <a href="#">关于鲜花网</a> | <a href="#">联系我们</a> |
      <a href="#">加入我们</a> | <a href="#">媒体报道</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 1px solid #fd808e;
}
.footer .f-top {
  width: 960px;
  height: auto;
  overflow: hidden;
  margin: 35px auto;
  display: flex;
  justify-content: space-around;
}
.footer .f-top dl {
  display: flex;
  align-items: center;
}
.footer .f-top dl dt {
  margin-right: 12px;
}
.footer .f-top dl h6 {
  color: rgb(241, 11, 61);
  font-size: 15px;
}
.footer .f-top p {
  color: rgb(241, 11, 61);
}
.footer .f-bom {
  width: 100%;
  height: 34px;
  line-height: 34px;
  background: #fd808e;
  text-align: center;
  color: #fff;
}
.footer .f-bom a {
  color: #fff;
  padding: 0 5px;
}
</style>
