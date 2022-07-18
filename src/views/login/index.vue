<template>
  <div class="login-container">
    <div class="login-box">
      <h1>业务后台管理系统</h1>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="120px"
        status-icon
        class="login-form"
      >
        <el-form-item label="用户名：" prop="usename">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名"
            v-model="loginForm.usename"
          />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            :prefix-icon="Lock"
            placeholder="请输入密码"
            type="password"
            v-model="loginForm.password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            color="#5650c1"
            :loading="loading"
            @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="tips-text">
        <span>tips：</span>
        <div>username：admin</div>
        <div>password：12345</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { mainStore } from '@/store';
import { User, Lock } from '@element-plus/icons-vue';
const router = useRouter();
const loginForm = reactive({
  usename: '',
  password: ''
});
const rules = reactive({
  usename: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});
const loading = ref(false);
const loginFormRef = ref();
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      if (loginForm.usename === 'admin' && loginForm.password === '12345') {
        mainStore.setToken('hejsljlsjfisjdfijsjsjfjdjjasjfksjjsdjfsjisjjdjf');
        router.push('/');
      } else {
        ElMessage.error('用户名或密码错误');
      }
    }
  });
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/login/login-bg.png") no-repeat;
  background-size: 100% 100%;
  .login-box {
    width: 520px;
    height: 480px;
    padding: 0 20px;
    border-radius: 12px;
    color: #000;
    background: rgba(32, 39, 120, 0.8);
    box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.3);
    h1 {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      margin: 80px 0 35px 0;
      color: #fff;
    }
    .login-form {
      width: 75%;
      margin: 0 auto;
      :deep(.el-form-item__label) {
        color: #fff;
      }
      .login-btn {
        color: #fff;
      }
    }
    .tips-text {
      width: 150px;
      font-size: 14px;
      color: #fae4fa;
      margin: 0 auto;
      > div {
        text-align: center;
      }
    }
  }
}
</style>
