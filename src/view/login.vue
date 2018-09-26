<template>
 <div class="login-container">
   <el-form label-position="left" label-width="0px" class="card-box login-form">
     <h3 class="title">管理后台</h3>
     <el-form-item>
        <span class="svg-container">
          账号
        </span>
        <el-input name="username" type="text" v-model="account" autoComplete="on" placeholder="username" />
     </el-form-item>
     <el-form-item >
        <span class="svg-container">
          密码
        </span>
        <el-input name="password" type="password" v-model="password" autoComplete="on"
          placeholder="password"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" style="width:100%;" @click="login">
          登录
        </el-button>
      </el-form-item>
   </el-form>
 </div>
</template>
<script>
import md5 from "js-md5";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    async login() {
      var p = md5(this.password).toUpperCase();
      var data = { useraccount: this.account, password: p };
      let _this = this;
      this.$http
        .post("back/login", this.$qs.stringify(data))
        .then(response => {
          let data = response.data;
          if (data.passflag) {
            sessionStorage.setItem("token", data.token);
            if (this.$router.currentRoute.query.redirect) {
              let redirect = this.$router.currentRoute.query.redirect;
              this.$router.push(redirect);
            } else {
              this.$router.push({ name: "Main", params: {} });
            }
          } else {
            this.$confirm(data.rtnmsg, "提示", {
              confirmButtonText: "确定",
              showCancelButton: false,
              type: "warning",
              center: true
            })
              .then(() => {})
              .catch(() => {});
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style >
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}

.login-container input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
  -webkit-text-fill-color: #fff !important;
}
.login-container input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
}
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}

.login-container .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
.login-container .title {
  font-size: 26px;
  font-weight: 400;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.login-container .login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 35px 35px 15px 35px;
  margin: 180px auto;
}
.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
.login-container .show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}

</style>
