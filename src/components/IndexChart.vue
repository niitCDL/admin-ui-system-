<script setup>
import * as echarts from 'echarts'

const current = ref('week')
const options = [
  {
    text: '近一个月',
    value: 'month'
  },
  {
    text: '近一周',
    value: 'week'
  },
  {
    text: '近24小时',
    value: 'hour'
  }
]

const handleChoose = type => {
  console.log(type)
  current.value = type
  getData()
}

let myChart = null
onMounted(() => {
  //获取到template中的ref属性为“chartRef”的div
  let charRef = getCurrentInstance().ctx.$refs.charRef
  //初始化画布
  myChart = echarts.init(charRef)

  //调用获取数据的方法
  getData()
})
//离开页面，销毁画布
onBeforeUnmount(() => {
  if (myChart) {
    echarts.dispose(myChart)
  }
})

const getData = () => {
  let option

  option = {
    xAxis: {
      type: 'category',
      data: [] //从接口获取
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [], //从接口获取
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180,180,180,0.2)'
        }
      }
    ]
  }
  myChart.showLoading()
  //接口请求
  getstatistics2(current.value)
    .then(res => {
      option.xAxis.data = res.x
      option.series[0].data = res.y
      myChart.setOption(option)
    })
    .finally(() => {
      myChart.hideLoading()
    })
}
</script>

<template>
  <el-card class="shadow">
    <template #header>
      <div class="f-between">
        <span class="text-sm">订单统计</span>
        <div>
          <el-check-tag
            v-for="(item, index) in options"
            :key="index"
            :checked="current == item.value"
            class="mr-2"
            @click="handleChoose(item.value)"
          >
            {{ item.text }}
          </el-check-tag>
        </div>
      </div>
    </template>
    <div ref="charRef" class="w-full h-60"></div>
  </el-card>
</template>

<style scoped></style>
