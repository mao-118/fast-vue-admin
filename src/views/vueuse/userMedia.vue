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
</script>

<template>
  <div class="flex flex-col gap-4 text-center">
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
      <video ref="video" muted autoplay controls class="h-100 w-auto" />
    </div>
  </div>
</template>
