<template>
  <div class="isEdit">
    <el-button v-show="{isEdit}" type='primary' @click="changeEditHandler(false)">编辑模式
    </el-button>
    <el-button v-show="{isEdit}" type='danger' @click="changeEditHandler(true)">预览模式
    </el-button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isEdit = computed(()=>store.state.homeModule.isEdit);
const changeEditHandler = (status) => {
  store.commit("homeModule/changeEditStatus", status);
}

</script>

<style lang="scss" scoped>
.isEdit {
  display: flex;
  align-items: center;
  margin-right: 100px;
}
</style>