<template>
  <div class="toplinks">
    <p class="bigtext topitem">My Dashboard</p>
    <button class="topitem"><router-link class="link" to="/request">Request New</router-link></button>
    <button class="topitem disabled" v-bind:class="{disabled: !vm_selected}">Edit Specs</button>
    <button class="topitem disabled" v-bind:class="{disabled: !vm_selected}">Start/Stop</button>
    <button class="topitem disabled" v-bind:class="{disabled: !vm_selected}">Download Snapshot</button>
    <button class="topitem disabled" v-bind:class="{disabled: !vm_selected}">Delete</button>
  </div>
  <div class="datatable">
    <table>
      <tr>
        <th>Name</th>
        <th>OS</th>
        <th>Threads</th>
        <th>RAM (GB)</th>
        <th>Disk (GB)</th>
        <th>Date Created</th>
        <th>Status</th>
        <th>Local IPv4</th>
      </tr>
      <tr>
        <td>Akita</td>
        <td>Debian 10</td>
        <td>2</td>
        <td>2</td>
        <td>15</td>
        <td>December 15 2021</td>
        <td>Running</td>
        <td>192.168.0.69</td>
      </tr>
      <tr>
        <td>Akihabara</td>
        <td>Arch</td>
        <td>1</td>
        <td>1</td>
        <td>5</td>
        <td>December 5 2021</td>
        <td>Stopped</td>
        <td>192.168.0.70</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  data() {
    return {
      vm_selected: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    border: none;
    background: none;
    color: #2c3e50;
  }
  button:active {
    color: lightseagreen;
  }
  button.disabled {
    color: silver;
  }
  table {
    border-collapse: collapse;
    margin: 12px 22px;
  }
  th {
    padding: 5px 15px 5px 15px;
    border-bottom: 2px solid slategrey;
  }
  td {
    padding: 5px 10px 5px 10px;
  }
  .link {
    cursor: default;
    text-decoration: none;
    color: inherit;
  }
  .toplinks {
    height: auto;
    text-align: left;
    margin: 0 12px;
  }
  .topitem {
    margin: 10px 10px 10px 10px;
    font-size: 18px;
    vertical-align: middle;
    display: inline-flex;
    color: #2c3e50;
  }
  .bigtext {
    font-size: 40px;
    margin: 10px 25px 10px 10px;
  }
</style>
