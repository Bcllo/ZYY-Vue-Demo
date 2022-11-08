<script setup lang="ts">

</script>

<template>
    <div class="out-container">
        <div class="header">
            <div class="logo">
                <div>LOGO</div>
                <div>宽高固定</div>
            </div>
            <div class="nav">
                <div>NAV</div>
                <div>高度固定，宽度自适应</div>
            </div>
        </div>
        <div class="content">
            <div class="con1">
                <div>中 1</div>
                <div>高度自适应</div>
            </div>
            <div class="con2">
                <div>中 2</div>
                <div>高度自适应，宽度自适应</div>
            </div>
            <div class="con3">
                <div>中 3</div>
                <div>高度自适应</div>
            </div>
        </div>
        <div class="footer">
            <div>FOOTER</div>
            <div>高度固定，宽度自适应</div>
        </div>
    </div>
</template>

<style scoped>
.out-container{

    height: 100vh;
    weight: 100vw;
    margin: 0;
    padding: 0;
}
.header{
    display: flex;
    height: 50px;
    background-color:rgb(217, 250, 234);
}
.content{
    display: flex;
    background-color:rgb(176, 239, 255);
}
.footer{
    height: 50px;
    background-color:rgb(250, 248, 217);
}
</style>
