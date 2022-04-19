<template>
  <div>
    <el-page-header @back="goBack" style="margin-left: 50px;margin-top: 25px">
    </el-page-header>
    <h1 style="text-align: center;font-size: 30px">本月最受欢迎的商品</h1>
    <div style="height: 75%; width: 75%;position: cente;margin-left: 10%">
      <el-table
        style="margin: 30px; align-items: center"
        :data="countList"
        border
        width="900px"
        size="small "
        highlight-current-row>
        <el-table-column
          label="序号"
          width="70"

          align="center">
          <template slot-scope="scope">
            第 {{ scope.$index+1 }} 名
          </template>
        </el-table-column>

        <el-table-column align="center" prop="goodsName" label="名称"/>
        <el-table-column align="center" prop="goodsPrice" label="价格"/>
        <el-table-column align="center" prop="categoryName" label="类别名称"/>

        <el-table-column align="center" prop="goodsPrice" label="价格"/>

        <el-table-column align="center" prop="goodsDescribe" label="描述"
        />
        <el-table-column align="center" prop="goodsPicture1" label="图片">
          <template slot-scope="scope">
            <el-image :src="scope.row.goodsPicture1">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          align="center"

          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleUpdate(scope.row)"
            >详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getCount} from "@/api/myCount";

export default {
  name: "MyCount",

  data() {
    return {
      countList: []
    }
  },
  created() {
    this.getCount()
  },
  methods: {
    getCount() {
      getCount().then(res => {
        this.countList = res.data.data
      })
    },
    load() {
      this.count += 2
    },
    handleUpdate(row) {
      this.$router.push("/goods/" + row.goodsId)
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>

