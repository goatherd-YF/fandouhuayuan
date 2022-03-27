<template>
  <div id="aCoursesList" class="bg-fa of">
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
                    <a :title="user.userName" :href="'/user/'+user.userId" target="_blank">
                      <img :src="user.avatar" :alt="user.userName">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a
                      :title="user.userName"
                      :href="'/user/'+user.userId"
                      target="_blank"
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
            <!--              <li>-->
            <!--                <section class="i-teach-wrap">-->
            <!--                  <div class="i-teach-pic">-->
            <!--                    <a href="/teacher/1" title="谢娜" target="_blank">-->
            <!--                      <img src="~/assets/photo/teacher/1442297919077.jpg" alt>-->
            <!--                    </a>-->
            <!--                  </div>-->
            <!--                  <div class="mt10 hLh30 txtOf tac">-->
            <!--                    <a-->
            <!--                      href="/teacher/1"-->
            <!--                      title="谢娜"-->
            <!--                      target="_blank"-->
            <!--                      class="fsize18 c-666">谢娜</a>-->
            <!--                  </div>-->
            <!--                  <div class="hLh30 txtOf tac">-->
            <!--                    <span class="fsize14 c-999">十年课程研发和培训咨询经验，曾任-->
            <!--                    国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾-->
            <!--                    问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生-->
            <!--                    银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业-->
            <!--                    提供过培训与咨询服务，并担任近50个大型项目的总负责人。</span>-->
            <!--                  </div>-->
            <!--                  <div class="mt15 i-q-txt">-->
            <!--                    <p class="c-999 f-fA">资深课程设计专家，专注10年AACTP美国培训-->
            <!--                    协会认证导师</p>-->
            <!--                  </div>-->
            <!--                </section>-->
            <!--              </li>-->
            <!--              <li>-->
            <!--                <section class="i-teach-wrap">-->
            <!--                  <div class="i-teach-pic">-->
            <!--                    <a href="/teacher/1" title="刘德华" target="_blank">-->
            <!--                      <img src="~/assets/photo/teacher/1442297927029.jpg" alt>-->
            <!--                    </a>-->
            <!--                  </div>-->
            <!--                  <div class="mt10 hLh30 txtOf tac">-->
            <!--                    <a href="/teacher/1" title="刘德华" target="_blank" class="fsize18 c-666">周杰伦</a>-->
            <!--                  </div>-->
            <!--                  <div class="hLh30 txtOf tac">-->
            <!--                    <span class="fsize14 c-999">中教一级职称。讲课极具亲和-->
            <!--                    力。</span>-->
            <!--                  </div>-->
            <!--                  <div class="mt15 i-q-txt">-->
            <!--                    <p class="c-999 f-fA">毕业于北京大学数学系</p>-->
            <!--                  </div>-->
            <!--                </section>-->
            <!--              </li>-->
            <!--              <li>-->
            <!--                <section class="i-teach-wrap">-->
            <!--                  <div class="i-teach-pic">-->
            <!--                    <a href="/teacher/1" title="陈伟霆" target="_blank">-->
            <!--                      <img src="~/assets/photo/teacher/1442297977255.jpg" alt>-->
            <!--                    </a>-->
            <!--                  </div>-->
            <!--                  <div class="mt10 hLh30 txtOf tac">-->
            <!--                    <a-->
            <!--                      href="/teacher/1"-->
            <!--                      title="陈伟霆"-->
            <!--                      target="_blank"-->
            <!--                      class="fsize18 c-666">陈伟霆</a>-->
            <!--                  </div>-->
            <!--                  <div class="hLh30 txtOf tac">-->
            <!--                    <span-->
            <!--                      class="fsize14 c-999"-->
            <!--                    >政治学博士、管理学博士后，北京师范大学马克思主义学院副教授。多-->
            <!--                    年来总结出了一套行之有效的应试技巧与答题方法，针对性和实用性极强，能帮助考生在轻松中应-->
            <!--                    考，在激励的竞争中取得高分，脱颖而出。</span>-->
            <!--                  </div>-->
            <!--                  <div class="mt15 i-q-txt">-->
            <!--                    <p class="c-999 f-fA">长期从事考研政治课讲授和考研命题趋势与-->
            <!--                    应试对策研究。考研辅导新锐派的代表。</p>-->
            <!--                  </div>-->
            <!--                </section>-->
            <!--              </li>-->
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
          console.log(response, 'getList')
          this.list = response.data.data.rows
          this.total = response.data.data.total
        })
        .catch(
          // request fail
          error => {
            console.log(error)
          }
        )
    }
  }
}
</script>
