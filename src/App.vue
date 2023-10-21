<script setup lang="ts">
import { ref } from 'vue';
import Nav from './components/nav.vue'
import SideNav from './components/side-nav.vue'
import { useRouter } from 'vue-router';

const sideNav=ref(null)
const router = useRouter();

  router.afterEach((to, _from) => {
    // 这里可能会报错但没事的
  if(to.fullPath=="/login"){
    sideNav.value.hide();
  }else{
    sideNav.value.show();
  }
})

</script>

<template>
    <div class="container"> <Nav></Nav>
      <div class="main" >
        <SideNav ref="sideNav"></SideNav>
        <router-view></router-view></div>
    </div>
   
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
</style>
