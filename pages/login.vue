<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item
          :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' },{validator: checkEmail, trigger: 'blur'}]"
          class="input-prepend restyle"
          prop="userEmail">
          <div>
            <el-input v-model="user.userEmail" type="text" placeholder="邮箱"/>
            <i class="iconfont icon-qq"/>
          </div>
        </el-form-item>

        <el-form-item
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
          class="input-prepend"
          prop="userPassword">
          <div>
            <el-input v-model="user.userPassword" type="password" placeholder="密码"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号直接登录</h6>
        <ul>
          <li><a
            id="weixin"
            class="weixin"
            style="margin-left: 40px"
            href="http://localhost:8160/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a>
          </li>
          <!--          <li><a id="qq" class="qq"  href="#"><i class="iconfont icon-qq"/></a></li>-->
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import cookie from 'js-cookie'
import { loginUser, getUserLoginInfo, weChatLogin } from '@/api/login'

export default {
  layout: 'sign',

  data() {
    return {
      user: {
        userEmail: '',
        userPassword: ''
      },
      loginInfo: {}
    }
  },

  methods: {
    loginWechat() {
      weChatLogin()
    },
    submitLogin() {
      if (this.user.userEmail !== '' && this.user.userPassword !== '') {
        loginUser(this.user).then(response => {
          if (response.data.code === 200) {
            // 把token存在cookie中、也可以放在localStorage中
            cookie.set('MyToken', response.data.msg, { domain: 'localhost' })
            // 登录成功根据token获取用户信息
            getUserLoginInfo().then(response => {
              // 将用户信息记录cookie
              cookie.set('loginUser', JSON.stringify(response.data.data.user), { domain: 'localhost' })
              // 跳转页面
              window.location.href = '/'
            })
          } else {
            this.$message.error(response.data.msg)
          }
        })
      } else {
        this.$message.error('请输入您的信息！')
      }
    },
    checkEmail(rule, value, callback) {
      if (!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(value))) {
        return callback(new Error('邮箱格式不正确'))
      }
      return callback()
    }
  }
}
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>
