<template>
  <div class="login-container">
    <div class="login-box">
      <h1>业务后台管理系统</h1>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="120px" status-icon class="login-form">
        <el-form-item label="用户名：" prop="usename">
          <el-input v-model="loginForm.usename" :prefix-icon="User" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
v-model="loginForm.password" :prefix-icon="Lock" placeholder="请输入密码" type="password"
            @keyup.enter="handleLogin"
/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">
            登录
          </el-button>
          <el-button type="info" class="reset-btn" @click="handleReset">
            重置
          </el-button>
        </el-form-item>
      </el-form>
      <div class="tips-text">
        <span>tips：</span>
        <div>username：admin</div>
        <div>password：123456</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
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
      loading.value = true;
      setTimeout(() => {
        if (loginForm.usename === 'admin' && loginForm.password === '123456') {
          mainStore.setToken('hejsljlsjfisjdfijsjsjfjdjjasjfksjjsdjfsjisjjdjf');
          router.push('/');
        } else {
          ElMessage.error('用户名或密码错误');
        }
        loading.value = false;
      }, 500);
    }

  });
};
const handleReset = () => {
  loginFormRef.value.resetFields();
};
</script>
<style lang="scss" scoped>
$bgColor: rgb(248, 199, 190);

.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top right, #4781C3, $bgColor);

  .login-box {
    width: 520px;
    height: 480px;
    padding: 0 20px;
    border-radius: 22px;
    color: $bgColor;
    background-color: rgb(71, 129, 195);
    box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.3);

    h1 {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      margin: 80px 0 35px 0;
      color: $bgColor;
    }

    .login-form {
      width: 75%;
      margin: 0 auto;

      :deep(.el-form-item__label) {
        color: $bgColor;
      }

      .login-btn {
        color: $bgColor;
      }
    }

    .tips-text {
      width: 150px;
      font-size: 14px;
      color: $bgColor;
      margin: 0 auto;

      >div {
        text-align: center;
      }
    }
  }
}
</style>
