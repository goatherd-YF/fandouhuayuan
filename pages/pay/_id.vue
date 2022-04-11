<template>
  <div style="color: black;margin-top: 400px;text-align: center;font-weight: bold">正在支付...
  </div>
</template>

<script>
import {getOrdersInfo} from "@/api/order";
import {pay} from "@/api/pay";

export default {
  data() {
    return {
      form: {}
    }
  },
  created() {
    if (this.$route.params.id) {
      pay({orderId: this.$route.params.id})
        .then(response => {
          this.form = response.data.msg
          const div  = document.createElement("divPay")
          div.innerHTML = this.form
         document.body.appendChild(div)
          document.forms[1].submit();

        })
    }
  }
}
</script>

<style scoped>
</style>
