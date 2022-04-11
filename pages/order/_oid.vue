<template>
  <div class="Page Confirm">
    <div class="Title">
      <h1 class="fl f18">订单确认</h1>
      <img src="~/assets/img/cart_setp2.png" class="fr">
      <div class="clear"></div>
    </div>
    <form name="flowForm" id="flowForm" method="post" action="">
      <table class="GoodList">
        <tbody>
        <tr>
          <th class="name">商品</th>
          <!--          <th class="price">原价</th>-->
          <th class="priceNew">价格</th>
        </tr>
        </tbody>
        <tbody>
        <!-- <tr>
          <td colspan="3" class="Title red f18 fb"><p>限时折扣</p></td>
        </tr> -->
        <tr>
          <td colspan="3" class="teacher">商户：{{ order.userName }}</td>
        </tr>
        <tr class="good">
          <td class="name First">
            <a target="_blank" :href="'https://localhost:3000/goods/'+order.goodsId">
              <img :src="order.goodsPicture1"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a target="_blank" :href="'https://localhost:3000/gooodsId/'+ order.goodsId">{{ order.goodsName }}</a>
            </div>
          </td>
          <td class="price">
            <p>￥<strong>{{ order.orderPrice }}</strong></p>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
          <!--          <td class="red priceNew Last">￥<strong>1111</strong></td>-->
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <p>共 <strong class="red">1</strong> 件商品，合计<span
                class="red f20">￥<strong>{{ order.orderPrice }} </strong></span></p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="Finish">
        <div class="fr" id="AgreeDiv">

          <label><p class="on"><input type="checkbox" checked="checked">我已阅读并同意<a href="javascript:"
                                                                                  target="_blank">《翻斗花园购买协议》</a>
          </p></label>
        </div>
        <div class="clear"></div>
        <div class="Main fl">
          <div class="fl">
            <a :href="'/goods/'+order.goodsId">返回商品详情页</a>
          </div>
          <div class="fr">
            <p>共 <strong class="red">1</strong> 件商品，合计<span class="red f20">￥<strong
              id="AllPrice">{{ order.orderPrice }}</strong></span></p>
          </div>
        </div>
        <input name="score" value="0" type="hidden" id="usedScore">
        <button class="fr redb" type="button" id="submitPay" @click="toPay()">去支付</button>
        <div class="clear"></div>
      </div>
    </form>
  </div>
</template>
<script>
import {getOrdersInfo} from '@/api/order'

export default {
  data() {
    return {
      order: {},

    }
  },
  created() {
    if (this.$route.params.oid) {
      getOrdersInfo(this.$route.params.oid)
        .then(response => {
          console.log(response.data)
          this.order = response.data.data
          console.log(this.order, "”1111111111")
        })
    }
  },

  methods: {
    //     //去支付
    toPay() {
      this.$router.push({path: '/pay/' + this.order.orderId})
    }
  }
}
</script>
