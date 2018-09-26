<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <router-link to="user">
           <el-menu-item index="1-1">用户管理</el-menu-item>
        </router-link>
        <router-link to="">
           <el-menu-item index="1-2">用户权限管理</el-menu-item>
        </router-link>
        <!-- <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <router-link to="order">
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      </router-link>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">基础配置</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">系统配置</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name:"Menu",
  data(){
    return {}
  },
  methods:{
    handleOpen:function(){
      
    },
    handleClose:function(){

    }
  }
}
</script>
<style scoped>
</style>


