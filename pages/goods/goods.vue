<template>
  <div>
    <div id="aCoursesList" class="bg-fa of">
      <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 50px">
      </el-page-header>
      <section class="container">
        <header class="comm-title">
          <h2 class="fl tac">
            <span class="c-333">全部商品</span>
          </h2>
        </header>
        <!--      类别-->
        <section class="c-sort-box">
          <section class="c-s-dl">
            <dl>
              <dt>
                <span class="c-999 fsize14">商品类别</span>
              </dt>
              <dd class="c-s-dl-li">
                <ul class="clearfix">
                  <li>
                    <a :class="{active:oneIndex == -1}" title="全部" href="#" @click="getGoods(1)">全部</a>
                  </li>
                  <li v-for="(category,index) in categoryList" :key="index" :class="{active:oneIndex==index}">
                    <a
                      :title="category.categoryName"
                      href="#"
                      @click="getGoodsByCategoryId(category.categoryId , index,1)">{{ category.categoryName }}</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <div class="clear"/>
          </section>
          <div class="mt40">
            <!-- /无数据提示 开始-->
            <section v-if="goodsList == null" class="no-data-wrap">
              <em class="icon30 no-data-ico">&nbsp;</em>
              <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
            </section>
            <!-- /无数据提示 结束-->
            <article v-if="goodsList != null" class="comm-course-list">

              <!--列表-->
              <div v-for="(good) in goodsList" :key="good.goodsId" class="main">
                <div class="item-list">
                  <div class="item-list tip_empty">
                    <div class="item-box">
                      <div class="item-box_imageContainer"><a :href="'/goods/'+good.goodsId"><img
                        :src="good.goodsPicture1"
                        :alt="good.goodsName"
                        style="height: 200px;width: 300px"
                        class="cover"
                        width="300"></a>
                      </div>
                      <div class="item-box_content">
                        <h3><a class="item-box_title" :href="'/goods/'+good.goodsId">{{ good.goodsName }}</a></h3>
                        <div class="intro">
                          {{ good.goodsDescribe }}
                        </div>
                      </div>
                      <div class="item-box_footer">
                        <div class="item-box_detailsItem"><i
                          class="icon icon-rl sm"/>上传时间：{{ good.createTime.substring(0, 10) }}
                        </div>
                        <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>商品价格: ￥{{
                            good.goodsPrice
                          }}
                        </div>
                        <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                          class="icon icon-guanzhu big_24"
                          title="点击收藏"/></a></div>
                        <div class="item-box_alignBottom">
                          <a
                            :href="'/goods/'+good.goodsId"
                            class="btn_down"
                          >详情</a>
                          <div
                            class="btn_preview"
                            href="#"

                            @click="add(good)">{{ good.goodsState }}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pagemain"/>
                </div>

                <div class="clear"/>
              </div>
            </article>
          </div>
          <!-- 公共分页 开始 -->
          <el-pagination
            :current-page="page"
            :page-size="limit"
            :total="total"
            style="padding: 30px 0; text-align: center;"
            layout="total, prev, pager, next, jumper"
            @current-change="pageList"
          />
          <!-- 公共分页 结束 -->
        </section>
      </section>
      <!-- /课程列表 结束 -->
    </div>
  </div>
</template>
<script>
import {goodsList} from '@/api/goods'
import {categoryList} from '@/api/category'
import {addCart, listByCart, removeCart, removeCartById, updateOrSaveCart} from "@/api/cart";
import {getLoginInfo} from "@/api/loginInfo";
import cookie from "js-cookie";

