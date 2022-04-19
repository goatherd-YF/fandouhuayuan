<template>
  <div>
    <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 25px">
    </el-page-header>
    <div class="box" style="height: 500px">
      <div class="box_title">
        &nbsp;{{ myMsg.myType }}
      </div>
      <div class="box_content">
        <table width="96%" height="74" border="0" align="center" cellpadding="0" cellspacing="1" bgcolor="#dfdfdf">
          <tbody>
          <tr bgcolor="#FFFFFF">
            <td height="22" bgcolor="#FFFFFF">
              <div align="center"><strong>

                <strong>{{ myMsg.messageTopical }}</strong>
              </strong></div>
            </td>
          </tr>
          <tr >
            <td height="40"></td>
          </tr>
          <tr >
            <td style="height: 27px">
              &nbsp;{{ myMsg.messageContent }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {findById} from "@/api/sysMessage";

export default {
  name: "MessageId",
  data() {
    return {
      myMsg: {}
    }
  },

  created() {
    if (this.$route.params.id) {
      this.findById(this.$route.params.id)
    }

  },
  methods: {
    findById(id) {
      findById(id).then(res => {
        this.myMsg = res.data.data
      })
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

.box {
  border: 1px solid #99BBDD;
  margin: 10px 30px 10px 10px;
  word-wrap: break-word;
  width: 1000px;
  margin: 10px auto;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

* {
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
}

form {
  text-align: center;
}

body,
td {
  line-height: 20px;
  font-size: 12px;
}

.box_title {
  /*background-image: url(../images/table_head.gif);*/
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  font-weight: bold;
  color: #333333;
  vertical-align: middle;
}

 div {
  display: block;
}
</style>
