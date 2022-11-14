<script setup lang="ts">
import { ref, reactive, onActivated, onMounted } from "vue";
import { Tickets, } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";

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
      <el-aside  class="Aside">
        <el-menu
          router
          unique-opened
          default-active="1-1-1"
          background-color="#ADD8E6"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="border: 0"
          >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Tickets /></el-icon>
              <span>静态页面</span>
            </template>
            <el-sub-menu index="1-1">
              <template #title>
                <el-icon><Ticket /></el-icon>
                <span>分栏页面</span>
              </template>
              <el-menu-item 
                index="1-1-1"
                route="/threeColumnContents">
                分栏 - 三栏内容
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-2">
              <template #title>
                <span>静态页面动画效果</span>
              </template>
              <el-menu-item 
                index="1-2-1"
                route="/progressSteps">
                流程步骤-动画效果
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <!-- /hoverBoard -->
          <el-sub-menu index="1-2">
            <template #title>
              <span>HoverDemo</span>
            </template>
            <el-menu-item 
                index="1-2-1"
                route="/hoverBoard">
                HoverBoard
              </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
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
