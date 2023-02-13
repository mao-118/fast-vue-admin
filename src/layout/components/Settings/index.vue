<template>
  <el-drawer v-model="settingDrawer" :direction="direction" size="25%" :show-close="false">
    <template #title>
      <h3 class="drawer-title">系统布局设置</h3>
    </template>
    <div class="drawer-item">
      <span>外观模式</span>
      <el-switch
        :model-value="isDark"
        active-color="#2f2f2f"
        inactive-color="#ccc"
        inline-prompt
        active-icon="sunny"
        inactive-icon="moon"
        @change="handleChangeScheme"
      />
    </div>
    <div class="drawer-item">
      <span>主题设置</span>
      <el-color-picker @change="handleChangeTheme" :predefine="predefineColors" :model-value="mainStore.theme" />
    </div>
    <div class="drawer-item">
      <span>开启 Tags-View</span>
      <el-switch :model-value="tagViewStore.showTagView" @change="handleChangeShow" />
    </div>
    <div class="drawer-item">
      <span>固定 Header</span>
      <el-switch :model-value="mainStore.fixedHeader" @change="handleChangeFiexdHeader" />
    </div>
    <div class="drawer-item">
      <span>侧边栏 Logo</span>
      <el-switch :model-value="mainStore.showLogo" @change="handleChangeLogo" />
    </div>
  </el-drawer>
</template>
<script setup>
import { handleThemeStyle } from '@/utils/theme'
import { toggleDark, isDark } from '@/utils/dark'
import { mainStore, tagViewStore } from '@/store'
const settingDrawer = ref(false)
const direction = ref('rtl')

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const handleChangeScheme = async () => {
  await toggleDark()
  mainStore.setScheme()
}
const handleChangeTheme = (theme) => {
  if (!theme) theme = '#409EFF'
  mainStore.changeTheme(theme)
  handleThemeStyle(theme)
}
const handleChangeShow = () => {
  tagViewStore.setShowTagView(!tagViewStore.showTagView)
}
const handleChangeFiexdHeader = () => {
  mainStore.setFixedHeader(!mainStore.fixedHeader)
}
const handleChangeLogo = () => {
  mainStore.setShowLogo(!mainStore.showLogo)
}
const showSettings = () => {
  settingDrawer.value = true
}
defineExpose({
  showSettings,
})
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
