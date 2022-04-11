<template>
  <div>订单列表
    <div :html="form"></div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data(){
    return{
      form:{}
    }
  }
}
</script>

<style scoped>
</style>
