<template>
  <div class="common-layout">
    <el-container :class="{ closeMenu: mainStore.collapse }">
      <el-aside :style="{ width: mainStore.collapse ? '64px' : '200px' }">
        <SideBar />
      </el-aside>
      <el-container
        :class="{ 'has-fiexd': mainStore.fixedHeader, hasTags: tagViewStore.showTagView, closeMenu: mainStore.collapse }">
        <el-header :class="{ 'fiexd-header': mainStore.fixedHeader, hasTags: tagViewStore.showTagView }">
          <NavBar />
          <TagView v-show="tagViewStore.showTagView" />
        </el-header>
        <el-main :class="{ hasTags: tagViewStore.showTagView }">
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { SideBar, NavBar, TagView, AppMain } from './components';
import { mainStore, tagViewStore } from '@/store';
</script>
<style lang="scss" scoped>
.common-layout {
  >.el-container {
    padding-left: 200px;
    transition: padding .2s;

    &.closeMenu {
      padding-left: 64px;
    }
  }
}

.el-aside {
  height: 100vh;
  border-right: 1px solid var(--el-border-color-lighter);
  box-sizing: border-box;
  overflow: hidden !important;
  transition: width .2s;
  position: fixed;
  top: 0;
  left: 0;
}

.el-header {
  box-shadow: 4px 0 10px 1px var(--el-border-color-lighter);
  background: var(--el-bg-color);

  &.hasTags {
    --el-header-height: 100px;
  }
}

.tagView {
  padding: 0 10px;
  background: var(--el-bg-color);
}

.fiexd-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  z-index: 9;
}

.closeMenu {
  .fiexd-header {
    width: calc(100% - 64px);
  }
}

.has-fiexd {
  padding-top: 60px;

  &.hasTags {
    padding-top: 100px;
  }
}
</style>
