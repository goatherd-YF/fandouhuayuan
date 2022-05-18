<template>
  <div style="color: black;margin-top: 400px;text-align: center;font-weight: bold">正在支付...
  </div>
</template>

<script>
import {payIds} from "@/api/pay";
import cookie from "js-cookie";

export default {

  data() {
    return {
      form: {},
      loginInfo: {}
    }
  },
  created() {
    if (this.$route.query.strList) {
      let ids1 = JSON.parse(this.$route.query.strList)
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        payIds({goodsVoList: ids1,userId:this.loginInfo.userId})
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
