<template>
  <div class="page12">
    <div class="systemInfo">
      <div class="title">
        <img src="./QQ图片20220410003719.png" class="pic" alt="">
        <div class="title_info">
          <div class="big_title">[<span style="color: red"> 系统通知 </span>]<span
            style="padding-left: 10px">商品交易系统上线啦！</span></div>
          <div style="margin-left: 30px;width: 800px;">翻斗花园跳蚤市场线上交易系统上线啦！
          </div>
        </div>
      </div>
    </div>
    <div class="systemInfo">
      <div class="title">
        <img src="./QQ图片20220410003719.png" class="pic" alt="">
        <div class="title_info">
          <div class="big_title">[<span style="color: red">商户须知</span>]<span
            style="padding-left: 10px">相关信息</span></div>
          <div style="margin-left: 30px;width: 800px;">亲爱的用户，您好！请您遵守用户规范哦1
          </div>
        </div>
      </div>
    </div>
    <div class="systemInfo">
      <div class="title">
        <img src="./QQ图片20220410003719.png" class="pic" alt="">
        <div class="title_info">
          <div class="big_title">[<span style="color: red">订单交易</span>]<span
            style="padding-left: 10px">交易须知</span></div>
          <div style="margin-left: 30px;width: 800px;">尊敬的各位用户，请您要遵守规范，明确交易时间和地点，有问题及时联系管理员！联系方式：1886666666
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SysMessage',
  data() {
    return {}
  }
}
</script>

<style scoped>
.page12{
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
