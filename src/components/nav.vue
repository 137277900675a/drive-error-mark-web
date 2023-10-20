<script setup lang="ts">
import { ref } from 'vue'

const activeIndex=ref("1")
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
 
}
</script>

<template>
   <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/login"> login</el-menu-item>
    <el-menu-item index="/register" >register</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<style scoped>

</style>
