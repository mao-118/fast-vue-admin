<template>
   <el-sub-menu :index="route.path"  v-if="subMenu(route)">
        <template #title>
            <el-icon v-if="route.meta?.icon"><component :is="route.meta?.icon" /></el-icon>
            <span>{{route.meta?.title}}</span>
        </template>
        <sidebar-item v-for="item in route.children" :route="item" :key="item.path"/>
    </el-sub-menu>
    <el-menu-item v-else-if="!route.alwaysShow&&route.children&&route.children.length==1&&(!route.children[0].children||route.children[0].children==0)" :index="route.children[0].path">
        <el-icon v-if="route.children[0].meta?.icon"><component :is="route.children[0].meta?.icon" /></el-icon>
        <span>{{route.children[0].meta?.title}}</span>
    </el-menu-item>
    <el-menu-item v-else-if="menuItem(route)" :index="route.path">
        <el-icon v-if="route.meta?.icon"><component :is="route.meta?.icon" /></el-icon>
        <span>{{route.meta?.title}}</span>
    </el-menu-item>
</template>
<script setup>
import SidebarItem from './SideBarItem.vue';
defineProps({
  route: {
    required: true,
    type: Object,
    default: () => {}
  }
});
const subMenu = route => {
  if (route.children && route.children.length == 1) {
    return !route.hidden && route.children && !route.children.every(item => item.hidden) && route.alwaysShow;
  }
  return !route.hidden && route.children && !route.children.every(item => item.hidden);
};
const menuItem = route => {
  return !route.hidden && (!route.children || route.children.length == 0);
};
</script>