export default {
  data() {
    return {
      goodsName: '',
      searchObj: {}, // 查询表单对象
      // 类别
      categoryList: [],
      goodsList: [],
      cartList: [],
      oneIndex: -1,
      buyCountSort: '',
      gmtCreateSort: '',
      page: 1, // 页数
      limit: 8, // 数据量
      total: 0, // 总记录数
      users: {}, // 条件封装对象
      category: {
        categoryId: undefined,
        categoryName: undefined,
        categoryDescribe: undefined,
        createTime: undefined,
        updateTime: undefined
      },
      good: {
        goodsId: undefined,
        goodsName: undefined,
        goodsPrice: undefined,
        categoryId: undefined,
        categoryName: undefined,
        sellerID: undefined,
        sellerName: undefined,
        goodsDescribe: undefined,
        goodsState: undefined,
        goodsPicture1: undefined,
        createTime: undefined,
        updateTime: undefined
      },
      loginInfo: {},
      isExist: false
    }
  },
  created() {
    this.showInfo()
    // 查询所有商品
    this.getGoods()

    // 显示分类
    this.getCategory()
    //修改cart状态
  },

  watch: {
    $route(to, from) {
      if (from.query.goodsName != to.query.goodsName) {
        this.getGoods(1)
      }
    },
  },

  methods: {

    add(item) {
      //为加入购物车才可用
      if (item.goodsState == '加入购物车') {
        addCart({userId: this.loginInfo.userId, goodsId: item.goodsId, sellerId: item.sellerID}).then(res => {
          this.$message.success("加入成功")
          item.goodsState = '已加入'
        })
      } else {
        removeCart(item.goodsId, this.loginInfo.userId).then(res => {
          this.$message.success("已移除!")
          item.goodsState = '加入购物车'
        })
      }
    },
    // 1 查询第一页数据
    getGoods(pageNum) {
      if (pageNum !== undefined) {
        this.page = pageNum
      }
      this.oneIndex = -1
      //状态可用的数据
      if (this.$route.query.goodsName) {
        this.searchObj = {goodsState: 'true', goodsName: this.$route.query.goodsName}
      } else {
        this.searchObj = {goodsState: 'true'}
      }
      goodsList(this.page, this.limit, this.searchObj).then(response => {
        listByCart({userId: this.loginInfo.userId}).then(res => {
          this.cartList = res.data.data
          this.total = response.data.data.total
          this.goodsList = response.data.data.rows
          this.cartList = res.data.data
          if (this.goodsList) {
            this.goodsList.forEach(item => {
              item.goodsState = "加入购物车"
              if (this.cartList) {
                this.cartList.forEach(cart => {
                  if (item.goodsId == cart.goodsId) {
                    item.goodsState = '已加入'
                  }
                })
              }
            })
          }
        })

        location.href = '#top'
      })
    },

    // 2 查询所有分类
    getCategory() {
      categoryList(-1, -1, {})
        .then(response => {
          this.categoryList = response.data.data.rows
        })
    },
    // 3.通过类别查询商品
    getGoodsByCategoryId(id, index, pageNum) {
      this.page = pageNum
      this.oneIndex = index
      this.searchObj.categoryId = id
      goodsList(this.page, this.limit, this.searchObj).then(response => {
        listByCart({userId: this.loginInfo.userId}).then(res => {
          this.cartList = res.data.data
          this.total = response.data.data.total
          this.goodsList = response.data.data.rows
          this.cartList = res.data.data
          if (this.goodsList) {
            this.goodsList.forEach(item => {
              item.goodsState = "加入购物车"
              if (this.cartList) {
                this.cartList.forEach(cart => {
                  if (item.goodsId == cart.goodsId) {
                    item.goodsState = '已加入'
                  }
                })
              }
            })
          }
        })
        // 将页面定位到开头
        location.href = '#top'
      })
    },
    pageList(val) {
      this.page = val
      if (this.oneIndex === -1) {
        this.getGoods()
      } else {
        this.getGoodsByCategoryId(this.searchObj.categoryId, this.oneIndex)
      }
    },
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        if (!this.loginInfo.userAddress && !this.loginInfo.userEmail) {
        }
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}

</script>
<style scoped>
.active {
  background: #bdbdbd;
}

.hide {
  display: none;
}

.show {
  display: block;
}

/*列表*/
.main {
  width: 1000px;
  margin: 0 auto;
  clear: both;
  position: relative;
}

.item-list,
.item-list2 {
  margin-top: 5px;
}

* {
  word-wrap: break-word;
  font-family: 微软雅黑;
  font-size: 13px;
  color: #444;
  outline: none;
}

div {
  display: block;
}

.item-box {
  position: relative;
  margin: 16px 0;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 16px #ccc;
  overflow: hidden;
  background-color: #fff;
}

.item-box_imageContainer {
  width: 300px;
  float: left;
}

.tagList-module {
  overflow: hidden;
  width: 300px;
  height: 19px;
}

.item-box_content {
  color: #999;
  font-size: 12px;
  overflow: hidden;
  margin-left: 20px;
  padding-right: 10px;
}

.item-box_content {
  width: 290px;
  float: left;
}

.item-box_title {
  max-height: 2.6em;
  margin-bottom: 0;
  color: #262626;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.item-box_category {
  margin-top: 16px;
  margin-bottom: 16px;
}

.item-box_content .intro {
  color: #787878;
  font-size: 13px;
}

.item-box_footer {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 2 0;
  flex: 2 0;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 20px;
  border-left: 5px solid #e6e6e6;
  padding-top: 30px;
}

.item-box_footerButtons {
  position: absolute;
  top: 0;
  right: 0;
}

.btn_like {
  float: right;
  margin-top: 5px;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon.big_24 {
  font-size: 24px;
}

.icon {
  font-size: 18px;
  margin-left: 2px;
  margin-right: 2px;
}

.item-box_alignBottom {
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  margin-top: 50px;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.item-box_alignBottom .btn_down {
  height: 26px;
  line-height: 26px;
  background: #fff;
  font-size: 12px;
  border: 1px solid #f1f1f1;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .12);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);
  color: #666;
  width: 50px;
  border-radius: 50px;
  text-align: center;
  margin-right: 5px;
}

.item-box_alignBottom .btn_preview {
  height: 26px;
  line-height: 26px;
  background: #fff;
  font-size: 12px;
  border: 1px solid #f1f1f1;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .12);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);
  color: #666;
}

.btn_preview,
.btn_cart {
  margin-left: 5px;
  position: relative;
  width: 80px;
  background-color: #fff;
  border: 1px solid #00c7e1;
  color: #00c7e1;
  height: 32px;
  line-height: 32px;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  border-radius: 18px;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.index_more {
  text-align: center;
}

.btn_com.light {
  background: #dcf6fa;
  border: 1px solid #00c7e1;
  color: #00c7e1;
}

.btn_com {
  display: inline-block;
  width: 94px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  text-shadow: none;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  border-radius: 18px;
  background-color: #00c7e1;
  box-shadow: 0 2px 4px 0 rgb(0 188 212 / 28%);
  border: solid 3px rgba(255, 255, 255, .4);
}
</style>
