<template>
  <a-layout class="layout">
    <a-layout-sider class="asside" v-model:collapsed="isCollapse">
      <menu-bar></menu-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout-content class="main">Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import MenuBar from './menu/MenuBar.vue'
const isCollapse = ref(false)
</script>
<style scoped lang="scss">
.layout {
  height: 100%;
  .asside {
    background-color: yellowgreen;
    // background-color: #fff;
    border-right: 1px solid #f0f0f0 !important;
  }
  .header {
    height: 50px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2f54eb;
  }
  .main {
    padding: 20px !important;
    // background-color: #fff !important;
    background-color: aqua;
  }
}
</style>
