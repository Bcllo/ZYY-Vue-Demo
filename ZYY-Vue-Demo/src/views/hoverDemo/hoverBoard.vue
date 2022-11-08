<script setup lang="ts">
import { ref, reactive, onActivated, onMounted } from "vue";
import {  } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";

const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const randomColor = ref();
const changeItemHoverBackground = () => {
    var obj = document.getElementById("box-item");
    obj.style.backgroundColor= "black";
}


</script>

<template>
  <div class="out-container">
    <div v-for="count in 10" class="row">
        <div v-for="count in 8" class="item" id="box-item"></div>
    </div>
  </div>
</template>

<style scoped>
.row{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
}
.item{
    width: 30px;
    height: 30px;
    background-color: #add8e6b9;
    /* margin-left: 10px; */
    margin-right: 10px;
}
.item:hover{
    background-color: #e6c7ad;
}
</style>
