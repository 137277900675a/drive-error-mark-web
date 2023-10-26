<script setup lang="ts">
import { ref } from "vue";

// 引入Vue 3中的ref函数，用于创建响应式变量
const activeIndex = ref("1");

// 定义一个activeIndex变量并初始化为"1"

const handleSelect = (key: string, keyPath: string[]) => {
  // 定义一个handleSelect函数，该函数接受两个参数：key和keyPath
  console.log(key, keyPath);
  // 在控制台中输出用户选择的key和keyPath
};
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <!-- 创建一个el-menu组件，设置默认激活项为activeIndex，使用水平模式，启用路由功能，监听select事件 -->

    <el-menu-item index="/login"> 登录</el-menu-item>
    <el-menu-item index="/register">注册</el-menu-item>
    <el-menu-item index="4">首页</el-menu-item>
    <!-- 在el-menu中创建三个菜单项，分别设置索引（index）和显示的文本 -->
  </el-menu>
</template>

<style scoped>
.menu {
  background-color: rgb(235, 235, 235);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.8px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  color: rgba(255, 255, 255, 0.75);
}

.menu .el-menu-item {
  padding: 10px 30px; /* 设置菜单项的内边距 */
}

.menu .el-menu-item:hover {
  background-color: #555; /* 鼠标悬停时的背景颜色 */
}

.menu .el-menu-item.is-active {
  background-color: #ffffff86; /* 当菜单项被选中时的背景颜色 */
}
</style>
