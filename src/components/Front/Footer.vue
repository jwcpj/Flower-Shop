<template>
  <div class="footer">
    <div class="f-top">
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
    <div class="f-mid">
      <div class="div-left">
        <ul>
          <li>
            <h6>分期指南</h6>
          </li>
          <li><a href="#">分期条件</a></li>
          <li><a href="#">需要材料</a></li>
          <li><a href="#">分期步骤</a></li>
          <li><a href="#">分期问题</a></li>
        </ul>
        <ul>
          <li>
            <h6>还款指南</h6>
          </li>
          <li><a href="#">还款流程</a></li>
          <li><a href="#">提前还款</a></li>
          <li><a href="#">出现逾期</a></li>
        </ul>
        <ul>
          <li>
            <h6>售后保障</h6>
          </li>
          <li><a href="#">正品保障</a></li>
          <li><a href="#">售后服务</a></li>
          <li><a href="#">退款政策</a></li>
        </ul>
        <ul>
          <li>
            <h6>账户服务</h6>
          </li>
          <li><a href="#">关于账户</a></li>
          <li><a href="#">关于订单</a></li>
          <li><a href="#">常见问题</a></li>
        </ul>
        <ul>
          <li>
            <h6>鲜花来了</h6>
          </li>
          <li><a href="#">有关发货</a></li>
          <li><a href="#">有关物流</a></li>
        </ul>
      </div>
      <div class="div-right">
        <p>联系微信</p>

      </div>
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
  border-top: 1px solid rgb(105, 105, 105);
}
.footer .f-top {
  width: 960px;
  height: auto;
  overflow: hidden;
  margin: 35px auto;
  display: flex;
  justify-content: space-between;
}
.footer .f-top dl {
  display: flex;
  align-items: center;
}
.footer .f-top dl dt {
  margin-right: 12px;
}
.footer .f-top dl h6 {
  color: #000;
  font-size: 15px;
}
.footer .f-mid {
  width: 1050px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
}
.footer .f-mid .div-left {
  flex: 1;
  display: flex;
}
.footer .f-mid .div-left ul {
  flex: 1;
  min-height: 150px;
  border-right: 1px solid #ccc;
}
.footer .f-mid .div-left ul li {
  list-style: none;
  padding: 0 45px;
  line-height: 25px;
  width: 100%;
  box-sizing: border-box;
}
.footer .f-mid .div-left ul li h6 {
  font-size: 15px;
  color: #000;
  padding-bottom: 5px;
}
.footer .f-mid .div-right {
  flex: 0 0 175px;
  text-align: center;
}
.footer .f-mid .div-right p {
  padding-bottom: 10px;
}
.footer .f-bom {
  width: 100%;
  height: 34px;
  line-height: 34px;
  background: #ef5634;
  text-align: center;
  color: #fff;
}
.footer .f-bom a {
  color: #fff;
  padding: 0 5px;
}
</style>
