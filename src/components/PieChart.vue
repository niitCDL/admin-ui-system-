<template>
  <el-card class="shadow w-[618px]">
    <v-chart class="chart h-[300px] w-[500px]" :option="option" autoresize />
  </el-card>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'light')
const option = reactive({
  title: {
    text: '订单状况',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: []
  },
  series: [
    {
      name: '订单状况',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
getstatistics4().then(res => {
  option.legend.data = [...res.name]
  for (let i = 0; i < res.name.length; i++) {
    option.series[0].data.push({ value: res.value[i], name: res.name[i] })
  }
})
</script>

<style scoped></style>
