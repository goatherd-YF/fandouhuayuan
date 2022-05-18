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
          <th class="priceNew">商品</th>
          <th class="priceNew">数量</th>
          <th class="priceNew">价格</th>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td colspan="3" class="teacher">订单</td>
        </tr>
        <tr class="good" v-for="goodsVo in goodsList" :key="goodsVo.goodsId" >
          <td class="name First">
            <a  :href="'http://localhost:3000/goods/'+goodsVo.goodsId">
              <img :src="goodsVo.goodsPicture1"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a  :href="'http://localhost:3000/goods/'+ goodsVo.goodsId">{{ goodsVo.goodsName }}</a>
            </div>
          </td>
          <td>
<!--            <p>剩余数量:{{ parseInt(goodsVo.num) - goodsVo.num1 }}</p>-->
            <br>
            <el-input-number v-model="goodsVo.num1 " @change="handleChange" :min="1" :max="parseInt(goodsVo.num) "
                             label="描述文字"></el-input-number>
          </td>
          <td class="price">
            <p>￥<strong>{{  goodsVo.goodsPrice*goodsVo.num1 }}</strong></p>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <p>共 <strong class="red">{{ num }}</strong> 件商品，合计<span
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
            <p>共 <strong class="red">{{ num }}</strong> 件商品，合计<span class="red f20">￥<strong
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
import {getOrdersInfoByIds} from '@/api/order'
import cookie from "js-cookie";

export default {
  data() {
    return {
      num: 1,
      goods: {},
      goodsList: {},
      sumPrice: 0,
      str: undefined,
      loginInfo: {},
      form: {},
      strList: ''

    }
  },
  created() {
    this.showInfo()

    if (this.$route.query.myStr) {
      this.str = JSON.parse(this.$route.query.myStr)
      getOrdersInfoByIds({ids: this.str})
        .then(response => {
          this.goodsList = response.data.data
          this.num = this.goodsList.length
          //计算总价
          this.goodsList.forEach(item => {
            this.sumPrice += parseInt(item.goodsPrice)
          })
        })
    }
  },
  // watch: {
  //   //监听数组
  //   goodsList: {
  //     handler(newVal, oldVal) {
  //       this.num =1
  //     },
  //     deep: true, // 加这个属性，深度监听
  //   },
  //
  // },

  methods: {
    // 登录人信息
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    }
    ,
    //     //去支付
    toPay() {

      var strList = JSON.stringify(this.goodsList);
      this.$router.push({path: '/pay/query', query: {strList}})
    }
    ,

    goBack() {
      this.$router.go(-1);
    },
    handleChange(currentValue, oldValue) {
      //当前数量
      this.num = this.num - oldValue +currentValue
      this.sumPrice = 0
      this.goodsList.forEach(item => {
        this.sumPrice += parseInt(item.goodsPrice)* item.num1
      })
    },

  }
}
</script>
