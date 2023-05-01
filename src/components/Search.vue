<script setup>
defineProps({
  model: Object
})
defineEmits(['search', 'reset'])

const showSearch = ref(false)

const slots = useSlots()
const hasShowSearch = ref(!!slots.show)
</script>

<template>
  <el-form :model="model" label-width="70px" class="mb-3" size="small">
    <el-row>
      <!-- 默认插槽，放默认显示的查询内容 -->
      <slot />

      <!--具体插槽，展开才显示查询的内容 -->
      <template v-if="showSearch">
        <slot name="show" />
      </template>
      <el-col :span="4" :offset="1">
        <div class="flex items-center justify-end">
          <el-button type="primary" @click="$emit('search')">搜索</el-button>
          <el-button @click="$emit('reset')">重置</el-button>
          <el-button type="primary" text @click="showSearch = !showSearch" v-if="hasShowSearch">
            {{ showSearch ? '收起' : '展开' }}
            <el-icon>
              <ArrowUp v-if="showSearch"></ArrowUp>
              <ArrowDown v-else></ArrowDown>
            </el-icon>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped></style>
