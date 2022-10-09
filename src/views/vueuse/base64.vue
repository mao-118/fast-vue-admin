<template>
  <div class="app-container">
    <el-divider>文本转base64</el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-input v-model="text" :rows="5" type="textarea" />
      </el-col>
      <el-col :span="12">
        <el-input v-model="textBase64" :rows="5" type="textarea" readonly />
      </el-col>
    </el-row>
    <el-divider>文件转base64</el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button style="display:block;margin:0 auto;" color="#44bd87" @click="open">Choose Files</el-button>
        <input ref="uploadFileRef" type="file" hidden @change="change">
      </el-col>
      <el-col :span="12">
        <el-input v-model="fileBase64" :rows="5" type="textarea" readonly />
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { useBase64 } from '@vueuse/core';

const uploadFileRef = ref();
const text = ref('');
const file = ref();
const { base64: textBase64 } = useBase64(text);
const { base64: fileBase64 } = useBase64(file);

const open = () => {
  uploadFileRef.value.click();
};
const change = e => {
  file.value = e.target.files[0];
};
</script>
<style scoped>

</style>
