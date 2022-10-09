<template>
  <el-drawer v-model="settingDrawer" :direction="direction" size="15%" :show-close="false">
    <template #title>
      <h3 class="drawer-title">系统布局设置</h3>
    </template>
    <div class="drawer-item">
      <span>主题设置</span>
      <el-switch v-model="theme" active-color="#2f2f2f" inactive-color="#ccc" inline-prompt active-icon="sunny"
        inactive-icon="moon" @change="handleChangeTheme" />
    </div>
    <div class="drawer-item">
      <span>开启 Tags-View</span>
      <el-switch v-model="showTagView" @change="handleChangeShow" />
    </div>
    <div class="drawer-item">
      <span>固定 Header</span>
      <el-switch v-model="fixedHeader" @change="handleChangeFiexdHeader" />
    </div>
    <div class="drawer-item">
      <span>侧边栏 Logo</span>
      <el-switch v-model="showLogo" @change="handleChangeLogo" />
    </div>
  </el-drawer>
</template>
<script setup>
import { toggleDark, isDark } from '@/utils/dark';
import { mainStore, tagViewStore } from '@/store';
const settingDrawer = ref(false);
const direction = ref('rtl');
watch(isDark, () => {
  if (isDark.value) {
    localStorage.setItem('vueuse-color-scheme', 'dark');
    mainStore.setScheme();
  } else {
    localStorage.setItem('vueuse-color-scheme', 'auto');
    mainStore.setScheme();
  }
}, { immediate: true, deep: true });
const theme = ref(mainStore.vueuseColorScheme === 'dark');
const showTagView = ref(true);
const fixedHeader = ref(true);
const showLogo = ref(false);
const handleChangeTheme = async () => {
  await toggleDark();
  mainStore.setScheme();
};

const handleChangeShow = () => {
  tagViewStore.setShowTagView(showTagView.value);
};
const handleChangeFiexdHeader = () => {
  mainStore.setFixedHeader(fixedHeader.value);
};
const handleChangeLogo = () => {
  mainStore.setShowLogo(showLogo.value);
};
const showSettings = () => {
  settingDrawer.value = true;
};
defineExpose({
  showSettings
});
</script>
<style lang="scss" scoped>
::v-deep(.el-drawer__header) {
  margin-bottom: 0;
}

.drawer-title {
  font-size: 20px;
  font-weight: 600;
}

.drawer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 12px;
  }
}
</style>
