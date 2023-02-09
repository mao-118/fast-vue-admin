<template>
  <div class="app-container">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="直接复制" name="directly" />
      <el-tab-pane label="指令复制" name="directive" />
    </el-tabs>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="form.text" style="width: 300px" placeholder="请输入内容" />
      </el-form-item>
      <el-form-item>
        <el-button v-if="activeName === 'directly'" type="primary" @click="handleCopy">Copy</el-button>
        <el-button v-else v-clipboard="form.text" type="primary">Copy</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { clipboard } from '@/directives/clipboard'
export default {
  directives: {
    clipboard,
  },
}
</script>
<script setup>
import { copyText } from '@/utils'
const form = reactive({
  text: 'https://mao-118.github.io/fast-vue-admin',
})
const activeName = ref('directly')
const handleCopy = () => {
  copyText(form.text)
}
</script>
