<script setup>
//默认快速导航
const iconNavs = [
  {
    icon: 'set-up',
    color: 'text-cyan-500',
    title: '角色管理',
    path: '/sys/role/index'
  },
  {
    icon: 'files',
    color: 'text-yellow-500',
    title: '菜单管理',
    path: '/sys/menu/index'
  },
  {
    icon: 'user',
    color: 'text-light-blue-500',
    title: '用户管理',
    path: '/sys/user/index'
  },
  {
    icon: 'shopping-cart',
    color: 'text-violet-500',
    title: '商品管理',
    path: '/goods/index'
  },
  {
    icon: 'tickets',
    color: 'text-fuchsia-500',
    title: '订单管理',
    path: '/order/index'
  },
  {
    icon: 'chat-dot-square',
    color: 'text-indigo-500',
    title: '通知管理',
    path: '/notice/index'
  },
  {
    icon: 'picture',
    color: 'text-green-500',
    title: '图片管理',
    path: '/image/index'
  },
  {
    icon: 'picture',
    color: 'text-rose-500',
    title: '日志管理',
    path: '/log/index'
  }
]

const store = useAdminStore()
const { menus } = store
//动态快速导航
const fastNav = []
menus.forEach(e => {
  const obj = iconNavs.find(item => item.path === e.url)
  if (obj) {
    fastNav.push(obj)
  }
  if (e.children && e.children.length > 0) {
    e.children.forEach(ec => {
      const obj2 = iconNavs.find(item => item.path === ec.url)
      if (obj2) {
        fastNav.push(obj2)
      }
    })
  }
})
</script>

<template>
  <el-row :gutter="20" class="mt-5">
    <el-col :span="3" v-for="(item, index) in fastNav" :key="index">
      <el-card class="shadow hover:shadow-xl" @click="$router.push(item.path)">
        <div class="f-col-center cursor-pointer">
          <el-icon :size="16" :class="item.color">
            <component :is="item.icon" />
          </el-icon>
          <span class="text-sm mt-2">{{ item.title }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped></style>
