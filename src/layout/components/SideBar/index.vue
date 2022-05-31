<template>
  <el-scrollbar>
    <div v-if="mainSotre.showLogo" class="logo">
      <img class="logo-img" src="@/assets/logo.png">
      <h3 class="logo-text">Fast Admin</h3>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="mainSotre.collapse"
      :collapse-transition="false"
      :router="true"
      :unique-opened="true"
    >
      <sidebar-item
        v-for="item in routeStore.menuList"
        :route="item"
        :key="item.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import SidebarItem from './SideBarItem.vue';
import { useMainStore, useRouteStore } from '@/store';
import { routes } from '@/router/installRouter';
const mainSotre = useMainStore();
const routeStore = useRouteStore();
// 初始化路由和菜单
routeStore.setRoutes(routes);
</script>
<style lang="scss" scoped>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  .logo-img{
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  .logo-text{
    color: #409EFF;
    font-size: 20px;
    font-weight: 600;
  }
}

.el-menu,
::v-deep(.el-menu) {
  border-right: none;
  border-right: none;
}
::v-deep(.el-sub-menu__title) {
  border-right: none;
}
</style>
