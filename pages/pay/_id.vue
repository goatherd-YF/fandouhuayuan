<template>
  <div style="color: black;margin-top: 400px;text-align: center;font-weight: bold">正在支付...
  </div>
</template>

<script>
import {getOrdersInfo} from "@/api/order";
import {pay} from "@/api/pay";
import cookie from "js-cookie";

export default {

  data() {
    return {
      form: {},
      loginInfo: {}
    }
  },
  created() {
    if (this.$route.params.id) {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        pay({goodsId: this.$route.params.id, userId: this.loginInfo.userId})
          .then(response => {
            this.form = response.data.data
            const div = document.createElement("div")
            div.innerHTML = this.form
            document.body.appendChild(div)
            document.forms[0].submit();
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
