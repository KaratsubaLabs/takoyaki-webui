<script setup lang="ts">
import {useRouter} from 'vue-router'

if (localStorage.getItem('authToken') == null) useRouter().push('/login');
</script>

<template>
  <div class="container">
    <div class="navbar">
      <ul>
        <RouterLink to="/dashboard/overview">
          <li>
            <font-awesome-icon icon="fa-solid fa-gauge-high" />
            <p>Overview</p>
            <div class="spacer"></div>
          </li>
        </RouterLink>
        <RouterLink to="/dashboard/instances">
          <li>
            <font-awesome-icon icon="fa-solid fa-cloud" />
            <p>Instances</p>
            <div class="spacer"></div>
          </li>
        </RouterLink>
        <RouterLink to="/dashboard/volumes">
          <li>
            <font-awesome-icon icon="fa-solid fa-hard-drive" />
            <p>Volumes</p>
            <div class="spacer"></div>
          </li>
        </RouterLink>
        <RouterLink to="/dashboard/images">
          <li>
            <font-awesome-icon icon="fa-solid fa-compact-disc" />
            <p>Images</p>
            <div class="spacer"></div>
          </li>
        </RouterLink>
      </ul>
    </div>
    <div class="dashcontent">
      <router-view />
    </div>
  </div>
</template>


<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.dashcontent{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.navbar {
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: var(--bg-color-card);
  border-right: 2px solid var(--bg-color-alt);

  ul {
    list-style: none;
    padding-left: 0;

    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 24px;
      text-align: center;
      margin: 5px 20px;
      border-radius: 7px;
      border: 1px solid var(--bg-color-card);

      p {
        margin: 0;
        flex-grow: 1;
      }

      svg{
        margin: auto 0;
        width: 3em;
      }

      .spacer {
        width: 2em;
      }
    }

    li:hover {
      background-color: var(--bg-color-alt);
    }

    a.router-link-exact-active li{
      border: 1px solid var(--accent-hover) !important;
      background-color: var(--bg-color) !important;
    }
  }

}

</style>