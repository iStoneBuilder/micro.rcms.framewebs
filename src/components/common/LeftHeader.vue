<template>
  <el-input v-model="filterText" placeholder="Filter keyword" />
  <el-tree
    ref="treeRef"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    :filter-node-method="filterNode"
    :highlight-current="true"
    node-key="id"
    accordion
    @node-click="handleNodeClick"
    :default-expanded-keys="expandedKeys"
    :indent="34"
  >
    <template #default="{ node }">
			<el-icon :size="12" :color="'black'" v-if="node.data.icon" class="el-tree-icon">
        <House />
      </el-icon>
      <span>
        <span v-if="!node.data.url">{{ node.label }}</span>
        <RouterLink v-if="node.data.url" :to="node.data.url"> 
          {{node.label}}
        </RouterLink>
      </span>
		</template>
  </el-tree>
</template>

<script lang="ts" setup>
import "../../assets/leftTree.less"
import { ref, watch, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import { RouterLink, useRouter } from 'vue-router'

interface Tree {
  [key: string]: any
}

let expandedKeys: any[]

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}


const data: Tree[] = [
  {
    id: 0,
    label: '首页',
    url: '/',
    icon: 'House'
  },
  {
    id: 3,
    label: '定时任务配置',
    icon: 'House',
    children: [
      {
        id: 17,
        label: '任务列表',
        url: '/jobs',
      },
      {
        id: 18,
        label: '任务组配置',
        url: '/group',
      },
      {
        id: 19,
        label: '任务配置',
        url: '/task',
      },
    ],
  },
  {
    id: 4,
    label: '系统管理配置',
    icon: 'House',
    children: [
      {
        id: 7,
        label: 'LookUp配置',
        url: '/bbb',
      },
      {
        id: 8,
        label: '栏目配置',
        url: '/aaa',
      },
      {
        id: 9,
        label: '用户管理',
        url: '/ccc',
      },
    ],
  },
]


const router = useRouter()

const handleNodeClick = (data: Tree) => {
  console.log(data,'... left header')
  if (data.url && data.url !== router.currentRoute.value.path) {
    nextTick(() => {
      router.push(data.url)
    })
  }
}
</script>
