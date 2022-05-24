<template>
    <el-drawer
        v-model="settingDrawer"
        :direction="direction"
        size="15%"
        :show-close="false"
      >
        <template #title>
          <h3 class="drawer-title">系统布局设置</h3>
        </template>
        <div class="drawer-item">
          <span>主题设置</span>
          <el-switch
          v-model="theme"
          active-color="#2f2f2f"
          inactive-color="#ccc"
          @change="handleChangeTheme"
          inline-prompt
          active-icon="sunny"
          inactive-icon="moon"
        />
        </div>
        <div class="drawer-item">
          <span>开启 Tags-View</span>
          <el-switch
            v-model="showTagView"
            @change="handleChangeShow"
          />
        </div>
        <div class="drawer-item">
          <span>固定 Header</span>
          <el-switch
            v-model="fixedHeader"
            @change="handleChangeFiexdHeader"
          />
        </div>
        <div class="drawer-item">
          <span>侧边栏 Logo</span>
          <el-switch
            v-model="showLogo"
            @change="handleChangeLogo"
          />
        </div>
      </el-drawer>
</template>
<script setup>
import { ref } from "vue";
import { toggleDark } from "@/utils/dark";
import {useMainStore,useTagViewStore} from "@/store";
const tagViewStore =useTagViewStore();
const mainStore =useMainStore();
const settingDrawer=ref(false);
const direction=ref("rtl");
const theme = ref(localStorage.getItem("vueuse-color-scheme") !== "auto");
const showTagView=ref(true);
const fixedHeader=ref(false);
const showLogo=ref(false);
const handleChangeTheme = () => {
  toggleDark();
};
const handleChangeShow=()=>{
  tagViewStore.setShowTagView(showTagView.value);
};
const handleChangeFiexdHeader=()=>{
  mainStore.setFixedHeader(fixedHeader.value);
};
const handleChangeLogo=()=>{
  mainStore.setShowLogo(showLogo.value);
};
const showSettings=()=>{
  settingDrawer.value=true;
};
defineExpose({
  showSettings
});
</script>
<style lang="scss" scoped>
::v-deep(.el-drawer__header){
  margin-bottom: 0;
}
.drawer-title{
  font-size: 20px;
  font-weight: 600;
}
.drawer-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  span{
    font-size: 12px;
  }
}
</style>