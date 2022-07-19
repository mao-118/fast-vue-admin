<template>
    <div class="app-container">
        <div>
            <p>将网站图标更改为</p>
            <el-button color="#44bd87" @click="icon='https://vitejs.cn/logo.svg'">vite</el-button>
            <el-button color="#44bd87" @click="icon='https://element-plus.gitee.io/images/element-plus-logo.svg'">element-plus</el-button>
        </div>
    </div>
</template>
<script setup>
import { useFavicon } from '@vueuse/core';
const icon = useFavicon();
</script>
