<template>
  <el-dialog v-model="dialogVisible" title="error info" width="50%">
    <el-table border :data="mainStore.errorList" style="width: 100%" height="350">
      <el-table-column label="error">
        <template #default="{row}">
            <span class="text-red-500">{{row.error}}</span>
        </template>
        </el-table-column>
      <el-table-column prop="instance" label="instance"/>
      <el-table-column label="info">
        <template #default="{row}">
            <span class="text-blue-500">{{row.info}}</span>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="danger" @click="resetError"
          >不在显示</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, defineExpose } from 'vue';
import { mainStore } from '@/store';
const dialogVisible = ref(false);
const resetError = () => {
  mainStore.setErrorList([]);
  dialogVisible.value = false;
};
defineExpose({
  dialogVisible
});
</script>
