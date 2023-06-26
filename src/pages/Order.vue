<template>
  <div class="container">
    <HomeHeader></HomeHeader>
    <div class="content">
      <div class="img">
        <img src="" alt="" />
      </div>
      <div class="name"></div>
      <div class="price"></div>
      <div class="status">已完成</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Front/HomeHeader.vue";
import Footer from "@/components/Front/Footer.vue";
export default {
  name: "Order",
  components: {
    HomeHeader,
    Footer,
  },
};
</script>

<style>
</style>