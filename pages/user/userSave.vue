<template>
  <div>
    <el-form :model="loginInfo" style="margin: 20px 200px 20px 600px">
      <div style="font-size: 20px;margin: 20px">修改信息</div>
      <el-form-item
        :rules="[
          { required: true, message: '名称不能为空'}
        ]"
        label="用户姓名"
        style="width: 60%">
        <el-input v-model="loginInfo.userName" maxlength="10" show-word-limit/>
      </el-form-item>
      <!--      <el-form-item label="用户密码">-->
      <!--        <el-input v-model="loginInfo.userPassword" maxlength="10" show-word-limit/>-->
      <!--      </el-form-item>-->
      <el-form-item label="用户头像" style="width: 60%">
        <el-upload
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          class="avatar-uploader "
          action="http://localhost:8160/oss/fileOss"
        >
          <img v-if="loginInfo.avatar" :src="loginInfo.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户性别" style="width: 60%">

        <el-radio v-model="loginInfo.userSex" label="男">男</el-radio>
        <el-radio v-model="loginInfo.userSex" label="女">女</el-radio>

      </el-form-item>
      <el-form-item
        :rules="[
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ]"
        prop="userAge"
        label="用户年龄"
        style="width: 60%"
      >
        <el-input v-model.number="loginInfo.userAge" autocomplete="off"/>
      </el-form-item>
      <el-form-item

        :rules="[
          { required: true, message: '地址不能为空'}
        ]"
        style="width: 60%"
        prop="userAddress"
        label="交易地址">
        <el-select v-model="loginInfo.userAddress" placeholder="请选择交易地址" style="width: 100%" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
<!--        <el-input-->
<!--          v-model="loginInfo.userAddress"-->
<!--          maxlength="10"-->
<!--          show-word-limit/>-->
      </el-form-item>
      <el-form-item
        :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' },{validator: checkEmail, trigger: 'blur'}]"
        prop="userEmail"
        label="用户邮箱"
        style="width: 60%">
        <el-input v-model="loginInfo.userEmail"/>
      </el-form-item>
      <el-form-item label="用户电话" style="width: 60%">
        <el-input v-model="loginInfo.userPhone" maxlength="11" show-word-limit/>
      </el-form-item>
      <el-form-item label="用户描述" style="width: 60%">
        <el-input v-model="loginInfo.userDescribe" :rows="10" type="textarea" maxlength="300" show-word-limit/>
      </el-form-item>
      <el-form-item style="margin-left: 222px">
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate">保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {updateOrSaveUser} from '@/api/user'
import cookie from 'js-cookie'

export default {
  name: 'UserSave',
  data() {
    return {
      options: [{
        value: '西苑食堂一楼',
        label: '西苑食堂一楼'
      }, {
        value: '中苑食堂一楼',
        label: '中苑食堂一楼'
      }, {
        value: '东苑食堂一楼',
        label: '东苑食堂一楼'
      }],
      loginInfo: {
        userId: undefined,
        userName: undefined,
        userDescribe: undefined,
        userPassword: undefined,
        avatar: undefined,
        userSex: undefined,
        userAge: undefined,
        userAddress: undefined,
        userEmail: undefined,
        userPhone: undefined

      },
      saveBtnDisabled: false, // 按钮是否禁用
      userList: undefined,

      imageUrl: undefined

    }
  },
  created() {
    this.showInfo()
  },
  methods: {
    // 头像上传
    handleAvatarSuccess(res, file) {
      // this.user.avatar = URL.createObjectURL(file.raw);
      // console.log(res)
      // this.imageUrl = URL.createObjectURL(file.raw);
      // console.log(this.imageUrl)
      this.loginInfo.avatar = res.data.url
      console.log(this.loginInfo.avatar)
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    saveOrUpdate() {
      this.saveBtnDisabled = true// 让保存按钮不可多次点击
      // 添加类别信息
      updateOrSaveUser(this.loginInfo).then(
        response => {
          console.log(response.msg)
          this.$message({// 提示信息
            type: 'success',
            message: response.data.msg

          })
          this.saveBtnDisabled = false
          this.$router.push('/user/' + this.loginInfo.userId)
        }
      )
      // 更新cookie
      cookie.set('loginUser', JSON.stringify(this.loginInfo), {domain: 'localhost'})
    },
    showInfo() {
      var jsonStr = cookie.get('loginUser')
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
        console.log(this.loginInfo, 'loginInfo')
      }
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

<style>

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
