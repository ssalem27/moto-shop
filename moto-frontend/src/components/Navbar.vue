<template>
  <div class="navcontainer">\
    <img src="../assets/logo.svg" class="logo">
    <div class="pages">
      <p>Inventory</p>
      <p>Sell</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  </div>
</template>

<style scoped>
  .navcontainer{
    background: #131313;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120px;
    align-items: center;
    
  }
  .logo{
    filter: invert();
    margin-right: 250px;
    width: 30%;
    height: 70px;
  }
  .pages {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    width:70%;
    padding-right: 150px;
  }
  .pages p{
    color: #ffffff;
    padding: 10px;
    font-family: sans-serif;
    align-content: center;
    justify-content: center;
    font-size: large;
    padding: 0 50px;
    }

</style>