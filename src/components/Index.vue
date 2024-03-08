<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import PartOne from './overview/PartOne.vue'
//  按需引入 echarts
import * as echarts from 'echarts'
const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
onMounted(() => {
  init()
})
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value)
  // 指定图表的配置项和数据
  var option = {
    backgroundColor: '#fff',
    color: [
      '#5470c6',
      '#91cc75',
      '#fac858',
      '#ee6666',
      '#73c0de',
      '#3ba272',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc'
    ],
    title: {
      text: '任务统计',
      textStyle: {
        // color: '#fff'
      },
      padding: 16
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['任务总数', '启动数', '未启动数', '成功数', '失败数'],
      top: 16,
      textStyle: {
        //color: '#fff'
      }
    },
    grid: {
      left: '1%',
      right: '2%',
      bottom: '4%',
      top: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '任务总数',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '启动数',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '成功数',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '失败数',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '未启动数',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
</script>

<template>
  <div>
    <PartOne />
    <div
      ref="main"
      style="width: 100%; height: 690px; margin-top: 20px; border: 0px solid #4c4d4f"
    ></div>
  </div>
</template>

<style scoped>
</style>
