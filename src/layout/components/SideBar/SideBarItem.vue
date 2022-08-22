<template>
  <el-sub-menu v-if="showSubMenu(route)" :index="route.path">
    <template #title>
      <el-icon v-if="route.meta?.icon">
        <component :is="route.meta?.icon" />
      </el-icon>
      <span>{{ route.meta?.title }}</span>
    </template>
    <sidebar-item v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <sidebar-item v-else-if="!route.hidden && route.hasOnlyOneChildren && route.children && route.children.length === 1"
    :route="route.children[0]" />
  <el-menu-item v-else-if="!route.hidden && !route.children || route.children.length === 0" :index="route.path">
    <el-icon v-if="route.meta?.icon">
      <component :is="route.meta?.icon" />
    </el-icon>
    <span>{{ route.meta?.title }}</span>
  </el-menu-item>
</template>
<script setup>
import SidebarItem from './SideBarItem.vue';
defineProps({
  route: {
    required: true,
    type: Object,
    default: () => { }
  }
});
const showSubMenu = (route) => {
  /**
   * 1. 是否设置 hidden 是否设置hasOnlyOneChildren 并且children.length===1(优先级大)
   * 2. 是否设置hideen 并且子路由存在则渲染
   * 3. 其他一律 false
   */
  if (!route.hidden && route.hasOnlyOneChildren && route.children && route.children.length === 1) return false;
  else if (!route.hidden && route.children && route.children.length > 0) return true;
  else return false;
};
</script>
