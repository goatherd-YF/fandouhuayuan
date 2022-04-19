<template>
  <div>
    <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 25">
    </el-page-header>
    <div class="mt40">
      <!-- /无数据提示 开始-->
      <section v-if="msgList == null" class="no-data-wrap">
        <em class="icon30 no-data-ico">&nbsp;</em>
        <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
      </section>
      <!-- /无数据提示 结束-->
      <article v-if="msgList != null" class="comm-course-list">

        <!--列表-->
        <div v-for="myMsg in msgList" :key="myMsg.messageId" class="main">
          <a :title=" myMsg.myType" :href="'/sysMessage/'+myMsg.messageId">
            <div class="systemInfo">
              <div class="title">
                <img src="./QQ图片20220410003719.png" class="pic" alt="">
                <div class="title_info">
                  <div class="big_title">[<span style="color: red"> {{ myMsg.myType }} </span>]<span
                    style="padding-left: 10px">{{ myMsg.messageTopical }}</span></div>
                  <div style="margin-left: 30px;width: 800px; height:px;ext-overflow: ellipsis;
              overflow: hidden;">{{ myMsg.messageContent }}！
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </article>
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
    </div>
  </div>
</template>

<script>
import {sysMessageList} from "@/api/sysMessage";

export default {
  name: 'SysMessage',
  data() {
    return {
      msgList: [],
      page: 1, // 页数
      limit: 8, // 数据量
      total: 0, // 总记录数

    }
  },
  created() {
    this.getMsgList()
  },
  methods: {
    getMsgList() {
      sysMessageList(this.page, this.limit, {}).then(res => {
        this.msgList = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    pageList(val) {
      this.page = val
      sysMessageList(this.page, this.limit, {}).then(res => {
        this.msgList = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.page12 {
  width: 100%;
  height: 80%;
}

.systemInfo {
  width: 100%;
  height: 100px;
  margin: 30px 0px;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  /*height: 26px;*/
  /*line-height: 26px;*/
  /*background: #fff;*/
  /*font-size: 12px;*/
  /*border: 1px solid #f1f1f1;*/
  /*-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);*/
  /*-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .12);*/
  /*box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);*/
  /*color: #666;*/
  /*width: 50px;*/
  /*border-radius: 50px;*/
  /*text-align: center;*/
  /*margin-right: 5px;*/
}

.pic {
  width: 90px;
  height: 90px
}

.title {
  display: flex;
  background: #fff;
  font-size: 12px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 12%);
  color: #666;
  width: 60%;
  height: 100px;
  text-align: center;
  align-items: center;
}

.title_info {
  display: flex;
  flex-direction: column;

}

.big_title {
  margin-left: 30px;
  font-size: 24px;
  cursor: pointer;
}

</style>
