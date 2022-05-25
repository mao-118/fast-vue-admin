<template>
  <div class="app-container">
    <div class="changeLocale">
      <h1 class="text-center mb-4">切换语言</h1>
      <el-radio-group v-model="radio" @change="handleChange">
        <el-radio
          v-for="(item, index) in data.localeList"
          :key="index"
          :label="index"
          border
        >
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
    <el-config-provider :locale="data.locale">
      <el-date-picker type="datetime" :placeholder="data.locale.el.select.placeholder" />
      <el-calendar />
    </el-config-provider>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import es from 'element-plus/es/locale/lang/es';
import ja from 'element-plus/es/locale/lang/ja';
const data = reactive({
  locale: zhCn,
  localeList: [
    {
      name: '简体中文',
      lang: zhCn
    },
    {
      name: 'English',
      lang: en
    },
    {
      name: 'Español',
      lang: es
    },
    {
      name: '日本語',
      lang: ja
    }
  ]
});
const radio = ref(0);
const handleChange = () => {
  data.locale = data.localeList[radio.value].lang;
};
</script>
<style lang="scss" scoped>
.changeLocale {
  width: 600px;
  height: 100px;
  margin: 20px auto;
  box-shadow: 0 1px 2px 1px #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
