<template>
  <el-card class="header_card">
    <div class="header">
      <div>
        <!-- <LeftOutlined />图标应用 -->
        <span style="margin-left:10px">未命名应用 自由表单设计</span>
      </div>
      <div class="header_right">
        <!-- 编辑和预览切换的组件 -->
        <isEdit />
        <!-- 操作按钮 -->
        <options />
        <!-- 选择画布 -->
        <userCanvas/>
      </div>
    </div>
  </el-card>
</template>

<script>
import options from './options/index.vue';
import isEdit from './isEdit/index.vue';
import userCanvas from './userCanvas/index.vue';

export default {
  components:{
    options,
    isEdit,
    userCanvas
  }
}
</script>

<style lang="scss" scoped>
.header_card {
  height: calc(10% - 10px);
  border-bottom: 2px solid skyblue;
}

.header {
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &>div {
    margin-left: 50px;
  }
}

.header_right {
  display: flex;
  align-items: center;
}
</style>