<template>
  <el-scrollbar>
    <div v-show="mainStore.showLogo" class="logo">
      <img class="logo-img" src="@/assets/logo.png" />
      <Transition>
        <h3 v-show="!mainStore.collapse" class="logo-text">Fast Admin</h3>
      </Transition>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="mainStore.collapse"
      :collapse-transition="false"
      :router="true"
      :unique-opened="true"
    >
      <sidebar-item v-for="item in routeStore.menuList" :key="item.path" :route="item" />
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import SidebarItem from './SideBarItem.vue'
import { mainStore, routeStore } from '@/store'
import { routes } from '@/router/installRouter'
// 初始化路由和菜单
routeStore.setRoutes(routes)
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  .logo-img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  .logo-text {
    color: #409eff;
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
.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
