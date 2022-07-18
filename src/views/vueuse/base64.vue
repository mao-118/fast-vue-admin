<template>
    <div class="app-container">
         <el-divider>文本转base64</el-divider>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input :rows="5" type="textarea" v-model="text"></el-input>
            </el-col>
            <el-col :span="12">
                <el-input :rows="5" type="textarea" readonly v-model="textBase64"></el-input>
            </el-col>
        </el-row>
        <el-divider>文件转base64</el-divider>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-button style="display:block;margin:0 auto;" color="#44bd87" @click="open">Choose Files</el-button>
                <input ref="uploadFileRef" type="file" @change="change" hidden>
            </el-col>
            <el-col :span="12">
                <el-input :rows="5" type="textarea" readonly v-model="fileBase64"></el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import { useBase64 } from '@vueuse/core';
import { ref } from 'vue';

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
