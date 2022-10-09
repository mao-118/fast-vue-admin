<template>
  <div class="app-container">
    <div>
      连接状态：
      <span :class="statusList[status].color">
        {{ statusList[status].text }}
      </span>
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="输入内容" prop="text">
        <el-col :span="5">
          <el-input v-model="form.text" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发送</el-button>
      </el-form-item>
    </el-form>
    <el-divider>聊天记录</el-divider>
    <div v-show="msgList.length" class="msg-box">
      <div v-for="(item, index) in msgList" :key="index" :class="{ pt: index % 2 == 0 }" class="msg-item">
        <div class="msg-content">
          <div class="msg-text">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeUnmount, reactive } from 'vue';
import { ElMessage } from 'element-plus';
const msgList = reactive([]);
const formRef = ref(null);
const form = reactive({
  text: ''
});
const rules = reactive({
  text: [{ required: true, message: '输入的内容不能为空', trigger: 'blur' }]
});
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      send(form.text);
      ElMessage.success('发送成功');
    } else {
      console.log(valid);
    }
  });
};
let socket = null;
const status = ref(0);
const statusList = reactive([
  {
    color: 'text-purple-500',
    text: '建立连接中...'
  },
  {
    color: 'text-green-500',
    text: '连接成功'
  },
  {
    color: 'text-red-500',
    text: '连接失败'
  },
  {
    color: 'text-purple-500',
    text: '连接关闭'
  }
]);
const open = (e) => {
  status.value = 1;
};
const send = (msg) => {
  socket.send(msg);
  msgList.push(msg);
};
const message = (e) => {
  msgList.push(e.data);
};
const error = (e) => {
  status.value = 2;
  console.log('error', e);
  ElMessage.error('连接异常，请尝试刷新页面');
};
const close = (e) => {
  status.value = 3;
  console.log('close', e);
};
const init = () => {
  socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws');
  socket.onopen = open;
  socket.onmessage = message;
  socket.onerror = error;
  socket.onclose = close;
};
init();
onBeforeUnmount(() => {
  socket.close();
});
</script>
<style lang="scss">
.msg-box {
  width: 400px;
  background: #eee;
  padding: 20px;
  margin: 0 auto;

  .msg-item {
    display: flex;
    margin: 25px 0;
    color: #333;

    .msg-content {
      width: 200px;
      background: #fff;
      padding: 10px;
      border-radius: 12px;
      position: relative;

      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 10px solid;
        position: absolute;
        top: 13px;
        left: -18px;
        border-color: transparent #fff transparent transparent;
      }
    }

    &.pt {
      flex-flow: row-reverse;

      .msg-content {
        background: #67c23a;

        &::after {
          top: 13px;
          left: unset;
          right: -18px;
          border-color: transparent transparent transparent #67c23a;
        }

        .msg-date {
          text-align: right;
        }
      }
    }
  }
}
</style>
