<template>
  <div class="canvas">
    <label>选择画板：</label>
    <el-select style="width: 220px" @change=selectContentSize(val)>
      <el-option v-for="(item, index) in list" :key="index" :value="item.width + '*' + item.height">
        {{ item.name + '：' + item.width + ' * ' + item.height + ' 像素' }}
      </el-option>
      <el-divider style="margin:8px 0 " />
      <el-space style="padding: 0 8px 4px">
        <el-input placeholder="输入自定义宽高，如100*200" @change=setInput(value)></el-input>
        <el-button type="text" @click=addCanvas(val)>添加</el-button>
      </el-space>
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const customInput = ref('');
const list = ref([
  { width: 800, height: 1000, name: 'PC' },
  { width: 1024, height: 768, name: 'PC' },
  { width: 1920, height: 1080, name: 'PC' },
  { width: 375, height: 667, name: 'iPhone' },
])

// 选择画布大小
const selectContentSize = (val) => {
  const splits = val.split('*')
  const width = parseInt(splits[0])
  const height = parseInt(splits[1])
  store.commit("changeContentSize", { width, height })
};

// 设置输入的内容
const setInput = (value) => {
  customInput.value = value;
}

const addCanvas = () => {
  const inputs = customInput.value;
  if (inputs === '' || strs.length === 0 || inputs.indexOf('*') === -1) return alert('格式不正确！')
  const strs = inputs.trim().split('*')
  const width = parseInt(strs[0])
  const height = parseInt(strs[1])
  if (typeof width != 'number' || typeof height != 'number') return alert('格式不正确！')
  if (width < 200 || width > 2000 || height < 100 || height > 10000) return alert('范围不足或超出！')
  const index = list.value.findIndex(item => {
    return item.width === width && item.height === height
  })
  if (index !== -1) return alert('面板重复！')

  list.value.push({ width, height, name: '自定义' })
  setInput('')
}

</script>

<style lang="scss" scoped>
.canvas {
  display: flex;
  align-items: center;
}
</style>