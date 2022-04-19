<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container" style="width: 1600px">
        <h1 id="logo">
          <a href="#" title="翻斗花园">
            <img src="~/assets/img/logo.png" width="100%" alt="翻斗花园">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <li>
            <router-link to="/" tag="li"  active-class="current" exact>
              <a>首页</a>
            </router-link>
            </li>
            <li>
            <router-link to="/goods/goods" tag="li"  active-class="current">
              <a>全部商品</a>
            </router-link>
            </li>
            <li>
            <router-link to="/user/user" tag="li"  active-class="current">
              <a>商家列表</a>
            </router-link>
            </li>
            <li>
            <router-link to="/sysMessage/sysMessage" tag="li" active-class="current">
              <a>系统公告</a>
            </router-link>
            </li>
            <li>
            <router-link to="/myCount/myCount" tag="li"  active-class="current">
              <a>排行榜</a>
            </router-link>
            </li>
            <li>
            <router-link to="/center/center" tag="li" active-class="current">
              <a>个人中心</a>
            </router-link>
            </li>

          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.userId" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>

            <li v-if="loginInfo.userId" id="is-login-two" class="h-r-user" >
              <!--              <span style="margin: 2px">账户金额:{{ loginInfo.count }}</span>-->
              <a :href="'/center/center'" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                >
                <span id="userName" class="vam disIb" style="width: 200px">{{ loginInfo.userName }}</span>
              </a>
              <a href="javascript:void(0);" title="退出" class="ml5" @click="logout()">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
<!--            <form action="#" method="post">-->
              <label class="h-r-s-box">
                <input v-model:value="searchName" type="text" placeholder="请输入商品"  @keyup.enter="searchGoods">
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
<!--            </form>-->
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"/>
        </aside>
        <div class="clear"/>
      </section>
    </header>

    <!-- /公共头引入 -->
    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="https://github.com/goatherd-YF" title="翻斗花园" >翻斗花园</a>
            </li>
          </ul>
          <div class="clear"/>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务地址：翻斗大街翻斗花园二号楼1001室</span>
                <span>Email：624208829@qq.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2022 翻斗花园跳蚤市场服务校园用户</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"/>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
import '~/assets/css/swiper-3.3.1.min.css'
import "~/assets/css/pages-weixinpay.css"
import cookie from 'js-cookie'
import { getUserLoginInfo } from '@/api/login'
import {goodsList} from "@/api/goods";
import Search from "@/components/search";

export default {
  components: {Search},
  data() {
    return {
      show:false,
      searchName:undefined,
      token: '',
      goods: {},
      loginInfo: {
        userId: '',
        userLevel: '',
        userName: '',
        userPassword: '',
        userSex: '',
        userAge: '',
        userAddress: '',
        userPhone: '',
        userEmail: '',
        avatar: '',
        userDescribe: '',
        count: ''
      }
    }
  },
  created() {
    this.token = this.$route.query.token
    if (this.token) {
      this.wxLogin()
    }
    this.showInfo()

  },
  methods: {
    searchGoods() {
     this.$router.push('/goods/goods?goodsName='+this.searchName)
    },
    wxLogin() {
      if (this.token === '') return
      // 把token存在cookie中、也可以放在localStorage中
      cookie.set('MyToken', this.token, { domain: 'localhost' })
      cookie.set('loginUser', '', { domain: 'localhost' })
      // 登录成功根据token获取用户信息
      getUserLoginInfo().then(response => {
        this.loginInfo = response.data.data.user
        // 将用户信息记录cookie
        cookie.set('loginUser', JSON.stringify(this.loginInfo), { domain: 'localhost' })
      })
    },

    showInfo() {
      var tokenStr = cookie.get('MyToken')
      var jsonStr = cookie.get('loginUser')
      if (tokenStr) {
        if(jsonStr) {
          this.loginInfo = JSON.parse(jsonStr)
        }
        // if(!this.loginInfo.userAddress && !this.loginInfo.userEmail){
        //   this.$router.push("../user/userSave")
        // }
      }else{
        this.$router.push("../login")
      }
    },
    logout() {
      // debugger
      cookie.set('loginUser', '', { domain: 'localhost' })
      cookie.set('MyToken', '', { domain: 'localhost' })
      // 跳转页面
      window.location.href = '/'
    }
  }
}

</script>
