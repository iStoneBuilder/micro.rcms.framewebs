<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log('11111', key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="el-logo">
      <el-icon :size="26">
        <Clock />
      </el-icon>
    </div>
    <div class="el-system">RCMS</div>
    <!-- <div class="flex-grow" /> -->
    <el-menu-item index="1">
      <RouterLink to="/"> 首页 </RouterLink>
    </el-menu-item>
    <el-menu-item index="2">
      <RouterLink to="/jobs"> 任务执行列表 </RouterLink>
    </el-menu-item>
    <el-menu-item index="3">
      <RouterLink to="/group"> 任务组配置 </RouterLink>
    </el-menu-item>
    <el-menu-item index="4">
      <RouterLink to="/task"> 任务配置 </RouterLink>
    </el-menu-item>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
