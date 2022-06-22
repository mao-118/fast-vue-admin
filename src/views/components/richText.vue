<template>
  <fs-richtext v-model:text="text"></fs-richtext>
  <h1>{{text}}</h1>
</template>
<script setup>
import { ref } from 'vue';
const text = ref('');
</script>
