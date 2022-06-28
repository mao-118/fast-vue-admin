<template>
  <div class="error-401">
    <div class="milky">401</div>
    <div>抱歉你没有权限访问！！！</div>
    <el-button :text="true" @click="goDashboard">点我返回</el-button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goDashboard = () => {
  router.replace('/');
};
</script>
<style lang="scss" scoped>
.error-401{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .milky {
        font-size: 160px;
        color: #3366ff;
        text-shadow: 0 8px 10px #6699ff;
        font-weight: bolder;
        text-align: center;
        letter-spacing: 10px;
    }
}

</style>
