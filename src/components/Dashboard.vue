<template>
  <div class="toplinks">
    <p class="bigtext topitem">My Dashboard</p>
    <button class="topitem"><router-link class="link" to="/request">Request New</router-link></button>
    <button class="topitem" v-bind:class="{disabled:!vm_selected}" v-on:click="editSpecs">Edit Specs</button>
    <button class="topitem" v-bind:class="{disabled:!vm_selected}">Start/Stop</button>
    <button class="topitem" v-bind:class="{disabled:!vm_selected}">Create Snapshot</button>
    <button class="topitem" v-bind:class="{disabled:!vm_selected}">Delete</button>
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
      <tr class="dataentry" v-for="machine in vm_list" :key="machine.id" v-bind:class="{selected:vm_selected==machine.id}"
        v-on:click="if(vm_selected!=machine.id)vm_selected=machine.id; else vm_selected=null;">
        <td>{{ machine.display_name }}</td>
        <td>{{ machine.os }}</td>
        <td>{{ machine.cpu }}</td>
        <td>{{ machine.ram }}</td>
        <td>{{ machine.disk }}</td>
        <td>{{ machine.creation_time }}</td>
        <td>{{ machine.status ? "Running" : "Stopped" }}</td>
        <td>{{ machine.ipv4 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import VPSService from '/src/services/vps.service.js'
import {useRouter} from 'vue-router'

export default {
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  methods: {
    getVPSList: function() {
      var request = VPSService.info();
      console.log(request);
      if (request.status == 401) {
        alert("401 UNAUTHORIZED: Auth Token Invalid; Please log in again");
        localStorage.clear("authToken");
        this.$router.push('/login');
      }

      return request.data.all_vps;
    },
    editSpecs: function(e) {
      e.preventDefault();
    },
    startStop: function(e) {
      e.preventDefault();
    },
    createSnapshot: function(e) {
      e.preventDefault();
    },
    deleteVPS: function(e) {
      e.preventDefault();
    }

  },
  data() {
    return {
      vm_list: [{"id" : 10000, "display_name" : "Aomori", "creation_time" : "December 15 2021", "ram" : 2, "cpu": 2, "disk": 5, os: "debian", "status": true, "ipv4": "192.168.0.69"},
      {"id" : 20000, "display_name" : "Sapporo", "creation_time" : "December 5 2021", "ram" : 2, "cpu": 2, "disk": 5, os: "arch", "status": false, "ipv4": "192.168.0.70"}],
      //vm_list: getVPSList(),
      vm_selected: false,
      testvar: "/request?id=1234&display=shibuya&cpu=2&ram=2&ssd=5"
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
    width: calc(100% - 44px);
    margin: 12px 22px;
  }
  th {
    padding: 5px 15px 5px 15px;
    border-bottom: 2px solid slategrey;
  }
  td {
    padding: 5px 10px 5px 10px;
    cursor: default;
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
  .dataentry.selected {
    background: #F0F0F0;
    color: lightseagreen;
  }
</style>
