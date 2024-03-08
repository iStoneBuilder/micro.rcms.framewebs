<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item ,index) in breads" :key="index" :to="{ path: item.path }">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '../../router/index'
import { ArrowRight } from '@element-plus/icons-vue'
const breads = ref([{name:'首页',path:'/'}])
// 路由改变后修改面包屑
router.afterEach(function (to, from) {
  console.log(to,from,'---------',router)
})


// 获取选中节点的所有上父节点函数
const getParent = (array: Array<any>, key: String) => {
  let result: any[];
  result = []
  let toToo = true;
  const catchData = (array: Array<any>, key: String) => {
    array.forEach((item) => {
      if (!toToo) return;
      result.push(String(item["name"]));
      if (item["id"] === key) {
        toToo = false;
      } else if (item["children"]) {
        catchData(item["children"], key);
      } else {
        result.pop();
      }
    });
    toToo && result.pop();
  };
  catchData(array, key);
  return result;
}

</script>
