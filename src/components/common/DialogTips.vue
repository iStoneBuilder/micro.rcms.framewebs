<template>
  <el-dialog
    v-model="visible"
    :title="dialog?.title || '提示'"
    width="30%"
    align-center
    :close-on-click-modal="false"
    :before-close="handleClose"
    :draggable="true"
    destroy-on-close
  >
    <span>{{ dialog?.context || '温馨提示' }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClick('cancle')">
          {{ dialog?.cancle || '取消' }}
        </el-button>
        <el-button type="primary" @click="handleClick('cancle')">
          {{ dialog?.confirm || '确认' }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
// 父组件传参数
const props = defineProps<{
  isShow?: boolean
  diaData?: {
    title?: string
    context?: string
    cancle?: string
    confirm?: string
  }
}>()
let dialog = ref(props.diaData)
let visible = ref(props.isShow)

const handleClick = (op: string) => {
  visible.value = !visible.value
  console.log(visible.value, op)
}
const handleClose = () => {
  handleClick('cancle')
}
watch(
  () => props.isShow,
  (newProps: any) => {
    visible.value = newProps
    if (visible.value) {
      console.log(newProps, '数据有更新哦')
    }
  },
  { deep: true, immediate: true }
)
</script>
