<template>
  <div>
    <article class="comm-course-list">
      <ul id="bna" class="of">
        <li v-for="goods in goodsList" :key="goods.goodsId">
          <div class="cc-l-wrap">
            <section class="course-img">
              <img
                :src="goods.goodsPicture1"
                :alt="goods.goodsName"
                class="img-responsive"
              >
              <div class="cc-mask">
                <a title="详情" :href="'../pages/goods/'+goods.goodsId" class="comm-btn c-btn-1">详情</a>
              </div>
            </section>
            <h3 class="hLh30 txtOf mt10">
              <a :title="goods.goodsName" href="#" class="course-title fsize18 c-333">{{ goods.goodsName }}</a>
            </h3>
            <section class="mt10 hLh20 of">
              <span class="fr jgTag bg-green">
                <i class="c-fff fsize12 f-fA">￥{{ goods.goodsPrice }} </i>
              </span>
              <span class="fl jgAttr c-ccc f-fA">
                <i class="c-999 f-fA">3收藏</i>
                |
                <i class="c-999 f-fA">{{ goods.sellerName }}</i>
              </span>
            </section>
          </div>
        </li>
      </ul>
      <div class="clear"/>
    </article>
  </div>
</template>
<script>
export default {
  props: ['goodsList'],
  data() {
    return {

    }
  }

}
</script>
