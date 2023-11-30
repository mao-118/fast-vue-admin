<template>
  <div class="app-container">
    <div class="search-box">
      <el-autocomplete
        ref="elautocomplete"
        v-model="keyword"
        :trigger-on-focus="false"
        prefix-icon="Search"
        clearable
        placeholder="请输入地名关键字"
        :fetch-suggestions="searchPlace"
        @select="selectPlace"
      >
        <!-- 覆盖原先的样式 -->
        <template #default="{ item }">
          <div v-if="item.lengthZero" class="zero-item">
            {{ item.value }}
          </div>
          <div v-else class="content" :title="item.relAddress">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="adress">{{ item.relAddress }}</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div id="container" />
  </div>
</template>
<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { mainStore } from '@/store'
import { ElMessage } from 'element-plus'
const keyword = ref('') // 搜索关键字
const elautocomplete = ref()
const mapObj = reactive({
  viewMap: null, // 地图实例对象
  marker: null, // 标记点对象
  geocoder: null, // 地理编码对象
  geolocation: null, // 定位对象
})
const mapStyle = reactive({
  whitesmoke: 'amap://styles/macaron',
  dark: 'amap://styles/dark',
})
watch(
  () => mainStore.vueuseColorScheme,
  (val) => {
    if (val === 'dark') {
      mapObj.viewMap.setMapStyle(mapStyle.dark)
    } else {
      mapObj.viewMap.setMapStyle(mapStyle.whitesmoke)
    }
  }
)
// 初始化地图
const initMap = () => {
  window._AMapSecurityConfig = {
    //高德密钥
    securityJsCode: 'e620277d4218a554566dfff84e7eee6e',
  }
  AMapLoader.load({
    key: 'efc9afa4f1d13134f2c302606e766ea0', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Geocoder', 'AMap.AutoComplete', 'AMap.Geolocation', 'AMap.ToolBar'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    mapObj.viewMap = new AMap.Map('container', {
      mapStyle: mainStore.vueuseColorScheme === 'dark' ? mapStyle.dark : mapStyle.whitesmoke, //设置地图的显示样式
      zoom: 11, // 级别
      // center: null, // 中心点坐标
      // center: [116.397428, 39.90923], // 中心点坐标
      resizeEnable: true, // 地图初始化 center为空 地图自动定位到您所在城市
      viewMode: '3D', // 使用3D视图
    })
    mapObj.marker = new AMap.Marker({
      // 创建标记点
      position: [116.397428, 39.90923], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '',
    })

    // 获取地址 注册地理编码插件和定位插件。
    mapObj.geocoder = new AMap.Geocoder({
      // 地理编码对象
      radius: 1000,
      extensions: 'all',
    })
    let toolBar = new AMap.ToolBar({
      position: 'LB',
    })
    // 工具条对象
    mapObj.viewMap.addControl(toolBar)
    // 定位对象
    mapObj.geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      buttonOffset: new AMap.Pixel(10, 20),
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      buttonPosition: 'RB',
      // 定位成功时是否在定位位置显示一个Marker 默认值：true
      showMarker: false,
      // 自定义定位元素
      // buttonDom:document.getElementById('ge')
    })
    // 绑定定位事件
    mapObj.geolocation.on('complete', onComplete)
    mapObj.geolocation.on('error', onError)
    // 地图添加定位组件
    mapObj.viewMap.addControl(mapObj.geolocation)
    mapObj.viewMap.on('click', clickHandler) // 绑定点击事件

    mapObj.viewMap.add(mapObj.marker) // 添加标记对象
  })
}
// 地图点击
const clickHandler = (e) => {
  // 设置标记点坐标
  changeMarkerPosition(e.lnglat)
  getAddress(e.lnglat)
}
// 改变标记点的值
const changeMarkerPosition = (e) => {
  mapObj.marker.setPosition([e.lng, e.lat])
}
// 通过坐标获取地址
const getAddress = (e) => {
  mapObj.geocoder.getAddress([e.lng, e.lat], (status, result) => {
    if (status === 'complete' && result.info === 'OK') {
      if (result && result.regeocode) {
        const address = result.regeocode.formattedAddress // 获取到位置
        // 修改标记点的title
        mapObj.marker.setTitle(address)
      }
    }
  })
}

// 检索
const searchPlace = async (queryString, cb) => {
  // 实例化AutoComplete
  var autoComplete = new AMap.AutoComplete({
    city: '全国', //city 限定城市，默认全国
  })
  autoComplete.search(queryString, (status, result) => {
    let res = []
    if (status === 'complete' && result.info === 'OK') {
      res = result.tips
        .filter((item) => item.location)
        .map((x) => {
          return {
            value: x.name,
            relAddress: x.district + x.name,
            ...x,
          }
        })
    }
    if (res.length === 0) {
      // 无结果
      res = [
        {
          value: '暂未搜索到该地点信息',
          lengthZero: true, // 标记属性
        },
      ]
    }
    cb(res)
  })
}
// 检索选中
const selectPlace = (pointInfo) => {
  if (pointInfo.lengthZero) {
    keyword.value = ''
    return
  }
  // 选中级别设置为最小 精准
  mapObj.viewMap.setZoom(16)
  // 更新坐标
  mapObj.marker.setPosition(pointInfo.location)
  // 修改标记点的title
  mapObj.marker.setTitle(pointInfo.value)
  mapObj.viewMap.setCenter(pointInfo.location)
}
// 定位成功
const onComplete = (data) => {
  // 更新标记点
  changeMarkerPosition(data.position)
  // 获取地址
  getAddress(data.position)
}
// 定位失败
const onError = (data) => {
  // 定位出错
  ElMessage.error('定位失败')
}
onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.app-container {
  display: grid;
  position: relative;

  .search-box {
    position: absolute;
    z-index: 99;
    top: 25px;
    left: 25px;
  }
}

#container {
  width: 100%;
  min-height: 100%;
}

::v-deep(.amap-logo),
::v-deep(.amap-copyright) {
  display: none !important;
}
.zero-item {
  color: red;
  font-size: 13px;
}
.content {
  margin-bottom: 10px;
  line-height: normal;
}
.name {
  color: #0082e5;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.address {
  font-size: 12px;
  color: #8e8e8e;
  display: -webkit-box;
  word-break: break-all;
  white-space: wrap;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
