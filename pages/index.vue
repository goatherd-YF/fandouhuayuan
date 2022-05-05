<template>

  <div>
    <!--轮播图-->
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item>
          <img src="~/assets/photo/banner/125.jpeg" alt="...">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~/assets/photo/banner/156.jpeg" alt="...">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~/assets/photo/banner/124.jpeg" alt="...">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--轮播图-->
    <!--    特价商品-->
    <div style="margin-bottom: 5%">
      <div style="margin-left: 15%;margin-right: 15%;font-size: 24px;height: 10%;margin-top: 20px">
        <span style="font-weight: bold;font-size: 24px;">
          今日特价
        </span>
        <!--        面板-->
        <el-tabs v-model="activeName" @tab-click="handleClick" style="font-size: 18px">
          <el-tab-pane label="精选" name="first">
            <div>
              <myunit :unitList="filterList"></myunit>
            </div>

          </el-tab-pane>
          <el-tab-pane label="美食" name="second">
            <div>
              <myunit :unitList="filterList"></myunit>
            </div>
          </el-tab-pane>
          <el-tab-pane label="百货" name="third">
            <div>
              <myunit :unitList="filterList"></myunit>
            </div>
          </el-tab-pane>
          <el-tab-pane label="个护" name="fourth">
            <div>
              <myunit :unitList="filterList"></myunit>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>


    <div id="aCoursesList">
      <!-- 商品开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">为你推荐</span>
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
                        <a title="详情" :href="'./goods/'+goods.goodsId" class="comm-btn c-btn-1">详情</a>
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
                        <i class="c-999 f-fA"> 数量：{{ goods.num }}</i>
                        |
                        <i class="c-999 f-fA">{{ goods.sellerName }}</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <li>
              <router-link to="/goods/goods"  active-class="current">
                <a class="comm-btn c-btn-2">全部商品</a>
              </router-link>
              </li>
            </section>
          </div>
        </section>
      </div>
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">推荐商户</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for=" user in userList" :key="user.userId">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :title="user.userName" :href="'/user/'+user.userId">
                        <img :alt="user.userName" :src="user.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :title="user.userName" :href="'/user/'+user.userId" class="fsize18 c-666">{{
                          user.userName
                        }}</a>
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
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {goodsList} from '@/api/goods'
import {userList} from '@/api/user'
import Myunit from "@/components/myunit";
import {getUnit} from "@/api/myindex";

export default {
  components: {Myunit},
  data() {
    return {
      activeName: 'first',
      unitList: [],
      filterList: [],
      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
        }
      },
      //banner数组
      bannerList: [
        './assets/photo/banner/123.jpeg',
        './assets/photo/banner/124.jpeg',
        './assets/photo/banner/125.jpeg',
      ],
      goodsList: [],
      userList: []

    }
  },
  created() {
    this.getGoodsList()
    this.getUserList()
    this.getUnit()
  },
  methods: {
    //获取今日特价
    getUnit() {
      getUnit().then(res => {
        this.unitList = res.data.data
        this.filterList = this.unitList.filter(item => item.goodsCata == 0)
      })
    },
    handleClick(tab, event) {
      this.filterList = this.unitList.filter(item => item.goodsCata == tab.index)
    },
    getGoodsList() {
      goodsList(1, 10, {goodsState: 'true'}).then(response => {
        this.goodsList = response.data.data.rows
      })
    },
    getUserList() {
      userList(1, 8, {}).then(response => {
        this.userList = response.data.data.rows
      })
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
