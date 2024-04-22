<script setup>
  import Home from "./views/Home.vue";
  import Navbar from "./components/Navbar.vue";
  import Infobar from "./components/Infobar.vue"
</script>

<template>
  <div class="content">
    <Navbar/>
    <Home/>
    <Infobar/>
  </div>
</template>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
  }
</style>


