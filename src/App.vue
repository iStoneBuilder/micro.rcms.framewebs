<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import router from './router/index'
import Header from './components/common/TopHeader.vue'
import LeftHeader from './components/common/LeftHeader.vue'
import BreadCrumb from './components/common/BreadCrumb.vue'
const links = ref(router.getRoutes())
console.log('-----links', links)

</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="220px">
          <LeftHeader />
        </el-aside>
        <el-main>
          <BreadCrumb />
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

