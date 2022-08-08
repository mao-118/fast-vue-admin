<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in">
      <keep-alive :include="include">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup>
import { tagViewStore } from '@/store';
const include = computed(() => {
  return tagViewStore.tagViews.map(_ => _.name);
});

</script>
