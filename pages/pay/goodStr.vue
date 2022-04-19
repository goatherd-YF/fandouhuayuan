<template>
  <div style="color: black;margin-top: 400px;text-align: center;font-weight: bold">正在支付...
  </div>
</template>

<script>

import cookie from "js-cookie";
import {pay} from "@/api/pay";

export default {
  name: 'GoodStr',
  data() {
    return {
      form: {},
      loginInfo: {}
    }
  },
  created() {
    if (this.$route.query.str) {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        var buyGoodsVo = JSON.parse(this.$route.query.str);
        buyGoodsVo.userId = this.loginInfo.userId
        pay(buyGoodsVo)
          .then(response => {
            if(response.data.msg == 'ok') {
              this.form = response.data.data
              const div = document.createElement("div")
              div.innerHTML = this.form
              document.body.appendChild(div)
              document.forms[0].submit();
            }else {
              this.$message.error(response.data.data())
              this.$router.push('/')
            }
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
