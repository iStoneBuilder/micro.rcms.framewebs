<template>
  <div>
    <div class="el-main-operation flex">
      <el-button type="primary" :icon="Plus" @click="createClick('create', 0)">新增任务组</el-button>
      <el-button type="primary" :icon="Refresh">刷新</el-button>
    </div>
    <div class="el-main-container">
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column fixed label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="createClick('edited', scope.$index)"
              >编辑</el-button
            >
            <el-button link type="primary" size="small" @click="deleteClick"> 删除 </el-button>
          </template>
        </el-table-column>
        <el-table-column fixed prop="date" label="任务组编码" width="150" />
        <el-table-column prop="name" label="任务组名称" width="120" />
        <el-table-column prop="state" label="是否认证" width="120" />
        <el-table-column prop="city" label="认证KEY" width="120" />
        <el-table-column prop="state" label="请求类型" width="100" />
        <el-table-column prop="zip" label="请求地址" width="520" />
        <el-table-column prop="zip" label="请求参数" width="120" />
        <el-table-column prop="zip" label="请求头参数" width="120" />
        <el-table-column prop="date" label="创建时间" width="120" />
        <el-table-column prop="zip" label="创建人" width="120" />
        <el-table-column prop="date" label="更新时间" width="120" />
        <el-table-column prop="zip" label="更新人" width="120" />
      </el-table>
    </div>
    <CreateQuartzGroup :isAddGroup="isAddGroup" />
    <EditedQuartzGroup :isEditGroup="isEditGroup"/>
    <DialogTips :isShow="isDelete" :diaData="deleteTip" />
  </div>
</template>

<script lang="ts" setup>
import { Refresh, Plus } from '@element-plus/icons-vue'
import CreateQuartzGroup from './operation/CreateQuartzGroup.vue'
import EditedQuartzGroup from './operation/EditedQuartzGroup.vue'
import DialogTips from './common/DialogTips.vue'
import { ref, nextTick } from 'vue'
let isAddGroup = ref(false)
let isEditGroup = ref(false)
const createClick = (op: string, index: number) => {
  op === 'create' ? isAddGroup.value = false : isEditGroup.value = false
  nextTick(() => {
    op === 'create' ? isAddGroup.value = true : isEditGroup.value = true
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
