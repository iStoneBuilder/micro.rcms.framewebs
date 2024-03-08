<template>
  <el-dialog v-model="visible" 
    title="编辑任务组" 
    destroy-on-close 
    :close-on-click-modal="false"
    width="500px"
    :draggable="true">
    <el-form :model="form">
      <el-form-item label="任务组编码" :label-width="formLabelWidth">
        <el-text class="mx-1">Default</el-text>
      </el-form-item>
      <el-form-item label="任务组名称" :label-width="formLabelWidth">
        <el-text class="mx-1">Default</el-text>
      </el-form-item>
      <el-form-item label="是否认证" :label-width="formLabelWidth">
        <el-select v-model="form.isAuth" placeholder="任务组是否需要认证">
          <el-option label="是" value="Y" />
          <el-option label="否" value="N" />
        </el-select>
      </el-form-item>
      <el-form-item label="请求地址" :label-width="formLabelWidth" v-if="form.isAuth === 'Y'">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="请求类型" :label-width="formLabelWidth" v-if="form.isAuth === 'Y'">
        <el-select v-model="form.type" placeholder="请选择请求类型">
          <el-option label="POST" value="POST" />
          <el-option label="GET" value="GET" />
        </el-select>
      </el-form-item>
      <el-form-item label="请求头参数" :label-width="formLabelWidth" v-if="form.isAuth === 'Y'">
        <el-input v-model="form.name" autocomplete="off" type="textarea" />
      </el-form-item>
      <el-form-item label="请求参数" :label-width="formLabelWidth" v-if="form.isAuth === 'Y'">
        <el-input v-model="form.name" autocomplete="off" type="textarea" />
      </el-form-item>
      <el-form-item label="认证KEY" :label-width="formLabelWidth" v-if="form.isAuth === 'Y'">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false"> 提交 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
// 父组件传参数
const props = defineProps<{
  isEditGroup?: boolean
}>()
let visible = ref(props.isEditGroup)
const formLabelWidth = '110px'
const form = reactive({
  name: '',
  region: '',
  isAuth: 'N',
  date1: '',
  date2: '',
  delivery: false,
  type: 'POST',
  resource: '',
  desc: ''
})
watch(
  () => props.isEditGroup,
  (newProps: any) => {
    visible.value = newProps
    if (visible.value) {
      console.log(newProps, '数据有更新哦')
    }
  },
  { deep: true, immediate: true }
)
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.el-textarea {
  width: 300px;
}
</style>
