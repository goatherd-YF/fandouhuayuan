<template>
  <div>
    <img src="./123.png"
         style="height: 300px;width: 300px;margin-left: 800px; filter: opacity(95%);
         background: center center;
         border-radius: 50%;
         ">
    <div style="margin-top: 30px;text-align: center;font-size: 20px;font-weight: bold">支付成功!<br/>
      交易地点：{{ order.orderAddress }}<br/>
      交易时间：{{ order.orderTime }}<br/>
      点击跳转回<a
        href="./layouts/default.vue" style="color: #00c7e1">首页</a></div>
  </div>
</template>

<script>
import {payQuery} from "@/api/pay";

export default {
  name: "ok",
  data() {
    return {
      order: {}
    }
  },
  created() {
    console.log(this.$route)
    let orderId = this.$route.query.out_trade_no
    payQuery(orderId).then(res => {
      console.log("res.data.order")
      this.order = res.data.data
    })
  }
}
</script>

<style scoped>

</style>
