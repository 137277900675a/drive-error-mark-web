<script setup lang="ts">
import Nav from './components/nav.vue'
</script>

<template>
    <div class="container"> <Nav></Nav>
    <router-view></router-view></div>
   
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
</style>
