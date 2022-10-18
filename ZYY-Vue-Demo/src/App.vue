<script setup lang="ts">

</script>

<template>
  <div>
    <!-- 声明式路由跳转  两种方式 加入 replace 不会留下历史记录 -->
    <router-link replace to="/hello">
      <button>login</button>
    </router-link>
    <!-- 配置路由的 index 里面添加 name   -->
    <router-link :to="{ name: 'Hello' }" style="margin-left: 10px">
      <button>reg</button>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
