<template>

  <div>
    <div style="margin: 10px 10px 10px 50px;font-size: larger">
      个人中心
    </div>
    <el-tabs tab-position="left" style="height:900px;margin-bottom: 30px; margin-left: 50px ;margin-top: 20px">
      <!--      我的信息完成-->
      <el-tab-pane label="我的信息">
        <MyMessage/>
      </el-tab-pane>
      <!--      我的购物车-->
      <el-tab-pane label="我的购物车" class="mypane">
        <h3 style="margin-top: 30px;margin-left: 50px">我的购物车</h3>
        <div v-if="goodsList == null">
          <h3>您的购物车没有物品</h3>
        </div>
        <div v-for="(good) in cartList" :key="good.goodsId" class="main">
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
                  <h3><a class="item-box_title" :href="'../goods/'+good.goodsId" target="_blank">{{
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
                      target="_blank">详情</a>
                    <div
                      class="btn_preview"
                      @click="removeCart(good)"
                      target="_blank">删除
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的订单" class="mypane">
        <h3 style="margin-top: 30px;margin-left: 50px">我的订单</h3>
        <div v-for="(good) in orderList" :key="good.goodsId" class="main">
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
                  <h3><a class="item-box_title" :href="'../goods/'+good.goodsId" target="_blank">{{
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
                      target="_blank">详情</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的商品" class="mypane">
        <h3 style="margin-top: 30px;margin-left: 50px">我的商品</h3>
        <div v-for="(good) in goodsList" :key="good.goodsId" class="main">
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
                  <h3><a class="item-box_title" :href="'../goods/'+good.goodsId" target="_blank">{{
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
                      target="_blank">详情</a>
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


        <el-dialog
          title="发布商品"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">

          <div class="app-container">
            <el-form label-width="auto" :rules="rules" :model="goodsForm" :ref="goodsForm">
              <el-form-item label="商品名称">
                <el-input v-model="goodsForm.goodsName" maxlength="10" show-word-limit/>
              </el-form-item>
              <el-form-item
                label="商品价格"
                prop="goodsPrice">
                <el-input v-model.number="goodsForm.goodsPrice"/>
              </el-form-item>

              <el-form-item label="卖家名称">
                <el-select v-model="goodsForm.sellerId" clearable placeholder="请选择卖家名称">
                  <el-option
                    v-for="item in users"
                    :key="item.userId"
                    :label="item.userName"
                    :value="item.userId">
                  </el-option>
                </el-select>
              </el-form-item>

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
                  :file-list="fileList"
                  :limit="3"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="商品描述">
                <el-input v-model="goodsForm.goodsDescribe" :rows="10" type="textarea" maxlength="200" show-word-limit/>
              </el-form-item>
              <el-form-item>
                <el-button :disabled="saveBtnDisabled" type="primary"
                           @click="saveOrUpdate(goodsForm)">保存
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>
<script>
import MyMessage from '@/pages/center/myMessage'
import AboutGoods from '@/pages/center/aboutGoods'
import cookie from 'js-cookie'
import {goodsBySellerId, updateOrSaveGoods} from '@/api/goods'
import {listByCart, removeCart, removeCartById} from '@/api/cart'
import {listByOrder} from '@/api/order'
import Show from "@/components/show";
import {categoryList} from "@/api/category";
import {userList} from "@/api/user";

export default {
  name: 'Center',
  components: {Show, AboutGoods, MyMessage},
  data() {
    return {
      loginInfo: {},
      goodsList: [],
      cartList: [],
      orderList: [],
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
    this.getOrderList()

    this.showCategoryList();

    //获取用户
    userList(-1, -1, undefined).then(res => {
      this.users = res.data.data.rows
    }).catch(error => console.log("获取用户列表失败"))
  },
  methods: {
    removeCart(item) {
      removeCart(item.goodsId, this.loginInfo.userId).then(res => {
        this.$message.success("已移除!")
        this.cartList = this.cartList.filter(goods => {
          return goods.goodsId != item.goodsId
        })
      })
    },
    handleClose() {
      this.dialogVisible = false
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
    getOrderList() {
      listByOrder({userId: this.loginInfo.userId}).then(response => {
        this.orderList = response.data.data
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
      debugger
      if (this.fileList[0]) {
        this.goodsForm.goodsPicture1 = this.fileList[0].url;
      }
      if (this.fileList[1]) {
        this.goodsForm.goodsPicture2 = this.fileList[1].url;
      }
      if (this.fileList[2]) {
        this.goodsForm.goodsPicture3 = this.fileList[2].url;
      }
      //添加商品信息
      updateOrSaveGoods(this.goodsForm).then(
        response => {
          this.$message({//提示信息
            type: 'success',
            message: response.data.msg

          });
          this.saveBtnDisabled = false;
          this.$router.push('/goods/goodsList')
        }
      )
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
      this.fileList.push({name: "Picture", url: res.data.url});
      0
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
  width: 900px;
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
