<template>
  <fs-markdown v-model:text="text"></fs-markdown>
</template>
<script setup>
import { ref } from 'vue';
const text = ref('');
</script>
