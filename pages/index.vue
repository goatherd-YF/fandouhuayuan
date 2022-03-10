<template>

  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background: #ffffff;">
          <a target="_blank" href="/">
            <img src="~/assets/photo/banner/331316.jpg" alt="首页banner">
          </a>
        </div>
        <!--        <div class="swiper-slide" style="background: #F3260B;">-->
        <!--          <a target="_blank" href="/">-->
        <!--            <img src="~/assets/photo/banner/331316.jpg" alt="首页banner">-->
        <!--          </a>-->
        <!--        </div>-->
      </div>
      <div class="swiper-pagination swiper-pagination-white"/>
      <div slot="button-prev" class="swiper-button-prev swiper-button-white"/>
      <div slot="button-next" class="swiper-button-next swiper-button-white"/>
    </div>
    <!-- 幻灯片 结束 -->

    <div id="aCoursesList">
      <!-- 商品开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">推荐商品</span>
            </h2>
          </header>
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
                        <a title="详情" href="#" class="comm-btn c-btn-1">详情</a>
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
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442295581911.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="Java精品课程"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="Java精品课程" class="course-title fsize18 c-333">Java精品课程</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">501人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">501评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442295604295.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="C4D零基础"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="C4D零基础" class="course-title fsize18 c-333">C4D零基础</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">300人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">300评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442302831779.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="数学给宝宝带来的兴趣"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="数学给宝宝带来的兴趣" class="course-title fsize18 c-333">数学给宝宝带来的兴趣</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">256人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">256评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442295455437.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="零基础入门学习Python课程学习"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a-->
                <!--                        href="#"-->
                <!--                        title="零基础入门学习Python课程学习"-->
                <!--                        class="course-title fsize18 c-333"-->
                <!--                      >零基础入门学习Python课程学习</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">137人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">137评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442295570359.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="MySql从入门到精通"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="MySql从入门到精通" class="course-title fsize18 c-333">MySql从入门到精通</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">125人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">125评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442302852837.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="搜索引擎优化技术"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="搜索引擎优化技术" class="course-title fsize18 c-333">搜索引擎优化技术</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">123人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">123评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                  <div class="cc-l-wrap">-->
                <!--                    <section class="course-img">-->
                <!--                      <img-->
                <!--                        src="~/assets/photo/course/1442295379715.jpg"-->
                <!--                        class="img-responsive"-->
                <!--                        alt="20世纪西方音乐"-->
                <!--                      >-->
                <!--                      <div class="cc-mask">-->
                <!--                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>-->
                <!--                      </div>-->
                <!--                    </section>-->
                <!--                    <h3 class="hLh30 txtOf mt10">-->
                <!--                      <a href="#" title="20世纪西方音乐" class="course-title fsize18 c-333">20世纪西方音乐</a>-->
                <!--                    </h3>-->
                <!--                    <section class="mt10 hLh20 of">-->
                <!--                      <span class="fr jgTag bg-green">-->
                <!--                        <i class="c-fff fsize12 f-fA">免费</i>-->
                <!--                      </span>-->
                <!--                      <span class="fl jgAttr c-ccc f-fA">-->
                <!--                        <i class="c-999 f-fA">34人学习</i>-->
                <!--                        |-->
                <!--                        <i class="c-999 f-fA">34评论</i>-->
                <!--                      </span>-->
                <!--                    </section>-->
                <!--                  </div>-->
                <!--                </li>-->
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <router-link to="/goods/goods" tag="li" active-class="current">
                <a class="comm-btn c-btn-2">全部商品</a>
              </router-link>
              <!--              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部商品</a>-->
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">推荐用户</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for=" user in userList" :key="user.userId">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :title="user.userName" href="/teacher/1">
                        <img :alt="user.userName" :src="user.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :title="user.userName" href="/teacher/1" class="fsize18 c-666">{{ user.userName }}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{ user.userLevel }}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >
                        {{ user.userDescribe }}
                    </p></div>
                  </section>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <!--            <section class="tac pt20">-->
            <!--              <a href="#" title="全部讲师" class="comm-btn c-btn-2"></a>-->
            <!--            </section>-->
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import { goodsList } from '@/api/goods'
import { userList } from '@/api/user'

export default {
  data() {
    return {
      swiperOption: {
        // 配置分页
        pagination: {
          el: '.swiper-pagination'// 分页的dom节点
        },
        // 配置导航
        navigation: {
          nextEl: '.swiper-button-next', // 下一页dom节点
          prevEl: '.swiper-button-prev'// 前一页dom节点
        }
      },
      goodsList: [],
      userList: []

    }
  },
  created() {
    this.getGoodsList()
    this.getUserList()
  },
  methods: {
    getGoodsList() {
      goodsList(1, 8, { goodsLevel: '五星商户' }).then(response => {
        this.goodsList = response.data.data.rows
        console.log(response)
      })
    },
    getUserList() {
      userList(1, 8, undefined).then(response => {
        this.userList = response.data.data.rows
        console.log(response)
      })
    }
  }
}
</script>
