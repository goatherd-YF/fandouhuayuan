<template>
  <div>
    <div id="aCoursesList" class="bg-fa of">
      <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 50px">
      </el-page-header>
      <!-- 详情 开始 -->
      <section class="container">
        <section class="path-wrap txtOf hLh30">
          <!--        <a href="#" title class="c-999 fsize14">首页</a>-->
          <!--        \-->
          <!--        <a href="#" title class="c-999 fsize14">{{ }}</a>-->
          <!--        \-->
          <!--        <span class="c-333 fsize14">{{  }}</span>-->
        </section>
        <div>
          <article class="c-v-pic-wrap" style="height: 357px;margin-left: 100px;width: 500px;">
            <section class="p-h-video-box" id="videoPlay">
              <img height="357px" :src="goods.goodsPicture1?goods.goodsPicture1:''" :alt="goods.goodsName"
                   class="dis c-v-pic">
            </section>
          </article>
          <aside class="c-attr-wrap" style=" width: 480px; margin-right: 50px">
            <section class="ml20 mr15">
              <h2 class="hLh30 txtOf mt15">
                <span class="c-fff fsize24">{{ goods.goodsName }}</span>
              </h2>
              <section class="c-attr-jg">
                <span class="c-fff">价格：</span>
                <b class="c-yellow" style="font-size:24px;">￥{{ goods.goodsPrice }}</b>
              </section>
              <section class="c-attr-mt c-attr-undis">
                <span class="c-fff fsize14">卖家： {{ goods.sellerName }}&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
                <span class="c-fff fsize14" v-if="goods.num != 0">商品数： {{ goods.num }}&nbsp;&nbsp;&nbsp;</span>
                <span class="c-fff fsize14" v-if="goods.num == 0">已下架</span>
              </section>
              <section class="c-attr-mt of">
              <span class="ml10 vam" @click="changeShowFav">
                <em class="icon18 scIcon" v-if="showFav"></em>
                <a class="c-fff vam" title="收藏" href="#" v-if="showFav">收藏</a>
                <em class="icon18 scIcon1" v-if="!showFav"></em>
                <a class="c-fff vam" title="已收藏" href="#" v-if="!showFav">已收藏</a>
              </span>
              </section>
              <section class="c-attr-mt">
                <div @click="buyGoods(goods.goodsId)" title="立即购买" class="comm-btn c-btn-3" v-if="goods.num != 0">立即购买
                </div>
                <div title="已下架" class="comm-btn c-btn-3" v-if="goods.num == 0">已下架</div>
              </section>
            </section>

          </aside>
          <div class="clear"></div>
        </div>
        <!-- /课程封面介绍 -->
        <div class="mt20 c-infor-box">
          <article class="fl col-7" style="width: 100%">
            <section class="mr30">
              <div class="i-box">
                <div>
                  <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                    <a name="c-i" class="current" title="课程详情">详情</a>
                  </section>
                </div>
                <article class="ml10 mr10 pt20">
                  <div>
                    <h6 class="c-i-content c-infor-title">
                      <span>商品介绍</span>
                    </h6>
                    <div class="course-txt-body-wrap">
                      <section class="course-txt-body">
                        <p v-html="goods.goodsDescribe">{{ goods.goodsDescribe }}</p>
                      </section>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </article>
          <div class="clear"></div>
        </div>
        <!--        评论-->
        <div>
          <div style="margin-top: 20px">商品评论</div>
          <j-comment
            title="欢迎评论"
            :key-map="keyMap"
            :showNumber="1"
            :comment-datas="commentDatas"
            @submitComment="submitComment">
          </j-comment>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
import {findById} from '@/api/goods'
import {addFav, queryFav, removeFav} from "@/api/fav";
import cookie from "js-cookie";
import {addReply, getReply} from "@/api/replay";

export default {

  async asyncData({params, error}) {

    return findById(params.id)
      .then(response => {
        return {
          goods: response.data.data

        }
      })
  },

  data() {
    return {
      showFav: true,
      loginInfo: {},
      keyMap: {
        pid: "parent_comment_id",
        id: "id",
        isAdmin: "admin_comment"
      },
      commentDatas: []
    }
  },
  created() {
    this.getFav()
    this.getReply()
  },

  methods: {
    submitComment(item) {
      const cid = {
        parentCommentId: item.pid,
        content: item.content,
        userId: this.loginInfo.userId,
        goodsId: this.$route.params.id
      }
      addReply(cid).then(res => {
        this.$message.success(res.data.msg)
        this.getReply();
      })

    },
    getReply() {
      getReply(this.$route.params.id).then(res => {
        this.commentDatas = res.data.data
        this.commentDatas.forEach(item => {
          if (item.parent_comment_id == '') {
            item.parent_comment_id = null
          }
        })
      })
    },
    getFav() {
      let jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        if (this.loginInfo) {
          //查询收藏
          queryFav({goodsId: this.$route.params.id, userId: this.loginInfo.userId}).then(res => {
            if (res.data.msg == 'ok') {
              this.showFav = false
            }
          })
        }
      }

    }
    ,

    buyGoods(goodsId) {
      this.$router.push({path: '/order/' + goodsId})
    }
    ,
    changeShowFav() {
      this.showFav = !this.showFav
      if (!this.showFav) {
        addFav({goodsId: this.goods.goodsId, userId: this.loginInfo.userId}).then(res => {
          this.$message.success("已收藏")
        })
      }
      if (this.showFav) {
        removeFav({goodsId: this.goods.goodsId, userId: this.loginInfo.userId}).then(res => {
          this.$message.success("已取消")
        })
      }
    }
    ,

    showInfo() {
      let jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    }
    ,
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style>
.level1 {
  margin-left: 0px;
}

.level2 {
  margin-left: 40px;
  border-left: 3px solid #339BD5;
  padding-left: 10px;
}

.level3 {
  margin-left: 80px;
  border-left: 3px solid #339BD5;
  padding-left: 10px;
}
</style>
