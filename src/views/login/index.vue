<template>
  <div class="login-container">
    <div class="login-content">
      <div class="header flex justify-center items-center">
        <img src="@/assets/vite.svg" alt="logo" class="logo" />
        <span class="ml-4">登陆</span>
      </div>
      <div class="tips text-center mt-2">中小型后台解决方案</div>
      <div class="login-box mt-6">
        <el-tabs v-model="activeKey" centered>
          <el-tab-pane label="账号密码登陆" :name="1"></el-tab-pane>
          <el-tab-pane label="手机号登陆" :name="2"></el-tab-pane>
        </el-tabs>
        <el-form ref="ruleForm" :model="formState" :rules="rules">
          <template v-if="activeKey === 1">
            <el-form-item prop="username">
              <el-input v-model="formState.username" :prefix-icon="User" placeholder="用户名: admin or user">
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                v-model="formState.password"
                :prefix-icon="Lock"
                type="password"
                placeholder="密码: 123456"
                show-password
                @keyup.enter="onSubmit"
              />
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item prop="mobile">
              <el-input v-model="formState.mobile" :prefix-icon="Iphone" placeholder="请输入手机号!"> </el-input>
            </el-form-item>
            <el-form-item prop="msgCode">
              <div class="flex justify-between items-center">
                <el-input
                  v-model="formState.msgCode"
                  :prefix-icon="Lock"
                  placeholder="请输入验证码!"
                  @keyup.enter="onSubmit"
                >
                </el-input>
                <el-button
                  class="ml-2"
                  style="height: 40px"
                  :loading="msgLoading"
                  :disabled="time !== 60"
                  @click="sendMsg"
                >
                  {{ time === 60 ? `获取验证码` : `${time}s后重新获取` }}</el-button
                >
              </div>
            </el-form-item>
          </template>

          <el-form-item>
            <div class="w-full flex justify-between items-center">
              <el-checkbox v-model="formState.remember">自动登陆</el-checkbox>
              <a class="login-form-forgot" href="javascript:void(0)">忘记密码?</a>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button :loading="loading" class="w-full" style="height: 40px" type="primary" @click="onSubmit"
              >登陆</el-button
            >
          </el-form-item>
          <!-- <el-form-item>
            <div class="flex items-center">
              <span class="tips mr-2">其他登陆方式: </span>
              <div class="icon-list flex">
                <svg-icon
                  v-for="item in iconList"
                  :key="item.name"
                  class="cursor-pointer mr-2"
                  :name="item.name"
                  :color="item.enter ? '#1890ff' : ''"
                  @mouseenter="item.enter = true"
                  @mouseleave="item.enter = false"
                />
              </div>
            </div>
          </el-form-item> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { mainStore } from '@/store'
import { Lock, User, Iphone } from '@element-plus/icons-vue'

const formState = reactive({
  username: '',
  password: '',
  mobile: '',
  msgCode: '',
  remember: true,
})
const route = useRoute()
const router = useRouter()
const rules = reactive({
  username: [{ required: true, trigger: 'blur', message: '请输入用户名!' }],
  password: [{ required: true, trigger: 'blur', message: '请输入密码!' }],
  mobile: [{ required: true, trigger: 'blur', message: '请输入手机号!' }],
  msgCode: [{ required: true, trigger: 'blur', message: '请输入验证码!' }],
})
const loading = ref(false)
const activeKey = ref(1)
const ruleForm = ref()
const onSubmit = () => {
  if (!ruleForm.value) return
  ruleForm.value.validate((valid, fields) => {
    if (valid) {
      loading.value = true
      setTimeout(() => {
        mainStore.setToken('hejsljlsjfisjdfijsjsjfjdjjasjfksjjsdjfsjisjjdjf')
        const query = route.query
        let redirect = ''
        let otherQuery = {}
        if (query) {
          redirect = query.redirect
          otherQuery = getOtherQuery(query)
        }
        router.replace({ path: redirect || '/', query: otherQuery }).then(() => {
          ElMessage.success('登录成功')
        })
        loading.value = false
      }, 500)
    } else {
      console.log('error submit!', fields)
    }
  })
}
const getOtherQuery = (query) => {
  return Object.keys(query).reduce((acc, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {})
}
const msgLoading = ref(false)
const time = ref(60)
const timer = ref(0)
const sendMsg = () => {
  if (!formState.mobile) return ElMessage.warning('请先输入手机号')
  msgLoading.value = true
  setTimeout(() => {
    ElMessage.success('短信已发送至手机,请注意查收!')
    msgLoading.value = false
    time.value--
    timer.value = window.setInterval(() => {
      time.value--
      if (time.value <= 0) {
        clearInterval(timer.value)
        time.value = 60
      }
    }, 1000)
  }, 1000)
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  // background-color: #f0f2f5;
  .login-content {
    width: 328px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ::v-deep(.ant-tabs-nav)::before {
      border: 1px solid #e2e4e7;
    }
    .header {
      .logo {
        width: 44px;
        height: 44px;
      }
      span {
        font-size: 33px;
        font-weight: 600;
      }
    }
    ::v-deep(.el-input) {
      height: 40px;
    }
  }
}
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
</style>
