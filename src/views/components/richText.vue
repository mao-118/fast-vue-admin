<template>
  <fs-richtext v-model:text="text"></fs-richtext>
</template>
<script setup>
import { ref } from 'vue';
const text = ref('');
</script>
