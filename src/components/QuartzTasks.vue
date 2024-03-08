
<template>
  <div>
    <div class="el-main-operation flex">
      <el-button type="primary" :icon="Plus" @click="createClick('create', 0)">新增任务</el-button>
      <el-button type="primary" :icon="Refresh">刷新</el-button>
    </div>
    <div class="el-main-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="createClick">Detail</el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <CreateQuartzGroup :isAddGroup="isAddGroup" />
    <DialogTips :isShow="isDelete" :diaData="deleteTip" />
  </div>
</template>

<script lang="ts" setup>
import { Refresh, Plus } from '@element-plus/icons-vue'
import CreateQuartzGroup from './operation/CreateQuartzGroup.vue'
import DialogTips from './common/DialogTips.vue'
import { ref, nextTick } from 'vue'
let isAddGroup = ref(false)
const createClick = (op: string, index: number) => {
  isAddGroup.value = false
  nextTick(() => {
    isAddGroup.value = true
    console.log('click', isAddGroup.value, op, index, new Date(), tableData[index])
  })
}
let deleteTip = {
  title: '删除确认',
  cancle: '取消',
  confirm: '确认',
  context: '是否删除当前选择的任务组数据吗？'
}
let isDelete = ref(false)
const deleteClick = () => {
  isDelete.value = false
  nextTick(() => {
    isDelete.value = true
    console.log('delete', deleteTip, isDelete.value, new Date())
  })
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
