<template>
  <div class="Page Confirm">
    <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 50px">
    </el-page-header>
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
          <th class="priceNew">价格</th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td colspan="3" class="teacher">订单</td>
        </tr>
        <tr class="good" v-for="order in goodsList" :key="order.goodsId">
          <td class="name First">
            <a target="_blank" :href="'http://localhost:3000/goods/'+order.goodsId">
              <img :src="order.goodsPicture1"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a target="_blank" :href="'http://localhost:3000/goods/'+ order.goodsId">{{ order.goodsName }}</a>
            </div>
          </td>
          <td class="price">
            <p>￥<strong>{{ order.goodsPrice }}</strong></p>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <p>共 <strong class="red">{{ goodsList.length }}</strong> 件商品，合计<span
                class="red f20">￥<strong>{{ sumPrice }} </strong></span></p>
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
            <!--            <a :href="'/goods/'+order.goodsId">返回商品详情页</a>-->
          </div>
          <div class="fr">
            <p>共 <strong class="red">1</strong> 件商品，合计<span class="red f20">￥<strong
              id="AllPrice">{{ sumPrice }}</strong></span></p>
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
import {getOrdersInfo, getOrdersInfoByIds} from '@/api/order'
import {payIds} from "@/api/pay";
import cookie from "js-cookie";

export default {
  data() {
    return {
      order: {},
      goodsList: {},
      sumPrice: 0,
      str: undefined,
      loginInfo:{},
      form:{}

    }
  },
  created() {
    console.log(this.$route.query)
    console.log(this.$route.query.myStr)
    this.showInfo()

    if (this.$route.query.myStr) {
      this.str = JSON.parse(this.$route.query.myStr)
      getOrdersInfoByIds({ids: this.str})
        .then(response => {
          console.log(response.data)
          this.goodsList = response.data.data

          //计算总价
          this.goodsList.forEach(item => {
            this.sumPrice += parseInt(item.goodsPrice)
          })
          console.log(this.sumPrice)
        })
    }
  },

  methods: {
    // 登录人信息
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },
    //     //去支付
    toPay() {
      this.$router.push({path: '/pay/query',query:{strList: this.$route.query.myStr})
    },

    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
