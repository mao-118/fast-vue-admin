<template>
  <el-scrollbar>
    <div v-if="mainStore.showLogo" class="logo">
      <img class="logo-img" src="@/assets/logo.png">
      <h3 class="logo-text">Fast Admin</h3>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="mainStore.collapse"
      :collapse-transition="false"
      :router="true"
      :unique-opened="true"
    >
      <sidebar-item
        v-for="item in routeStore.menuList"
        :key="item.path"
        :route="item"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import SidebarItem from './SidebarItem.vue';
import { mainStore, routeStore } from '@/store';
import { routes } from '@/router/installRouter';
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
