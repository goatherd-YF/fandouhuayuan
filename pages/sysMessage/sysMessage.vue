<template>
  <el-container>
    <!-- <el-header style="font-size: 24px">系统信息</el-header> -->
    <el-main style="display: flex;flex-direction: row-reverse;">
      <div class="systemInfo">
        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">
          <div class="title_info">
            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span
              style="padding-left: 10px">新生报到须知</span></div>
            <div>{{ systemInfo.infomation }}
            </div
            >
          </div>
        </div>
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="title"><img src="./QQ图片20220410003719.png" class="pic" alt="">-->
<!--          <div class="title_info">-->
<!--            <div class="big_title">[<span style="color: red">{{ systemInfo.title }}</span>]<span-->
<!--              style="padding-left: 10px">新生报到须知</span></div>-->
<!--            <div>{{ systemInfo.infomation }}-->
<!--            </div-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </el-main>
    <el-footer>
      <el-pagination layout="prev, pager, next"
                     :total="50">
      </el-pagination>
    </el-footer>
  </el-container>

</template>

<script>
export default {
  name: 'SysMessage',
  data() {
    return {
      systemInfo: {
        title: '通知2111111',
        infomation: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111',
      }
    }
  }
}
</script>

<style scoped>
.systemInfo {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.pic {
  width: 60px;
  height: 60px
}

.title {
  display: flex
}

.title_info {
  display: flex;
  flex-direction: column;
}

.big_title {
  font-size: 24px;
  cursor: pointer;
}

.el-pagination {
  text-align: right;
}
</style>
