<template>
  <div class="main">
    <el-container style="height:100%">
      <el-aside><Menu ></Menu>
      </el-aside>
      <el-main>
        <router-view ></router-view>
      </el-main>
    </el-container>
     
    
    
  </div>
</template>
<script>
import Menu from "@/components/menu"
import Hello from "@/components/HelloWorld"
export default {
  name:"Main",
  components: {
    Menu,
    Hello
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped>
.main{
  width: 100%;
  height: 100%;
 
}
.menu {
 float: left;;
 width: 14%;
 height: 100%;
 background-color: #545c64
}
.hello {
  height: 100%;
  float: left;;
}

 .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: left;;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 100px;
  }
</style>

