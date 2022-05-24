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
import {computed} from 'vue'
import {useTagViewStore} from '@/store'
const tagViewStore = useTagViewStore()
const include = computed(()=>{
  return tagViewStore.tagViews.map(_=>_.name)
})

</script>