<template>
  <div id="LineChartDom"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import '../theme/macarons';
import '../theme/purple-passion';
import { mainStore } from '@/store';
const option = {
  title: {
    text: 'Line Chart',
    textStyle: {
      fontStyle: 'oblique'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
let myChart = null;
const initLineChart = () => {
  var chartDom = document.getElementById('LineChartDom');
  myChart = echarts.init(chartDom, mainStore.vueuseColorScheme === 'dark' ? 'purple-passion' : 'macarons');
  myChart.setOption(option);
};
const chartResize = () => {
  myChart.resize();
};

watch(() => mainStore.vueuseColorScheme, () => {
  myChart.dispose();
  initLineChart();
});
onMounted(() => {
  initLineChart();
  window.addEventListener('resize', chartResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', chartResize);
});
</script>

<style lang="scss" scoped>
#LineChartDom {
  width: 100%;
  height: calc(100vh - 430px);
}
</style>
