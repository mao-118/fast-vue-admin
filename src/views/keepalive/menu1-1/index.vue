<template>
  <div class="app-container">
    <h1>Menu1-1</h1>
    <el-input v-model="text" />
  </div>
</template>
<script>
export default {
  name: 'Menu11'
};
</script>
<script setup>
const text = ref('');
</script>