<template>
  <div class="nav-bar flex justify-between items-center">
    <div class="collapse">
      <el-icon @click="mainStore.changeCollapse" v-if="mainStore.collapse"
        ><expand
      /></el-icon>
      <el-icon @click="mainStore.changeCollapse" v-else><fold /></el-icon>
    </div>
    <div class="menu-list" v-show="mainStore.menuMode == 'horizontal'">
      <template v-for="(item, index) in routeStore.routes">
        <el-button
          :icon="item.meta.icon"
          @click="getMenu(item.path, index)"
          :key="item.path"
          v-if="!item.hidden"
          :type="
            item.path == routeStore.currentRouteParent
              ? 'primary'
              : menuIndex == index
              ? 'info'
              : 'default'
          "
          plain
        >
          {{ item.meta.title }}
        </el-button>
      </template>
    </div>
    <div class="op-config flex justify-end items-center">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />username<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" @command="handleChangeSize">
        <span class="el-dropdown-link">
          <el-icon title="尺寸切换" :size="20"><operation /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              command="large"
              :disabled="mainStore.elSize == 'large'"
              >large</el-dropdown-item
            >
            <el-dropdown-item
              command="default"
              :disabled="mainStore.elSize == 'default'"
              >default</el-dropdown-item
            >
            <el-dropdown-item
              command="small"
              :disabled="mainStore.elSize == 'small'"
              >small</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon @click="toggleMenu" title="菜单切换" :size="20"
        ><Switch
      /></el-icon>
      <el-icon @click="settingClick" title="系统设置"><setting /></el-icon>
    </div>
    <Settings ref="settingsRef" />
  </div>
</template>
<script setup>
import { useMainStore, useRouteStore } from "@/store/index.js";
import { ref } from "vue";
import Settings from "../settings/index.vue";
import { routes } from "@/router/installRouter";
const mainStore = useMainStore();
const routeStore = useRouteStore();
const menuIndex = ref(-1);
const settingsRef = ref(null);
const settingClick = () => {
  settingsRef.value.showSettings();
};
const handleChangeSize = (size) => {
  mainStore.changeSize(size);
};

const getMenu = (item, index) => {
  menuIndex.value = index;
  let routes = [];
  routeStore.routes.forEach((route) => {
    if (item == route.path && route.children) {
      routes = route.children;
    }
  });
  routeStore.setMenuList(routes);
};
const changeMenuList = () => {
  //根据模式加载菜单
  if (mainStore.menuMode == "vertical") {
    routeStore.initMenuList();
  } else {
    getMenu(routeStore.currentRouteParent);
  }
};
changeMenuList();
const toggleMenu = () => {
  mainStore.changeMenuMode();
  changeMenuList();
  routeStore.setRoutes(routes);
};
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 60px;
  .menu-list {
    flex: 1;
    margin: 0 10px;
    overflow-y: auto;
    display: flex;
    &::-webkit-scrollbar {
      display: none;
      transition: display 1s;
    }
  }
  .menu-list:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    > img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 3px;
    }
  }
}
.el-icon {
  cursor: pointer;
  margin: 0 5px;
}
::v-deep(.el-switch__core) {
  border-color: #8e8e8e !important;
}
</style>