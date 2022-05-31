<template>
  <div class="app-container">
    <div class="search-box">
      <el-autocomplete
        ref="elautocomplete"
        :trigger-on-focus="false"
        prefix-icon="Search"
        clearable
        v-model="keyword"
        placeholder="请输入地名关键字"
        :fetch-suggestions="searchPlace"
        @select="selectPlace"
      >
        <!-- 覆盖原先的样式 -->
        <template #default="{ item }">
          <div v-if="item.isResultLengthZero" :title="item.value" style="text-align:center;color:red;">{{item.value}}</div>
          <div v-else style="margin-bottom:10px;" :title="item.value">
            <div style="color:#0082e5;font-size:14px;font-weight:700;height:20px;line-height:20px;">{{item.name}}</div>
            <div style="font-size:12px;color:#8e8e8e;height:20px;line-height:20px;">{{item.newAddress}}</div>
          </div>
        </template>
      </el-autocomplete>
    </div>
    <div id="container"></div>
  </div>
</template>
<script setup>
import 'https://webapi.amap.com/maps?v=2.0&key=596002c0d52b6b4360a70ecbfb4c692d';
import axios from 'axios';
// 1a68b5f1bf437db3754cc1c9256c8433
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
const keyword = ref('');// 搜索关键字
const elautocomplete = ref();
const mapObj = reactive({
  viewMap: null, // 地图实例对象
  marker: null, // 标记点对象
  geocoder: null, // 地理编码对象
  geolocation: null // 定位对象
});
const initMap = () => {
  mapObj.viewMap = new AMap.Map('container', {
    // 初始化地图
    zoom: 11, // 级别
    // center: null, // 中心点坐标
    // center: [116.397428, 39.90923], // 中心点坐标
    resizeEnable: true, // 地图初始化 center为空 地图自动定位到您所在城市
    viewMode: '3D' // 使用3D视图
  });
  mapObj.marker = new AMap.Marker({
    // 创建标记点
    position: [116.397428, 39.90923], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: ''
  });

  // 获取地址 注册地理编码插件和定位插件。
  AMap.plugin(['AMap.Geocoder', 'AMap.Geolocation', 'AMap.ToolBar'], () => {
    mapObj.geocoder = new AMap.Geocoder({
      // 地理编码对象
      radius: 1000,
      extensions: 'all'
    });
    var toolBar = new AMap.ToolBar({
      position: 'LB'
    });
    // 工具条对象
    mapObj.viewMap.addControl(toolBar);
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
      showMarker: false
      // 自定义定位元素
      // buttonDom:document.getElementById('ge')
    });
    // 绑定定位事件
    mapObj.geolocation.on('complete', onComplete);
    mapObj.geolocation.on('error', onError);
    // 地图添加定位组件
    mapObj.viewMap.addControl(mapObj.geolocation);
  });
  mapObj.viewMap.on('click', clickHandler); // 绑定点击事件

  mapObj.viewMap.add(mapObj.marker); // 添加标记对象
  // 创建定位组件
};
// 地图点击
const clickHandler = (e) => {
  // 设置标记点坐标
  changeMarkerPosition(e.lnglat);
  getAddress(e.lnglat);
};
// 改变标记点的值
const changeMarkerPosition = (e) => {
  mapObj.marker.setPosition([e.lng, e.lat]);
};
// 通过坐标获取地址
const getAddress = (e) => {
  mapObj.geocoder.getAddress([e.lng, e.lat], (status, result) => {
    if (status === 'complete' && result.info === 'OK') {
      if (result && result.regeocode) {
        const address = result.regeocode.formattedAddress; // 获取到位置
        // 修改标记点的title
        mapObj.marker.setTitle(address);
      }
    }
  });
};
// 检索
const searchPlace = async(queryString, cb) => {
  // 调用高德地图api查询 queryString是输入的关键字
  const { data: res } = await axios.get('https://restapi.amap.com/v3/place/text', {
    params: {
      keywords: queryString, // 检索关键字
      city: '杭州', // 指定区域
      key: '1a68b5f1bf437db3754cc1c9256c8433', // 搜索的高德Key
      output: 'json', // 返回的结果类型
      extensions: 'all', // 返回结果控制
      city_limit: false // 为true时查找指定城市，为false指定城市不存在 查找另外的城市
    }
  });

  var result = [];
  // 如果存在则封装结果集
  if (res.pois) {
    // 处理结果返回联想列表
    result = res.pois.map(x => {
      return {
        // 拼接详细地址 adname 和address可能会重复
        value: x.pname + x.cityname + (x.adname === x.address ? x.adname : x.adname + x.address) + x.name,
        newAddress: x.pname + x.cityname + x.adname,
        // 其他的属性也放进去
        ...x
      };
    });
  }
  if (result.length === 0) {
    // 无结果
    result = [
      {
        value: '暂未搜索到该地点信息',
        isResultLengthZero: true // 标记属性
      }
    ];
  }
  // 返回封装的结果集
  cb(result);
  // 点击清除按钮小图标下拉建议不更新的问题
  elautocomplete.value.focus();
};
// 检索选中
const selectPlace = (pointInfo) => {
  if (pointInfo.isResultLengthZero) {
    keyword.value = '';
    return;
  }
  // 选中级别设置为最小 精准
  mapObj.viewMap.setZoom(16);
  // 获取坐标
  const location = pointInfo.location.split(',');
  // 更新坐标
  mapObj.marker.setPosition([location[0], location[1]]);
  // 修改标记点的title
  mapObj.marker.setTitle(pointInfo.value);
  mapObj.viewMap.setCenter([location[0], location[1]]);
};
// 定位成功
const onComplete = (data) => {
  // 更新标记点
  changeMarkerPosition(data.position);
  // 获取地址
  getAddress(data.position);
};
// 定位失败
const onError = (data) => {
  // 定位出错
  ElMessage.error('定位失败');
};

onMounted(() => {
  initMap();
});

</script>
<style lang="scss" scoped>
.app-container{
  display: grid;
  position: relative;
  .search-box{
    position: absolute;
    z-index: 99;
    top: 25px;
    left: 25px;
  }
}
#container{
  width: 100%;
  min-height: 100%;
}
::v-deep(.amap-logo),::v-deep(.amap-copyright){
  display: none !important;
}
</style>
