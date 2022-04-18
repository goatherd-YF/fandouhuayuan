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
          <th class="price">购买数量</th>
          <th class="priceNew">价格</th>
        </tr>
        </tbody>
        <tbody>

        <tr>
          <td colspan="3" class="teacher">商户：{{ goods.userName }}</td>
        </tr>
        <tr class="good">
          <td class="name First">
            <a  :href="'http://localhost:3000/goods/'+goods.goodsId">
              <img :src="goods.goodsPicture1"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a  :href="'http://localhost:3000/goods/'+ goods.goodsId">{{ goods.goodsName }}</a>
            </div>
          </td>
          <td>
            <p>剩余数量:{{ parseInt(goods.num)- num }}</p>
            <br>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="parseInt(goods.num) "
                             label="描述文字"></el-input-number>
          </td>
          <td class="price">
            <div>￥<strong>{{ goods.goodsPrice*num }}</strong></div>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
          <!--          <td class="red priceNew Last">￥<strong>1111</strong></td>-->
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <div>共 <strong class="red">{{ num }}</strong> 件商品，合计<span
                class="red f20">￥<strong>{{ goods.goodsPrice*num }} </strong></span></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="Finish">
        <div class="fr" id="AgreeDiv">

          <label>
            <div class="on"><input type="checkbox" checked="checked">我已阅读并同意<a href="javascript:"
                                                                               target="_blank">《翻斗花园购买协议》</a>
            </div>
          </label>
        </div>
        <div class="clear"></div>
        <div class="Main fl">
          <div class="fl">
            <a :href="'/goods/'+goods.goodsId">返回商品详情页</a>
          </div>
          <div class="fr">
            <div>共 <strong class="red">{{ num }}</strong> 件商品，合计<span class="red f20">￥<strong
              id="AllPrice">{{ goods.goodsPrice*num }}</strong></span></div>
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
import {findById} from "@/api/goods";
import cookie from "js-cookie";
import {pay} from "@/api/pay";

export default {
  asyncData({params, error}) {
    return findById(params.oid)
      .then(response => {
        return {
          goods: response.data.data
        }
      })
  },

  data() {
    return {
      num: 1,
      goods: {},
      form: {},
      loginInfo: {}
    }
  },

  methods: {
    getGoods() {
      if (this.$route.params.oid) {
        findById(this.$route.params.oid)
          .then(response => {
            console.log(response.data)
            this.goods = response.data.data
            console.log(this.goods, "”1111111111")
          })
      }
    },
    //     //去支付
    toPay() {
      //点击去支付
      this.goods.num = this.num
      this.goods.goodsPrice = this.num*this.goods.goodsPrice
      console.log(this.goods)
      var str = JSON.stringify(this.goods);
      this.$router.push({path: '/pay/goodStr',query:{str}})
      // var jsonStr = cookie.get('loginUser') //获取登录人
      // if (jsonStr) {
      //   this.loginInfo = JSON.parse(jsonStr)
      //   pay({goodsId: this.$route.params.id, userId: this.loginInfo.userId}) //发请求
      //     .then(response => {
      //       //返回数据
      //       console.log(response,"response")
      //       if (response.data.msg == "error") { //同步数据
      //         this.$message.error(response.data.data)
      //       } else {  //成功
      //         this.form = response.data.data
      //         const div = document.createElement("div")
      //         div.innerHTML = this.form
      //         document.body.appendChild(div)
      //         document.forms[0].submit();
      //       }
      //     })
      // }

    },
    goBack() {
      this.$router.go(-1);
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
