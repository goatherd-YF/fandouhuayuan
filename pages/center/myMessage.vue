<template>
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
            <section >
              <img :src="loginInfo.avatar" class="t-infor-pic">
            </section>
            <section class="mt10">
              <span class="t-tag-bg">用户名称：{{ loginInfo.userName }}</span>
            </section>
            <section class="mt10">
              <span class="t-tag-bg">用户性别：{{ loginInfo.userSex }}</span>
            </section>
            <section class="mt10">
              <span class="t-tag-bg">账户余额：{{ loginInfo.count }}</span>
            </section>
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
            <section v-if="loginInfo.userId " class="mt10" style="float: right;k" >
              <router-link to="/user/userSave/" tag="li" active-class="current">
                <a>修改信息</a>
              </router-link>
            </section>
          </div>
        </section>
        <div class="clear"/>
      </div>
    </section>
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
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    }
  }
}
</script>

<style scoped>
.info{
height: 500px;
}
.t-infor-pic{
  height: 300px;
  width: 300px;
}
</style>
