<template>
  <div class="login-container">
    <div class="login-left">
      <div class="top-border"></div>
      <h3>fs后台管理系统</h3>
      <h6>欢迎登录</h6>
    </div>
    <div class="login-right">
      <h1>登录</h1>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="120px"
        status-icon
        class="login-form"
      >
        <el-form-item label="用户名：" prop="usename">
          <el-input placeholder="请输入用户名" v-model="loginForm.usename" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button color="#69eae7" :loading="loading" @click="handleLogin">登录</el-button>
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
  loginFormRef.value.validate(valid => {
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
  background: url("@/assets/login/login-bg.png");
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-left {
    width: 550px;
    height: 550px;
    border-radius: 12px;
    background: #69eae7;
    margin-right: -100px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    h3 {
      font-size: 32px;
      margin-left: 35px;
      font-weight: 700;
    }
    h6 {
      font-size: 20px;
      margin-left: 35px;
      font-weight: 600;
    }
    .top-border {
      width: 100px;
      height: 20px;
      background: #b2f4f2;
      transform: rotate(-45deg);
      position: absolute;
      top: 18px;
      left: -23px;
    }
  }
  .login-right {
    width: 600px;
    height: 600px;
    padding: 0 20px;
    border-radius: 12px;
    color: #000;
    background: linear-gradient(
      231deg,
      hsla(0, 0%, 100%, 0.65),
      hsla(0, 0%, 100%, 0.72) 26%,
      hsla(0, 0%, 100%, 0.13)
    );
    backdrop-filter: blur(28px);
    h1 {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      margin: 100px 0 30px 0;
    }
    .login-form {
      width: 60%;
      margin: 0 auto;
    }
    .tips-text{
        width: 150px;
        font-size: 14px;
        color: #8e8e8e;
        margin: 0 auto;
        >div{
            text-align: center;
        }
    }
  }
}
</style>
