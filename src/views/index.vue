<script setup>
const panels = ref([])
//做了个延迟发送请求，体现骨架屏
setTimeout(() => {
  getstatistics1().then(res => {
    panels.value = res
    console.log(panels.value)
  })
}, 2000)
</script>
<template>
  <div class="p-3">
    <el-row :gutter="20">
      <!-- 骨架屏，当panels数组长度为0的时候显示（数据还未加载完毕） -->
      <template v-if="panels.length == 0">
        <el-col :span="6" v-for="i in 4" :key="i">
          <el-skeleton style="width: 100%" animated loading>
            <template #template>
              <el-card class="shadow border-0">
                <template #header>
                  <div class="f-between">
                    <el-skeleton-item valid="text" class="w-[50%]" />
                    <el-skeleton-item valid="text" class="w-[10%]" />
                  </div>
                </template>
                <el-skeleton-item valid="h3" class="w-[80%]" />
                <el-divider />
                <div class="f-between text-sm text-gray-500">
                  <el-skeleton-item valid="text" class="w-[50%]" />
                  <el-skeleton-item valid="text" class="w-[10%]" />
                </div>
              </el-card>
            </template>
          </el-skeleton>
        </el-col>
      </template>

      <el-col :span="6" v-for="(item, index) in panels" :key="index">
        <el-card class="shadow hover:( shadow-xl bg-sky-100 opacity-70) cursor-pointer">
          <template #header>
            <div class="f-between">
              <span class="text-sm">{{ item.title }}</span>
              <el-tag :type="item.unitColor" effect="plain">{{ item.unit }}</el-tag>
            </div>
          </template>
          <span class="text-3xl font-bold text-gray-500">{{ item.value }}</span>
          <el-divider />
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped></style>
