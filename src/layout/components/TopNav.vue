<script setup>
const store = useAdminStore()
const { handleLogout } = useLogout()
</script>

<template>
  <div class="f-header v-center">
    <RouterLink to="/">
      <div class="f-center transition-all duration-500" style="width: 220px">
        <el-icon size="32">
          <element-plus />
        </el-icon>
        <span class="text-2xl">极客空间</span>
      </div>
    </RouterLink>

    <div @click="handleSideWidth" class="v-center cursor-pointer">
      <el-icon size="24">
        <fold />
      </el-icon>
    </div>

    <div class="ml-auto v-center">
      <el-icon size="24">
        <refresh />
      </el-icon>
      <el-icon size="24">
        <full-screen />
      </el-icon>
      <el-icon size="24">
        <printer />
      </el-icon>
      <el-icon size="24">
        <setting />
      </el-icon>

      <el-dropdown class="dropdown">
        <span class="v-center text-light-50">
          <el-avatar class="mr-2" :size="32" :src="store.adminInfo.avatar" />
          {{ store.adminInfo.realName }}
          <el-icon>
            <Arrow-down class="icon" />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.f-header {
  @apply bg-gradient-to-r from-cyan-600 to-sky-600 text-light-50 fixed top-0 left-0 right-0 h-16 shadow-xl shadow-gray-400;
}
.el-icon {
  @apply mx-1;
}
.icon {
  @apply mx-1 cursor-pointer hover: opacity-70 text-xl;
}
.f-header .dropdown {
  cursor: pointer;
  @apply flex justify-center items-center mx-5 h-16;
}
.btn {
  @apply w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full;
}
</style>
