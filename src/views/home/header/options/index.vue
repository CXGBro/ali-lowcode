<template>
  <div class=options>
    <label>操作：</label>
    <el-button type='primary' round @click=clearAll>清空</el-button>
    <el-button type='primary' round @click=deleteDom>删除</el-button>
    <el-button type='danger' round @click=release>发布</el-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const clearAll = () => {
  store.commit('homeModule/clearDomList');
};

const deleteDom = () => {
  if (!domId) alert('还未选中组件！');
  store.commit('homeModule/deleteDom', domId);
}

const release = () => {
  alert('暂未完成');
}

</script>
<style lang="scss">
.display {
  display: flex;
  align-items: center;
  margin-right: 50px;

  button {
    margin: 0 10px;
    ;
  }
}
</style>