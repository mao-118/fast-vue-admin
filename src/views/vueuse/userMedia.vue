<script setup>
import { ref, watchEffect } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
//当前设备
const currentCamera = ref()
//获取设备列表
const { videoInputs: cameras } = useDevicesList({
  requestPermissions: true,
  onUpdated() {
    if (!cameras.value.find((i) => i.deviceId === currentCamera.value)) currentCamera.value = cameras.value[0]?.deviceId
  },
})
const video = ref()
//获取媒体流
const { stream, enabled } = useUserMedia({
  videoDeviceId: currentCamera,
})
//将媒体流赋值给视频
watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value
})
let timer = null
watch(enabled, (newVal) => {
  if (newVal) {
    timer = setInterval(() => {
      const canvas = document.getElementById('canvas')
      // 获取 `canvas`元素，根据`srcVideo`中的数据进行图片绘制 `ctx.drawImage()`；
      const ctx = canvas.getContext('2d')
      // 最好视频尺寸小于画布尺寸，可以全部绘制
      ctx.drawImage(video.value, 0, 0, 270, 135)
      // 将 `canvas`绘制转化为图片base64；
      // imgSrc.value = canvas.toDataURL()
      // console.log(imgSrc.value)
    }, 20)
  } else {
    clearInterval(timer)
  }
})
</script>

<template>
  <div class="flex flex-col gap-4 text-center p-6">
    <div>
      <el-button @click="enabled = !enabled" :type="enabled ? 'primary' : 'success'">{{
        enabled ? 'Stop' : 'Start'
      }}</el-button>
    </div>

    <div>
      <div
        v-for="camera of cameras"
        :key="camera.deviceId"
        class="px-2 py-1 cursor-pointer"
        :class="{ 'text-green-500': currentCamera === camera.deviceId }"
        @click="currentCamera = camera.deviceId"
      >
        {{ camera.label }}
      </div>
    </div>
    <div>
      <video ref="video" muted autoplay controls />
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<style lang="scss" scoped>
#canvas {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
}
video {
  width: 270px;
  height: 135px;
}
</style>
