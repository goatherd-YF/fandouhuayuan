<template>
  <div id="aCoursesList" class="bg-fa of">
    <el-page-header @back="goBack"  style="margin-left: 50px;margin-top: 50px">
    </el-page-header>
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">用户介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 用户基本信息 -->
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img style="width: 300px;height: 300px" :src="user.avatar">
            </section>
            <section class="mt10">
              <span class="t-tag-bg">用户名称：{{ user.userName }}</span>
            </section>
            <section class="mt10">
              <span class="t-tag-bg">用户性别：{{ user.userSex }}</span>
            </section>
            <section v-if="loginInfo.userId == user.userId" class="mt10">
              <span class="t-tag-bg">账户余额：{{ user.count }}</span>
            </section>
            <section class="mt10">
              <span class="t-tag-bg">用户等级： {{ user.userLevel }}</span>
            </section>
            <section class=" t-tag-bg">
              <p
                class="mt10"
              >用户描述：</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ user.userDescribe }}</p>
            </section>

            <div class="clear"/>
          </div>
        </section>
        <div class="clear"/>
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">商品</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- /无数据提示 开始-->
          <section v-if="goodsList.length == 0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">该用户没有出售商品。。。</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of">
              <li v-for="goods in goodsList" :key="goods.goodsId">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :src="goods.goodsPicture1"
                      class="img-responsive">
                    <div class="cc-mask">
                      <a
                        :title="goods.goodsName"
                        :href="'/goods/'+goods.goodsId"

                        class="comm-btn c-btn-1">详情</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :title=" goods.goodsName "
                      href="#"

                      class="course-title fsize18 c-333">{{ goods.goodsDescribe }}</a>
                  </h3>
                </div>
              </li>
            </ul>
            <div class="clear"/>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import { findById } from '@/api/user'
import {goodsBySellerId, goodsList} from '@/api/goods'
import cookie from 'js-cookie'

export default {
  data() {
    return {
      user: {},
      goodsList: [],
      loginInfo: {}
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getUserInfo(this.$route.params.id)
      this.getGoodsByUserId(this.$route.params.id)
      this.showInfo()
    }
  },
  methods: {
    getUserInfo(id) {
      findById(id).then(res => {
        this.user = res.data.data
      })
    },
    getGoodsByUserId() {
      goodsBySellerId({sellerId: this.loginInfo.userId}).then(response => {
        this.goodsList = response.data.data
      })
    },
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
