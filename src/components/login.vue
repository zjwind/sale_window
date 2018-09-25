<template>
 <div style="margin:auto;width:50%;">
   <form style="margin-left:auto;margin-right:auto;width:50%">
     <ul>
       <div > 
         <el-input type="text" v-model="account">
          <template slot="prepend" >登录名:</template>
        </el-input>
       </div>
     </ul>
     <ul>
       <div >
         <el-input type="password" v-model="password">
           <template slot="prepend" >密码:</template>
         </el-input>
       </div>
     </ul>
     <div><el-button type="submit" @click="login">登录</el-button></div>
   </form>
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
              this.$router.push({ name: "Hello", params: {} });
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
<style>
.el-input-group__prepend {
  width: 80px;
}
</style>
