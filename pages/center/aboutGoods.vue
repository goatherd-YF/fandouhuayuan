<template>
  <div>
    <div v-for="(good) in list" :key="good.goodsId" class="main">
      <div class="item-list">
        <div class="item-list tip_empty">
          <div class="item-box">
            <div class="item-box_imageContainer"><a href="/item/12110" target="_blank"><img
              :src="good.goodsPicture1"
              :alt="good.goodsName"
              style="height: 200px;width: 300px"
              class="cover"
              width="300"></a>
            </div>
            <div class="item-box_content">
              <h3><a class="item-box_title" href="/item/12110" target="_blank">{{ good.goodsName }}</a></h3>
              <div class="intro">
                {{ good.goodsDescribe }}
              </div>
            </div>
            <div class="item-box_footer">
              <div class="item-box_detailsItem"><i class="icon icon-rl sm"/>上传时间：{{ good.createTime }}</div>
              <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>商品价格: ￥{{ good.goodsPrice }}
              </div>
              <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                class="icon icon-guanzhu big_24"
                title="点击收藏"/></a></div>
              <div class="item-box_alignBottom">
                <a
                  class="btn_down"
                  href="/item/12110"
                  target="_blank">详情</a>
                <a
                  class="btn_preview"
                  href="/item/12110/preview"
                  target="_blank">加入购物车</a>
                <a
                  class="btn_preview"
                  href="/item/12110/preview"
                  target="_blank">立即购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagemain"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutGoods',
  // eslint-disable-next-line vue/require-prop-types
  props: ['list'],
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
