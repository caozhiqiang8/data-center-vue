<template>
  <div class="login_box">

    <el-card class="box_card">
      <el-divider><span class="title_text">数据分析中心</span></el-divider>
      <el-form class="form" ref="form" v-model="form" label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "../utils/requests.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data() {
    return {
      form: {
        userName: "",
        passWord: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("/login", {
          userName: this.form.userName,
          passWord: this.form.passWord,
        })
        .then((data) => {
          if (data.data.code === "0") {
            console.log(data.data.code);
            this.$router.push({ name: "index" });
          } else {
            this.$message({
              message: "帐号或密码错误，请重新输入",
              type: "error",
            });
            this.form.userName = "";
            this.form.passWord = "";
            this.masg = data.data.masg;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="less" scoped>
.login_box {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}

.box_card {
  width: 600px;
  height: 300px;
}

.form {
  margin-top: 50px;
}

.el-form-item {
  margin-bottom: 30px;
}

.title_text {
  text-align: center;
  font-size: 20px;
}

.button[data-v-26084dc2] {
  height: 40px;
}

.button {
  width: 200px;
  margin-left: 100px;
}
</style>
