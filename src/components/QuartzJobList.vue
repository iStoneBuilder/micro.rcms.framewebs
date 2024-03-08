<template>
  <div>
    <div class="el-main-operation flex">
      <el-button type="primary" :icon="Refresh">刷新</el-button>
    </div>
    <div class="el-main-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed="left" label="操作" width="80">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">任务详情</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed prop="date" label="任务ID" width="150" />
        <el-table-column prop="name" label="任务状态" width="120" />
        <el-table-column prop="state" label="响应编码" width="120" />
        <el-table-column prop="address" label="响应消息" />
        <el-table-column prop="date" label="任务开始时间" width="120" />
        <el-table-column prop="date" label="任务结束时间" width="120" />
        <template>
          <el-empty :image-size="200" v-if="tableData.length === 0" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Refresh } from '@element-plus/icons-vue'
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }
]
</script>
