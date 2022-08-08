<template>
  <div class="error-404">
    <el-button size="large" type="primary" @click="goDashboard">返回主页 {{ second }}s</el-button>
  </div>
</template>
<script setup>
const second = ref(3);
const router = useRouter();
const goDashboard = () => {
  router.replace('/');
};
const timer = setInterval(() => {
  second.value--;
  if (second.value === 0) {
    clearInterval(timer);
    goDashboard();
  }
}, 1000);
</script>
<style lang="scss" scoped>
.error-404 {
  width: 100%;
  height: 100%;
  background: url('@/assets/error/404.jpeg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-button {
    width: 100px;
    height: 45px;
  }
}
</style>
