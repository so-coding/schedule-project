<template>
  <a-menu
    v-model:openKeys="menuData.openKeys"
    v-model:selectedKeys="menuData.selectedKeys"
    mode="inline"
    theme="dark"
  >
    <a-menu-item key="/dashboard">
      <template #icon>
        <home-outlined />
      </template>
      <span to="/dashboard">首页</span>
    </a-menu-item>
    <a-sub-menu key="/system">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title> 系统管理 </template>
      <a-menu-item key="/user">
        <template #icon>
          <user-outlined />
        </template>
        <span to="/user">用户管理</span>
      </a-menu-item>
      <a-menu-item key="/role">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span to="/role">角色管理</span>
      </a-menu-item>
      <a-menu-item key="/menu">
        <template #icon>
          <unordered-list-outlined />
        </template>
        <span to="/menu">菜单管理</span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/teacherRoot">
      <template #icon>
        <user-switch-outlined />
      </template>
      <template #title>教师管理</template>
      <a-menu-item key="/teacher">
        <template #icon>
          <user-delete-outlined />
        </template>
        <span to="/teacher">教师列表</span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/classroomRoot">
      <template #icon>
        <shop-outlined />
      </template>
      <template #title>教室管理</template>
      <a-menu-item key="/classroom">
        <template #icon>
          <align-center-outlined />
        </template>
        <span to="/classroom">教室列表</span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/scheduleRoot">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>排课管理</template>
      <a-menu-item key="/schedule">
        <template #icon>
          <schedule-outlined />
        </template>
        <span to="/schedule">排课日历</span>
      </a-menu-item>
      <a-menu-item key="/scheduleList">
        <template #icon>
          <menu-outlined />
        </template>
        <span to="/scheduleList">排课列表</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const menuData = reactive({
  selectedKeys: ['/dashboard'],
  openKeys: ['/teacher'],
  preOpenKeys: ['/teacher']
})
</script>

<style lang="scss" scoped></style>
