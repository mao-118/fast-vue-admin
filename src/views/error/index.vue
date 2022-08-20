<template>
    <div class="app-container">
        <p>点击按钮会产生一个错误</p>
        <el-button type="danger" @click="handleClick">确定</el-button>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
const handleClick = () => {
  ElMessage.info('产生一个错误，点击右上角图标查看');
  throw new Error('create a error');
};
</script>
