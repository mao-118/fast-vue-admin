<template>
    <div class="app-container">
        <p>点击按钮会产生一个错误</p>
        <el-button type="danger" @click="handleClick">确定</el-button>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
const handleClick = () => {
  ElMessage.success('成功');
  throw 'create a error';
};
</script>
