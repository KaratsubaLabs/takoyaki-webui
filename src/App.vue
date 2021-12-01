<template>
  <div class="header">
    <h2 class="logo headertext">タコヤキ</h2>
    <p class="headertext">BY からつばLABS</p>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 100%;
  text-align: left;
  vertical-align: middle;
}
.headertext {
  margin: 0 6px 0 6px;
  display: inline-flex;
  vertical-align: middle;
}
p.headertext{
  color: lightslategrey;
}
</style>
