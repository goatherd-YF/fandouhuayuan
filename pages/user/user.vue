<template>
  <div id="aCoursesList" class="bg-fa of">
    <el-page-header @back="goBack"  style="margin-left: 50px;margin-top: 50px">
    </el-page-header>
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部用户</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="全部" href="#">全部</a>
          <!-- <c:forEach var="subject" items="${subjectList }">
          <a id="${subject.subjectId}"
          title="${subject.subjectName }" href="javascript:void(0)"
          onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section v-if="list == null" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理
            中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="i-teacher-list">
            <ul class="of">
              <li v-for="user in list" :key="user.userId">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :title="user.userName" :href="'/user/'+user.userId" >
                      <img :src="user.avatar" :alt="user.userName">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a
                      :title="user.userName"
                      :href="'/user/'+user.userId"
                      class="fsize18 c-666">{{ user.userName }}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{ user.userDescribe }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ user.userLevel }}</p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear"/>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <el-pagination
          :current-page="page"
          :page-size="limit"
          :total="total"
          style="padding: 30px 0; text-align: center;"
          layout="total, prev, pager, next, jumper"
          @current-change="getList"
        />
      <!-- 公共分页 结束 -->
      </section>
    </section>
  <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import { userList } from '@/api/user'

export default {
  data() {
    return {
      list: null, // 结果
      page: 1, // 页数
      limit: 8, // 数据量
      total: 0, // 总记录数
      users: {}// 条件封装对象
    }
  },
  created() {
    // 调用
    this.getList()
  },
  methods: { // 创建具体的方法
    // 查询数据
    getList(page = 1) {
      this.page = page
      userList(this.page, this.limit, this.user)
        .then(response => {
          // request success
          // response接口返回数据
          this.list = response.data.data.rows
          this.total = response.data.data.total
        }).catch(error=>{
          console.log(error,"user.vue.99")
      })

    },
    goBack(){
      this.$router.go(-1);
    }

}
}
</script>
