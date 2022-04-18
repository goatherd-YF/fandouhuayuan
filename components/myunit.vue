<template>
  <div style="margin: 5% ;width: 100%">
    <div v-for="item in unitList" :key="item.goodsId" style="float: left;margin: 5px;">
      <a :href="`goods/`+item.goodsId"
         :aria-label="item.goodsName" >
         <div class="fr jgTag bg-green" style="float: left; height: 38px;background-color: red">
           <div style="text-align: center">￥{{ item.goodsPrice }}</div>
         </div>
        <span style="align-items: center">
          <img
            :src="item.goodsPicture1" width="200px" height="200px"
          >
        </span>

        <div class="special_item_message" style="width: 200px;height: 30px;overflow: hidden;
        text-overflow: ellipsis;">

          <span class="special_item_name" style="font-size: 12px;">{{ item.goodsName }}</span>
          <div class="special_item_price">
            <span class="special_item_miaoShaPrice"><span
              class="dollar_txt">￥</span>{{ item.goodsPrice }}</span></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "myunit",
  props: {
    unitList: Array,
    required: true
  },
  data() {
    return {
      mydataList: []
    }
  }

}
</script>

<style scoped>

</style>
