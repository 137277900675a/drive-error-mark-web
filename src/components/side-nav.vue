<script setup lang="ts">
import { ref } from "vue";
const isHide = ref(true);
const hide = () => {
  isHide.value = false;
};
const show = () => {
  isHide.value = true;
};
// 导出控制可见性的函数
defineExpose({ hide, show });
</script>

<template>
  <div v-show="isHide">
    <el-menu class="el-menu-vertical-demo" mode="vertical" unique-opened>
      <el-sub-menu index="system-manage">
        <template #title>系统管理</template>
        <el-menu-item>123</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="home-config">
        <template #title>首页配置</template>
        <el-menu-item>123</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="cert-manage">
        <template #title>认证管理</template>
      </el-sub-menu>
      <el-sub-menu index="task-manage">
        <template #title>任务管理</template>
      </el-sub-menu>
      <el-sub-menu index="defect-manage">
        <template #title>缺陷隐患管理</template>
      </el-sub-menu>
      <el-sub-menu index="smart-ident-demo">
        <template #title>智能识别演示</template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped>
.menu {
  /* flex-shrink: 15vw; */
  flex-basis: 20%;
  height: 100%;
}
</style>
