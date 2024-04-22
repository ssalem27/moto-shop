<template>
  <div class="footer">
    <div class="links">
      <div class="brand">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="support">
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="social"></div>
  </div>
</template>

<style scoped>
  .footer{
    display:flex;
    width: 100%;
    height: 105px;
    background: #131313;
    bottom: 0;
    position: relative;
    flex-direction: row;
  }
  .links{
    display: flex;
    flex-direction: row;
  }
  .brand{
    display: flex;
    flex-direction: column;
  }
  .support{
    display: flex;
    flex-direction: columns;
  }
</style>