<template>
  <div class="app-container">
    <div class="changeLocale">
      <h1 class="text-center mb-4">{{ locale.title }}</h1>
      <el-radio-group v-model="radio" @change="handleChange">
        <el-radio v-for="(item, index) in localeList" :key="index" :label="index" border>
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
    <el-config-provider :locale="locale">
      <el-date-picker v-model="date" type="datetime" :placeholder="locale.el.select.placeholder" />
      <el-calendar />
    </el-config-provider>
  </div>
</template>
<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import es from 'element-plus/es/locale/lang/es'
import ja from 'element-plus/es/locale/lang/ja'
const locale = ref(zhCn)
const date = ref('')
const localeList = reactive([
  {
    name: '简体中文',
    lang: { ...zhCn, title: '切换语言' },
  },
  {
    name: 'English',
    lang: { ...en, title: 'Switch Language' },
  },
  {
    name: 'Español',
    lang: { ...es, title: 'Cambiar idioma' },
  },
  {
    name: '日本語',
    lang: { ...ja, title: '言語の切り替え' },
  },
])
const radio = ref(0)
const handleChange = () => {
  locale.value = localeList[radio.value].lang
}
handleChange()
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
