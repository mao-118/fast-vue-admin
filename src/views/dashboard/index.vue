<template>
  <div>
    <el-row :gutter="10">
      <el-col v-for="(item,index) in list" :key="index" :xs="24" :sm="24" :md="12" :lg="8">
        <el-card>
          <div class="content">
            <img :src="item.logo" alt="">
            <span>{{item.desc}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <TodoList />
    </div>
    <div class="lineChart">
      <LineChart />
    </div>
  </div>
</template>
<script setup>
import Logo from '@/assets/logo.png';
import { reactive, toRef } from 'vue';
import LineChart from './components/LineChart.vue';
import TodoList from './components/TodoList.vue';
const data = reactive({
  list: [
    {
      logo: Logo,
      desc: 'fast-admin 是一个后台前端解决方案，它基于 vue3 和 element-plus实现。它使用了最新的前端技术栈，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。'
    },
    {
      logo: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
      desc: 'Element Plus 是基于最新的 Vue 3.0 对 Element UI 的升级适配，使用 TypeScript + Composition API 重构的全新项目。官方宣称用最适合 Vue 3.0 的方式几乎重写了每一行 Element UI 的代码。'
    },
    {
      logo: 'https://vitejs.cn/logo.svg',
      desc: 'Vite（法语意为 "快速的"，发音 /vit/，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。'
    }
  ]
});
const list = toRef(data, 'list');
</script>
<style lang="scss" scoped>
.el-col{
  margin-bottom: 10px;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  img{
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }
  span{
    font-size: 14px;
  }
}
.lineChart{
  margin-top: 50px;
  padding: 20px;
}
</style>
