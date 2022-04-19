<template>
  <div>
    <div id="aCoursesList" class="info">
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
              <section>
                <img :src="loginInfo.avatar" alt="1" class="t-infor-pic">
              </section>
              <section class="mt10">
                <span class="t-tag-bg">用户名称：{{ loginInfo.userName }}</span>
              </section>
              <section class="mt10">
                <span class="t-tag-bg">用户性别：{{ loginInfo.userSex }}</span>
              </section>
<!--              <section class="mt10">-->
<!--                <span class="t-tag-bg">账户余额：{{ loginInfo.count }}</span>-->
<!--              </section>-->
              <section class="mt10">
                <span class="t-tag-bg">用户等级： {{ loginInfo.userLevel }}</span>
              </section>
              <section class=" t-tag-bg">
                <p
                  class="mt10"
                >用户描述：</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ loginInfo.userDescribe }}</p>
              </section>
              <div class="clear"/>
              <section v-if="loginInfo.userId " class="mt10" style="float: right;">

                  <el-button type="success" @click="handleClick">修改信息</el-button>

              </section>
            </div>
          </section>
          <div class="clear"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  name: 'MyMessage',
  data() {
    return {
      loginInfo: {}
    }
  },
  created() {
    this.showInfo()
  },
  methods: {
    handleClick(){
      this.$router.push({path:'/user/userSave'})
    },
    showInfo() {
      const jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.info {
  height: 500px;
}

.t-infor-pic {
  height: 300px;
  width: 300px;
}
</style>
