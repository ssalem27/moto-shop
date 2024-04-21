<script setup>
  import Home from "./views/Home.vue";
  import Navbar from "./components/Navbar.vue";
  import Infobar from "./components/Infobar.vue"
</script>

<template>
  <div>
    <Navbar/>
  </div>
  <div class="h-full bg-olive">
    <Home/>
  </div>
  <div>
    <Infobar/>
  </div>
</template>

