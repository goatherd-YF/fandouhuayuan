<template>
  <div class="main">
    <div class="title">
      <a href="/login">登录</a>
      <span>·</span>
      <a class="active" href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item
          :rules="[{ required: true, message: '请输入你的昵称', trigger: 'blur' }]"
          class="input-prepend restyle"
          prop="userName">
          <div>
            <el-input v-model="user.userName" type="text" placeholder="你的昵称"/>
            <i class="iconfont icon-user"/>
          </div>
        </el-form-item>

        <el-form-item
          :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' },{validator: checkEmail, trigger: 'blur'}]"
          class="input-prepend restyle no-radius"
          prop="userEmail">
          <div>
            <el-input v-model="user.userEmail" type="text" placeholder="邮箱"/>
            <i class="iconfont icon-qq"/>
          </div>
        </el-form-item>

        <el-form-item
          :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]"
          class="input-prepend restyle no-radius"
          prop="mobile">
          <div>
            <el-input v-model="user.mobile" type="text" placeholder="手机号"/>
            <i class="iconfont icon-phone"/>
          </div>
        </el-form-item>

        <el-form-item
          :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]"
          class="input-prepend restyle no-radius"
          prop="code">
          <div style="width: 100%;display: block;float: left;position: relative">
            <el-input v-model="user.code" type="text" placeholder="验证码"/>
            <i class="iconfont icon-phone"/>
          </div>
          <div class="btn" style="position:absolute;right: 0;top: 6px;width: 40%;">
            <a
              :value="codeTest"
              href="javascript:"
              type="button"
              style="border: none;background-color: none"
              @click="getCodeFun">{{ codeTest }}</a>
          </div>
        </el-form-item>

        <el-form-item
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
          class="input-prepend"
          prop="userPassword">
          <div>
            <el-input v-model="user.userPassword" type="password" placeholder="设置密码"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-up-button" value="注册" @click="submitRegister()">
        </div>
        <p class="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守翻斗花园的规定
          <br>
          <a target="_blank" href="https://www.nuist.edu.cn">用户协议</a>
          和
          <a target="_blank" href="https://www.nuist.edu.cn/">隐私政策</a> 。
        </p>
      </el-form>
      <!-- 更多注册方式 -->
<!--      <div class="more-sign">-->
<!--        <h6>社交帐号直接注册</h6>-->
<!--        <ul>-->
<!--          <li><a id="weixin" class="weixin" target="_blank" href="http://huaan.free.idcfengye.com/api/ucenter/wx/login"><i-->
<!--            class="iconfont icon-weixin"/></a></li>-->
<!--          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'

import { registerUser, sendMail } from '@/api/register'

export default {
  layout: 'sign',
  data() {
    return {

      user: { // 封装注册输入数据
        code: '', // 验证码
        userName: '',
        userPassword: '',
        userSex: '',
        userAge: '',
        userAddress: '',
        userPhone: '',
        userEmail: '',
        avatar: '',
        userDescribe: ''
      },
      sending: true, // 是否发送验证码
      second: 60, // 倒计时间
      codeTest: '获取验证码'
    }
  },
  methods: {
    // 注册提交的方法
    submitRegister() {
      if (this.user.userEmail !== '' && this.user.userName !== '' && this.user.userPassword !== '' && this.user.code !== '') {
        registerUser(this.user)
          .then(response => {
            console.log(response)
            const result = response.data
            console.log(result)
            if (result.code !== 200) {
              this.$message.error(result.msg)
            } else {
              this.$message.success(result.msg)
              // 跳转登录页面
              this.$router.push({ path: '/login' })
            }
          })
      } else {
        this.$message.error('请规范输入相关信息！')
      }
    },
    timeDown() {
      const result = setInterval(() => {
        --this.second
        this.codeTest = this.second
        if (this.second < 1) {
          clearInterval(result)
          this.sending = true
          // this.disabled = false;
          this.second = 60
          this.codeTest = '获取验证码'
        }
      }, 1000)
    },
    // 通过输入邮件发送验证码
    getCodeFun() {
      if(this.user.userEmail){
        sendMail(this.user.userEmail)
          .then(response => {
            console.log(response)
            const result = response.data
            console.log(result)
            if (result.code !== 200) {
              this.$message.error(result.msg)
            } else {
              this.$message.success(result.msg)
              this.sending = false
              // 调用倒计时的方法
              this.timeDown()
            }
          })
      }else {
        this.$message.error("邮件不能为空")
      }

    },
    checkPhone(rule, value, callback) {
      // debugger
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机号码格式不正确'))
      }
      return callback()
    },
    checkEmail(rule, value, callback) {
      // debugger
      if (!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(value))) {
        return callback(new Error('邮箱格式不正确'))
      }
      return callback()
    }
  }
}
</script>
