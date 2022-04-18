<template>
  <div>
    <img src="./123.png"
         style="height: 300px;width: 300px;margin-left: 42%; filter: opacity(95%);
         background: center center;
         border-radius: 50%;
         ">
    <div style="margin-top: 30px;text-align: center;font-size: 20px;font-weight: bold">支付成功!<br/>
      交易地点：{{ orderAddress  }}<br/>
      交易时间：{{ orderTime }}<br/>
      点击跳转回<a
        href="./layouts/default.vue" style="color: #00c7e1">首页</a></div>
  </div>
</template>

<script>

export default {
  name: "Ok",
  data() {
    return {
      orderTime: '',
      orderAddress:''
    }
  },
  created() {
    this.orderAddress = this.$route.query.orderAddress
    this.orderTime =   this.$route.query.orderTime
  }

}
</script>

<style scoped>

</style>
