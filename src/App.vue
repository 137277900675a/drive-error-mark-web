<script setup lang="ts">
import Nav from './components/nav.vue'
import SideNav from './components/side-nav.vue'
</script>

<template>
    <div class="container"> <Nav></Nav>
      <div class="main" >
        <SideNav></SideNav>
        <router-view></router-view></div>
    </div>
   
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
</style>
