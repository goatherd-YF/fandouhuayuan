<template>
  <div>
    <div>
      <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 25px">
      </el-page-header>
      <div style="margin: 0px 10px 10px 200px;font-size: larger">
        个人中心
      </div>
      <el-tabs tab-position="left" style="height:900px;margin-bottom: 30px; margin-left: 200px ;margin-top: 20px">
        <!--      我的信息完成-->
        <el-tab-pane label="我的信息">
          <MyMessage/>
        </el-tab-pane>
        <!--      我的收藏-->
        <el-tab-pane label="我的收藏" class="mypane">
          <h3 style="margin-top: 30px;margin-left: 50px">我的收藏</h3>
          <div v-if="favList == null || favList.length == 0">
            <div style="margin-left: 100px">您的收藏为空</div>
          </div>
          <div v-for="(good,index) in favList" :key="index" class="main">
            <div class="item-list">
              <div class="item-list tip_empty">
                <div class="item-box">
                  <div class="item-box_imageContainer"><a :href="'../goods/'+good.goodsId"><img
                    :src="good.goodsPicture1"
                    :alt="good.goodsName"
                    style="height: 200px;width: 250px"
                  ></a>
                  </div>
                  <div class="item-box_content">
                    <h3><a class="item-box_title" :href="'../goods/'+good.goodsId">{{
                        good.goodsName
                      }}</a></h3>
                    <div class="intro">
                      {{ good.goodsDescribe }}
                    </div>
                  </div>
                  <div class="item-box_footer">
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>上传时间：{{ good.createTime.substring(0, 10) }}
                    </div>
                    <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>商品价格: ￥{{ good.goodsPrice }}
                    </div>
                    <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                      class="icon icon-guanzhu big_24"
                      title="点击收藏"/></a></div>
                    <div class="item-box_alignBottom">
                      <a
                        class="btn_down"
                        :href="'../goods/'+good.goodsId"
                      >详情</a>
                      <div
                        class="btn_preview"
                        @click="removeFav(good)"
                      >删除
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!--      我的购物车-->
        <el-tab-pane label="我的购物车" class="mypane">
          <h3 style="margin-top: 30px;margin-left: 50px">我的购物车</h3>
          <el-button type="success" @click="buyGoods" style="float: right;margin-right: 100px;margin-bottom: 50px">购买
          </el-button>
          <div style="float: right ;margin-top: 30px;margin-right: 50px">点击选择购买</div>
          <div v-if="cartList == null || cartList.length==0 ">
            <div style="margin-left: 100px">您的购物车为空</div>
          </div>
          <el-checkbox-group v-model="buyList">
            <div v-for="(good,index) in cartList" :key="index" class="main">
              <el-checkbox :label="good.cartId"
                           :true-label="good.cartId"
                           :false-label="good.cartId" @change="addGoodsId"
                           style="float: left;margin-top: 100px; margin-right: 50px;" border>选择
              </el-checkbox>
              <div class="item-list">
                <div class="item-list tip_empty">
                  <div class="item-box">
                    <div class="item-box_imageContainer"><a :href="'../goods/'+good.goodsId"><img
                      :src="good.goodsPicture1"
                      :alt="good.goodsName"
                      style="height: 200px;width: 250px"
                    ></a>
                    </div>
                    <div class="item-box_content">
                      <h3><a class="item-box_title" :href="'../goods/'+good.goodsId">{{
                          good.goodsName
                        }}</a></h3>
                      <div class="intro">
                        {{ good.goodsDescribe }}
                      </div>
                    </div>
                    <div class="item-box_footer">
                      <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                        class="icon icon-rl sm"/>上传时间：{{ good.createTime.substring(0, 10) }}
                      </div>
                      <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>商品价格: ￥{{ good.goodsPrice }}
                      </div>
                      <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                        class="icon icon-guanzhu big_24"
                        title="点击收藏"/></a></div>
                      <div class="item-box_alignBottom">
                        <a
                          class="btn_down"
                          :href="'../goods/'+good.goodsId"
                        >详情</a>
                        <div
                          class="btn_preview"
                          @click="removeCart(good)"
                        >删除
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-checkbox-group>
        </el-tab-pane>
        <!--      我的购买-->
        <el-tab-pane label="我的购买" class="mypane">
          <h3 style="margin-top: 30px;margin-left: 50px">我的购买</h3>
          <div v-if="orderList == null || orderList.length == 0">
            <div style="margin-left: 100px">您没有购买过商品</div>
          </div>
          <div v-for="(good,index) in orderList" :key="index" class="main">
            <div class="item-list">
              <div class="item-list tip_empty">
                <div class="item-box">
                  <div class="item-box_imageContainer"><a :href="'../goods/'+good.goodsId"><img
                    :src="good.goodsPicture1"
                    :alt="good.goodsName"
                    style="height: 250px;width: 250px"
                  ></a>
                  </div>
                  <div class="item-box_content">
                    <h3><a class="item-box_title" :href="'../goods/'+good.goodsId">{{
                        good.goodsName
                      }}</a></h3>
                    <div class="intro">
                      {{ good.goodsDescribe }}
                    </div>
                  </div>
                  <div class="item-box_footer">
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>订单号：{{ good.orderNum }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易数量：{{ good.orderShu }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易时间：{{ good.orderTime }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易地点：{{ good.orderAddress }}
                    </div>
                    <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>订单价格: ￥{{ good.goodsPrice }}
                    </div>
                    <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                      class="icon icon-guanzhu big_24"
                      title="点击收藏"/></a></div>
                    <div class="item-box_alignBottom">
                      <a
                        class="btn_preview" style="margin-right: 10px"
                        :href="'../goods/'+good.goodsId"
                      >再次购买</a>
                      <div @click="twoPay(good.orderNum)"
                           v-if="good.orderState=='未支付'"
                           class="btn_preview"
                      > {{ good.orderState=='未支付' ?'点击支付 ': good.orderState }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!--      我卖的商品  -->
        <el-tab-pane label="我的售卖">
          <h3 style="margin-top: 30px;margin-left: 50px">我的售卖</h3>
          <div v-if="sellerOrderList == null || orderList.length == 0">
            <div style="margin-left: 100px">您没有卖出过商品</div>
          </div>
          <div v-for="(good,index) in sellerOrderList" :key="index" class="main">
            <div class="item-list">
              <div class="item-list tip_empty">
                <div class="item-box">
                  <div class="item-box_imageContainer"><a :href="'../goods/'+good.goodsId"><img
                    :src="good.goodsPicture1"
                    :alt="good.goodsName"
                    style="height: 250px;width: 250px"
                  ></a>
                  </div>
                  <div class="item-box_content">
                    <h3><a class="item-box_title" :href="'../goods/'+good.goodsId">{{
                        good.goodsName
                      }}</a></h3>
                    <div class="intro">
                      {{ good.goodsDescribe }}
                    </div>
                  </div>
                  <div class="item-box_footer">
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>订单号：{{ good.orderNum }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易数量：{{ good.orderShu }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易时间：{{ good.orderTime }}
                    </div>
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>交易地点：{{ good.orderAddress }}
                    </div>
                    <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>订单价格: ￥{{ good.goodsPrice }}
                    </div>
                    <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                      class="icon icon-guanzhu big_24"
                      title="点击收藏"/></a></div>
                    <div class="item-box_alignBottom">
                      已交易？点击确认
                      <div @click="fahuole(index)"
                           class="btn_preview"
                      >{{ good.orderState }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的商品" class="mypane">
          <h3 style="margin-top: 30px;margin-left: 50px">我的商品</h3>
          <div v-if="goodsList== null || goodsList.length == 0">
            <div style="margin-left: 100px">您还没有商品</div>
          </div>
          <div v-for="(good,index) in goodsList" :key="index" class="main">
            <div class="item-list">
              <div class="item-list tip_empty">
                <div class="item-box">
                  <div class="item-box_imageContainer"><a :href="'../goods/'+good.goodsId" target="_blank"><img
                    :src="good.goodsPicture1"
                    :alt="good.goodsName"
                    style="height: 200px;width: 250px"
                  ></a>
                  </div>
                  <div class="item-box_content">
                    <h3><a class="item-box_title" :href="'../goods/'+good.goodsId">{{
                        good.goodsName
                      }}</a></h3>
                    <div class="intro">
                      {{ good.goodsDescribe }}
                    </div>
                  </div>
                  <div class="item-box_footer">
                    <div class="item-box_detailsItem" style="margin-bottom: 7px"><i
                      class="icon icon-rl sm"/>上传时间：{{ good.createTime.substring(0, 10) }}
                    </div>
                    <div class="item-box_detailsItem"><i class="icon icon-wenjianbao sm"/>商品价格: ￥{{ good.goodsPrice }}
                    </div>
                    <div class="item-box_footerButtons"><a class="circleButton btn_like" _id="12110"><i
                      class="icon icon-guanzhu big_24"
                      title="点击收藏"/></a></div>
                    <div class="item-box_alignBottom">
                      <a
                        class="btn_down"
                        :href="'../goods/'+good.goodsId"
                      >详情</a>
                      <div
                        class="btn_down"
                        @click="updateMyGoods(index)"
                      >修改
                      </div>
                      <div
                        class="btn_down"
                        @click="deleteMyGoods(index)"
                      >删除
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="发布商品">
          <el-button type="primary" style="margin-top: 30px;margin-left: 50px" @click="dialogVisible = true">发布商品
          </el-button>
        </el-tab-pane>
        <el-dialog
          title="发布商品"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <div class="app-container">
            <el-form label-width="auto" :rules="rules" :model="goodsForm" :ref="goodsForm">
              <el-form-item label="商品名称">
                <el-input v-model="goodsForm.goodsName" maxlength="50" show-word-limit/>
              </el-form-item>
              <el-form-item
                label="商品价格"
                prop="goodsPrice">
                <el-input v-model.number="goodsForm.goodsPrice"/>
              </el-form-item>
              <el-form-item
                label="商品数量"
                prop="num">
                <el-input v-model.number="goodsForm.num"/>
              </el-form-item>


              <!--              <el-form-item label="卖家名称">-->
              <!--                <el-select v-model="goodsForm.sellerId" clearable placeholder="请选择卖家名称">-->
              <!--                  <el-option-->
              <!--                    v-for="item in users"-->
              <!--                    :key="item.userId"-->
              <!--                    :label="item.userName"-->
              <!--                    :value="item.userId">-->
              <!--                  </el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->

              <el-form-item label="商品类别">
                <el-select v-model="goodsForm.categoryId" clearable placeholder="请选择">
                  <el-option
                    v-for="item in categorys"
                    :key="item.categoryId"
                    :label="item.categoryName"
                    :value="item.categoryId">
                  </el-option>
                </el-select>
              </el-form-item>
              <!--     图片上传-->
              <el-form-item label="商品图片">
                <el-upload
                  class="upload-demo"
                  action="http://localhost:9528/dev-api/oss/fileOss"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-success="successUpload"
                  :on-change="changeUpload"
                  :show-file-list="false"
                  :limit="3"
                  list-type="picture">
                  <img v-if="goodsForm.goodsPicture1" :src="goodsForm.goodsPicture1" class="avatar">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="商品描述">
                <el-input v-model="goodsForm.goodsDescribe" :rows="10" type="textarea" maxlength="200"
                          show-word-limit/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="margin-left: 300px"
                           @click="cancel(goodsForm)">取消
                </el-button>
                <el-button :disabled="saveBtnDisabled" type="primary"
                           @click="saveOrUpdate(goodsForm)">保存
                </el-button>

              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import MyMessage from '@/pages/center/myMessage'
import cookie from 'js-cookie'
import {goodsBySellerId, removeGoodsById, updateOrSaveGoods} from '@/api/goods'
import {listByCart, removeCart, removeCartById} from '@/api/cart'
import {listByOrder, updateFaState} from '@/api/order'
import Show from "@/components/show";
import {categoryList} from "@/api/category";
import {userList} from "@/api/user";
import {listFav, removeFav} from "@/api/fav";
import {twoPay} from "@/api/pay";

export default {
  name: 'Center',
  components: {Show, MyMessage},

  data() {
    return {
      checked: false,
      unchecked: true,
      buyList: [],
      loginInfo: {},
      goodsList: [],
      cartList: [],
      orderList: [],
      sellerOrderList: [],
      favList: [],
      dialogVisible: false,
      fileList: [],
      categorys: [],
      goodsForm: {
        goodsState: true,
        goodsPicture1: undefined,
        goodsPicture2: undefined,
        goodsPicture3: undefined,
      },
      saveBtnDisabled: false,//按钮是否禁用
      categoryList: undefined,
      users: [],
      rules: {
        goodsPrice: [
          {
            required: true,
            message: "价格不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            message: "价格必须为数字值",
            trigger: "blur"
          }
        ]
      }

    }
  },
  created() {
    this.showInfo()
    // 没登陆，跳转到登录页
    if (!this.loginInfo.userId) {
      this.$router.push('../login')
    }
    // 获取用户商品列表
    this.getGoodsList()
    // 获取用户购物车列表
    this.getCartList()
    // 获取用户订单列表
    this.getMyBuyOrderList() //我购买的
    this.getMyOwnOrderList() //我出售的
    this.getFavList()

    this.showCategoryList();

    //获取用户
    userList(-1, -1, undefined).then(res => {
      this.users = res.data.data.rows
    }).catch(error => console.log("获取用户列表失败"))
  },
  methods: {
    //未支付再次支付
    twoPay(orderNum){
      this.$router.push({path: '/pay/twoPay',query:{orderNum}})
    },

    fahuole(index) {
      id(this.sellerOrderList[index].orderState == "未发货")
      {
        this.sellerOrderList[index].orderState = "已发货"
        updateFaState(this.sellerOrderList[index].orderId).then(res => {
          this.$message.success("修改成功")
        })
      }
    },

    shouhuole(index) {
      id(this.orderList[index].orderState == "已发货")
      {
        this.orderList[index].orderState = "已收货"
        updateFaState(this.sellerOrderList[index].orderId).then(res => {
          this.$message.success("修改成功")
        })
      }
    },

    cancel() {
      this.dialogVisible = false
      this.goodsForm = {}
    },

    //删除我的商品
    deleteMyGoods(index) {
      console.log(index, "delete")
      var id = this.goodsList[index].goodsId
      removeGoodsById(id).then(res => {
        this.$message.success("删除成功")
      })
    },
    //更新我的商品
    updateMyGoods(index) {
      console.log(index, "update")
      this.dialogVisible = true
      this.goodsForm = this.goodsList[index]
    },
    addGoodsId(val) {
      console.log(val, "change")
      //标记法
      let flag = 0
      for (let i = 0; i < this.buyList.length; i++) {
        if (this.buyList[i] == val) {
          flag = 1
          this.buyList.splice(i, 1)
        }
      }
      if (flag == 0) {
        this.buyList.push(val)
      }
      console.log(this.buyList, "this.buyList")
    },
    //购买商品
    buyGoods() {
      //购买商品
      //串行传输
      if (this.buyList.length != 0) {
        let myStr = JSON.stringify(this.buyList)
        this.$router.push({path: "/order/moreOrder", query: {myStr}});
      } else {
        this.$message.error("请选择商品")
      }
    },
    //删除收藏
    removeFav(item) {
      removeFav({goodsId: item.goodsId, userId: this.loginInfo.userId}).then(res => {
        this.favList = this.favList.filter(good => good.goodsId != item.goodsId)
        this.$message.success("删除成功")
      })
    },
    //删除购物车
    removeCart(item) {
      removeCart(item.cartId).then(res => {
        this.$message.success("已移除!")
        this.cartList = this.cartList.filter(goods => {
          this.$message.success("删除成功")
          return goods.goodsId != item.goodsId
        })
      })
    },
    handleClose() {
      this.dialogVisible = false
    },
    getFavList() {
      listFav({userId: this.loginInfo.userId}).then(response => {
        this.favList = response.data.data
      })
    },

    getGoodsList() {
      goodsBySellerId({sellerId: this.loginInfo.userId}).then(response => {
        this.goodsList = response.data.data
      })
    },
    getCartList() {
      listByCart({userId: this.loginInfo.userId}).then(response => {
        this.cartList = response.data.data
      })
    },
    //我买的
    getMyBuyOrderList() {
      listByOrder({userId: this.loginInfo.userId}).then(response => {
        this.orderList = response.data.data
      })
    },
    //我出售的
    getMyOwnOrderList() {
      listByOrder({sellerId: this.loginInfo.userId}).then(response => {
        this.sellerOrderList = response.data.data
      })
    },
    // 登录人信息
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },
    //todo 添加商品信息
    insertGoods() {
      //  获取相关信息
      //  发送请求
      //  返回结果
      //  关闭弹窗
    },
    showCategoryList() {
      categoryList(-1, -1, undefined).then(
        response => {
          this.categorys = response.data.data.rows;
        }
      )
    },
    saveOrUpdate() {
      this.saveBtnDisabled = true;//让保存按钮不可多次点击
      this.dialogVisible = false
      //将fileList的值转换为picture

      //添加商品信息
      updateOrSaveGoods(this.goodsForm).then(
        response => {
          this.$message({//提示信息
            type: 'success',
            message: response.data.msg

          });
          this.saveBtnDisabled = false;

        }
      )
      //重新加载页面
      location.reload()
    },
    //  图片上传
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
      file.name = "Picture"
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    changeUpload(file) {
      file.name = "Picture";
    },
    successUpload(res, file) {
      this.goodsForm.goodsPicture1 = res.data.url
    },
    goBack() {
      console.log("11111111")
      this.$router.go(-1);
    }

  }
}
</script>

<style scoped>
.mypane {
  height: 700px;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 10px; /*对垂直流动条有效*/
  height: 10px; /*对水平流动条有效*/
}

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
  width: 1100px;
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
  font-size: 16px;
  color: #444;
  outline: none;
  margin-left: 5px;
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
  margin-left: 10px;
  margin-right: 10px;
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
