<template>
  <div class="form-content">
    <div class="form-wrap">
      <el-form label-width="90px" ref="formEl" :model="form" :rules="rules">
        <h1 class="mb-6 pt-12">后台管理系统</h1>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="用户名随便输"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="密码随便输"></el-input>
        </el-form-item>
        <el-button class="submit-btn" type="primary" @click="handleLogin"> 登录 </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { mainStore } from '@/store'
const form  = reactive({
  username:'',
  password:''
})
const route = useRoute()
const router = useRouter()
const rules = reactive({
  username:[{required:true,trigger:'blur',message:'请输入用户名'}],
  password:[{required:true,trigger:'blur',message:'请输入密码'}],
})
const formEl = ref()
const handleLogin = () => {
  formEl.value.validate((valid, fields) => {
    if (valid) {
     const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
      mainStore.setToken('hejsljlsjfisjdfijsjsjfjdjjasjfksjjsdjfsjisjjdjf')
      const query = route.query
      let redirect = ''
      let otherQuery = {}
      if (query) {
        redirect = query.redirect
        otherQuery = getOtherQuery(query)
      }
      router.replace({ path: redirect || '/', query: otherQuery }).then(()=>{
        ElMessage.success('登录成功')
      })
    loading.close()

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
</script>

<style lang="scss" scoped>
.form-content {
  width: 100%;
  height: 100%;
  background: #291a5e;
  position: relative;

  .form-wrap {
    width: 370px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: linear-gradient(to bottom, rgb(164, 60, 246), rgb(0, 184, 249));
    padding: 2px;

    :deep(.el-form) {
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgb(30, 22, 75), rgb(43, 26, 97));
      border-radius: 10px;

      h1 {
        font-size: 24px;
        text-align: center;
        color: #fff;
      }

      .submit-btn {
        width: 250px;
        margin-left: 90px;
      }

      .el-input {
        width: 250px;
      }
    }
  }
}
</style>
