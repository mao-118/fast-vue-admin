<template>
  <el-breadcrumb>
    <TransitionGroup name="list">
      <el-breadcrumb-item v-for="item in $route.meta.matched" :key="item.link">{{ item.title }}</el-breadcrumb-item>
    </TransitionGroup>
  </el-breadcrumb>
</template>
<script setup></script>
<style scoped>
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
