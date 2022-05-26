<template>
  <div class="app-container">
    <div id="container"></div>
  </div>
</template>
<script setup>
import 'https://webapi.amap.com/maps?v=2.0&key=596002c0d52b6b4360a70ecbfb4c692d';
import { onMounted } from 'vue';
// 596002c0d52b6b4360a70ecbfb4c692d
onMounted(() => {
  var map = new AMap.Map('container', {
    zoom: 11, // 级别
    center: [116.397428, 39.90923], // 中心点坐标
    viewMode: '3D'// 使用3D视图
  });
});

</script>
<style scoped>
#container{
  width: 100%;
  height:700px;
}
::v-deep(.amap-logo),::v-deep(.amap-copyright){
  display: none !important;
}
</style>
