<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="header">
    <h2 class="logo jp"><router-link class="link" to="/">タコヤキ</router-link></h2>
    <p>BY</p>
    <a class="jp" href="https://karatsubalabs.com" target="_blank">からつばLABS</a>

    <div class="spacer"></div>

  </div>
  <div class="body"><router-view /></div>
</template>

<style scoped lang="scss">

.header {
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: var(--light);
  background-color: var(--accent-primary);

  .logo {
    margin: 10px;
  }

  .link:hover {
    color: var(--light);
  }

  p, a {
    margin: auto 3px;
  }

  .spacer {
    flex-grow: 1;
  }
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

</style>