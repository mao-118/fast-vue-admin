<template>
  <div class="nav-bar flex justify-between items-center">
    <div class="collapse">
      <el-icon v-if="mainStore.collapse" @click="mainStore.changeCollapse">
        <expand />
      </el-icon>
      <el-icon v-else @click="mainStore.changeCollapse">
        <fold />
      </el-icon>
    </div>
    <div v-if="mainStore.menuMode == 'horizontal'" class="menu-list">
      <template v-for="(item, index) in routeStore.routes">
        <el-button
          v-if="!item.hidden"
          :key="item.path"
          :icon="item.meta.icon"
          :type="item.path == routeStore.currentRouteParent ? 'primary' : menuIndex == index ? 'info' : 'default'"
          plain
          @click="getMenu(item.path, index)"
        >
          {{ item.meta.title }}
        </el-button>
      </template>
    </div>
    <div v-else class="breadcrumb">
      <Breadcrumb />
    </div>
    <div class="op-config flex justify-end items-center">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />username<el-icon
            class="el-icon--right"
          >
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goPage('fast-vue-admin')">国内站点</el-dropdown-item>
            <el-dropdown-item @click="goPage('fast-vue-admin-doc')">使用手册</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" @command="handleChangeSize">
        <span class="el-dropdown-link">
          <el-icon title="尺寸切换" :size="20">
            <operation />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="large" :disabled="mainStore.elSize == 'large'">large</el-dropdown-item>
            <el-dropdown-item command="default" :disabled="mainStore.elSize == 'default'">default</el-dropdown-item>
            <el-dropdown-item command="small" :disabled="mainStore.elSize == 'small'">small</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon title="全屏" @click="toggleFullScreen">
        <FullScreen />
      </el-icon>
      <el-icon title="菜单切换" @click="toggleMenu">
        <Switch />
      </el-icon>
      <el-icon title="系统设置" @click="settingClick">
        <setting />
      </el-icon>
      <el-badge v-show="mainStore.errorList.length > 0" is-dot class="item">
        <span class="iconfont icon-apps_custom_bug4_btn" title="bug" @click="showError" />
      </el-badge>
    </div>
    <Settings ref="settingsRef" />
    <ShowError ref="ShowErrorRef" />
  </div>
</template>
<script setup>
import { mainStore, routeStore, tagViewStore } from '@/store/index.js'
import { routes } from '@/router/installRouter'
import Settings from '../Settings/index.vue'
import ShowError from '../ShowError/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import { useFullscreen } from '@vueuse/core'

const { toggle } = useFullscreen(document.documentElement)
const toggleFullScreen = () => {
  toggle()
}
const ShowErrorRef = ref()
const router = useRouter()
const menuIndex = ref(-1)
const settingsRef = ref(null)
const showError = () => {
  ShowErrorRef.value.dialogVisible = true
}
const settingClick = () => {
  settingsRef.value.showSettings()
}
const handleChangeSize = (size) => {
  mainStore.changeSize(size)
}
const getMenu = (item, index) => {
  menuIndex.value = index
  let routes = []
  routeStore.routes.forEach((route) => {
    if (item === route.path && route.children) {
      routes = route.children
    }
  })
  routeStore.setMenuList(routes)
}
const changeMenuList = () => {
  // 根据模式加载菜单
  if (mainStore.menuMode === 'vertical') {
    routeStore.initMenuList()
  } else {
    getMenu(routeStore.currentRouteParent)
  }
}
changeMenuList()
const toggleMenu = () => {
  mainStore.changeMenuMode()
  changeMenuList()
  routeStore.setRoutes(routes)
}
const goPage = (page) => {
  window.open(`https://mao-118.gitee.io/${page}/`)
}
const logout = async () => {
  mainStore.setToken('')
  // await router.replace('/login');
  location.reload()
  setTimeout(() => {
    tagViewStore.closeAllTagViews()
    if (mainStore.menuMode === 'horizontal') {
      mainStore.changeMenuMode()
    }
  }, 500)
}
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 60px;

  .collapse {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon {
      font-size: 18px;
    }
  }

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

  .breadcrumb {
    flex: 1;
    margin: 0 20px;
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

.el-badge {
  ::v-deep(.el-badge__content.is-fixed) {
    top: 7px;
  }
}
</style>
