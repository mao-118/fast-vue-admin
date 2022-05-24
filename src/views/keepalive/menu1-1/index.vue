<template>
    <div class="app-container">
        <h1>Menu1-1</h1>
        <el-input v-model="text"></el-input>
    </div>
</template>
<script>
export default{
    name:'menu1-1'
}
</script>
<script setup>
import {ref} from 'vue'
const text=ref('')
</script>