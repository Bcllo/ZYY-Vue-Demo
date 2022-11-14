<script setup lang="ts">
import { ref, reactive, onActivated, onMounted } from "vue";
import {  } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";



</script>

<template>
    <div class="container">
        <div class="point">1</div>
        <div class="line"></div>
        <div class="point">2</div>
        <div class="line"></div>
        <div class="point">3</div>
        <div class="line"></div>
        <div class="point">4</div>
    </div>
    <div class="container">
        <div class="point">1</div>
        <div class="line-long"></div>
        <div class="point">2</div>

        <div class="point">3</div>

        <div class="point">4</div>
    </div>
    <div class="button-container">
        <el-button-group>
            <el-button>上一步</el-button>
            <el-button>下一步</el-button>
        </el-button-group>  
    </div>
</template>

<style scoped>
.container{
    display: flex;
    align-items: center;
}
.point{
    border: 10px solid rgba(134, 225, 255, 0.725);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.line{
    background-color: rgba(134, 225, 255, 0.725);
    height: 10px;
    width: 40px;
}
.line-long{
    background-color: rgba(134, 225, 255, 0.725);
    height: 10px;
    width: 240px;
}
.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
