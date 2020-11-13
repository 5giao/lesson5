<!--
 * @Author: your name
 * @Date: 2020-11-13 13:51:21
 * @LastEditTime: 2020-11-13 20:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\view\List\index.vue
-->
<template>
  <div class="list">
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="realName" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="180">
        <template slot-scope="scope">
          {{ scope.row.gender === 1 ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column prop="nativePlace" label="地址"> </el-table-column>
      <el-table-column prop="idCard" label="身份证"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期"> </el-table-column>
      <el-table-column prop="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="ToDetail(scope)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios({
        method: "get",
        url: "/api/resident",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        params: {
          pageIndex: "1",
          pageSize: "10"
        }
      })
        .then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err, "false");
          this.$router.push("/");
        });
    },
    ToDetail(scope) {
      this.$router.push(`/detail/${scope.row.id}`)
    }
  }
};
</script>

<style></style>
