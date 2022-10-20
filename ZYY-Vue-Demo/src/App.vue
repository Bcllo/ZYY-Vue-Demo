<script setup lang="ts">

</script>

<template>
  <!-- 声明式路由跳转  两种方式 加入 replace 不会留下历史记录 -->
  <!-- <router-link replace to="/hello">
    <button>login</button>
  </router-link> -->
  <!-- 配置路由的 index 里面添加 name   -->
  <!-- <router-link :to="{ name: 'Hello' }" style="margin-left: 10px">
    <button>reg</button>
  </router-link> -->
  <!-- <router-view></router-view> -->
  <div>
    <el-container>
      <el-aside  class="Aside"></el-aside>
      <el-container>
        <el-header class="Header"></el-header>
        <el-main class="Main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  
</template>

<style scoped>
.Aside{
  background-color:#ADD8E6;
  width: 200px;
  height: 100vh;
}
.Header{
  background-color:#ade6d8;
}
.Main{
  background-color:#e9dfd0;
}
</style>
