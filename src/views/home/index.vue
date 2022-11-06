<template>
  <div class="Home">
    <Header />
    <div class="banner">
      <Menu />
      <Content />
      <Console />
    </div>
  </div>
</template>

<script>
import Header from './header/index';
import Menu from './menu/index';
import Content from './content/index';
import Console from './console/index';

export default {
  components: {
    Header,
    Menu,
    Content,
    Console
  }

}
</script>

<style scoped>
.Home {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}

.banner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;
}

::-webkit-scrollbar {
  width: 5px;
}

/* 定义滑块颜色、内阴影及圆角 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
  background-color: rgba(0, 0, 0, .1);
}

/* 光标移到滚动滑块上样式颜色变深 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, .2);
}
</style>