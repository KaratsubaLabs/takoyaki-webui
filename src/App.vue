<template>
  <div class="header">
    <h2 class="logo headertext link">タコヤキ</h2>
    <p class="headertext marginfree">BY</p>
    <a class="headertext link" href="https://github.com/KaratsubaLabs" target="_blank">からつばLABS</a>
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
}
.headertext {
  margin: 0 6px 0 6px;
  display: inline-flex;
  vertical-align: middle;
}
a.headertext, p.headertext{
  color: lightslategrey;
}
.link{
  cursor: default;
  text-decoration: none;
}
.link:active{
  color: cadetblue;
}
.marginfree{
  margin-right: 0px;
}
</style>
