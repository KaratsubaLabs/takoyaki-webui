<template>
  <div class="header">
    <h2 class="logo headertext"><router-link class="link" to="/">タコヤキ</router-link></h2>
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
  background-color: lightseagreen;
}
.logo {
  color: #F0F0F0;
  margin: 6px 8px !important;
}
.headertext {
  margin: 0 6px 0 6px;
  display: inline-flex;
  vertical-align: middle;
}
a.headertext, p.headertext {
  color: #EEEEEE;
}
.link {
  cursor: default;
  text-decoration: none;
  color: inherit;
}
.link:active {
  color: lightseagreen;
}
.marginfree {
  margin-right: 0px;
}
</style>
