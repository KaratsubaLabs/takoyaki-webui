<template>
  <div class="toplinks">
    <p class="bigtext topitem">My Dashboard</p>
    <button class="topitem link"><router-link to="/request">Request New</router-link></button>
    <button class="topitem link" v-bind:class="{disabled:vm_selected==null}" v-on:click="editSpecs">Edit Specs</button>
    <button class="topitem link" v-bind:class="{disabled:vm_selected==null}" v-on:click="startStop">Start/Stop</button>
    <button class="topitem link" v-bind:class="{disabled:vm_selected==null}" v-on:click="createSnapshot">Create Snapshot</button>
    <button class="topitem link" v-bind:class="{disabled:vm_selected==null}" v-on:click="deleteVPS">Delete</button>
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
      <tr class="dataentry" v-for="(machine, index) in vm_list" :key="index" v-bind:class="{selected:vm_selected==index}"
        v-on:click="if(vm_selected!=index)vm_selected=index; else vm_selected=null;">
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
    getVPSList: async function() {
      var request = await VPSService.info();
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
      var url = "/request?id=" + this.vm_list[this.vm_selected].id +
        "&display=" + this.vm_list[this.vm_selected].display_name +
        "&cpu=" + this.vm_list[this.vm_selected].cpu +
        "&ram=" + this.vm_list[this.vm_selected].ram +
        "&ssd=" + this.vm_list[this.vm_selected].disk;

      this.$router.push(url);
    },
    startStop: function(e) {
      e.preventDefault();
      if (this.vm_list[this.vm_selected].status){
        let response = VPSService.stop(this.vm_list[this.vm_selected].id);
        if (response.status == 200) {
          this.vm_list[this.vm_selected].status = false;
          window.alert(this.vm_list[this.vm_selected].display_name + " was successfully stopped!");
        } else {
          window.alert("Failed to stop \"" + this.vm_list[this.vm_selected].display_name + "\"");
        }
      }
      else {
        let response = VPSService.start(this.vm_list[this.vm_selected].id);
        if (response.status == 200) {
          this.vm_list[this.vm_selected].status = true;
          window.alert(this.vm_list[this.vm_selected].display_name + " was successfully started!");
        } else {
          window.alert("Failed to start \"" + this.vm_list[this.vm_selected].display_name + "\"");
        }
      }
      this.vm_selected = null;
    },
    createSnapshot: function(e) {
      e.preventDefault();
      let response = VPSService.snapshot(this.vm_list[this.vm_selected].id);
      if (response.status == 200) {
        window.alert("Snapshop successfully created for " + this.vm_list[this.vm_selected].display_name + "!");
      } else {
        window.alert("Failed to create snapshot for \"" + this.vm_list[this.vm_selected].display_name + "\"");
      }
    },
    deleteVPS: function(e) {
      e.preventDefault();
      var confirm = prompt("Type 'DELETE' to confirm. DELETING A VPS IS PERMANENT!");
      if (confirm == "DELETE") {
        let response = VPSService.delete(this.vm_list[this.vm_selected].id);
        if (response.status == 200) {
          this.vm_list.splice(this.vm_selected, 1);
          window.alert(this.vm_list[this.vm_selected].display_name + " was successfully deleted!");
        } else {
          window.alert("Failed to delete \"" + this.vm_list[this.vm_selected].display_name + "\"");
        }
        this.vm_selected = null;
      }
      else if (confirm != "") {
        window.alert("Confirmation failed! (Case Sensitive)");
      }

    }

  },
  data() {
    return {
      /*
      vm_list: [
        {"id" : 10000, "display_name" : "Aomori", "creation_time" : "December 15 2021", "ram" : 2, "cpu": 2, "disk": 5, os: "debian", "status": true, "ipv4": "192.168.0.69"},
        {"id" : 20000, "display_name" : "Sapporo", "creation_time" : "December 5 2021", "ram" : 2, "cpu": 2, "disk": 5, os: "arch", "status": false, "ipv4": "192.168.0.70"}
      ],
      */
      vm_list: this.getVPSList(),
      vm_selected: null
    }
  }
}
</script>

<style scoped lang="scss">

  .datatable {
    flex-grow: 1;

    table {
      border-collapse: collapse;
      width: calc(100% - 44px);
      margin: 12px 22px;
    }

    th {
      padding: 5px 15px 5px 15px;
      border-bottom: 2px solid var(--text-color-alt);
    }

    td {
      padding: 5px 10px 5px 10px;
      cursor: default;
    }
    
    .dataentry.selected {
      background: var(--bg-color-alt);
      color: var(--accent-primary);
    }
  }

  .toplinks {
    height: auto;
    text-align: left;
    margin: 0 12px;

    button {
      border: none;
      background: none;
    }

    button.disabled {
      color: var(--text-color-alt);
      cursor: default;
    }

    .topitem {
      margin: 10px 10px 10px 10px;
      font-size: 18px;
      vertical-align: middle;
      display: inline-flex;
    }
    
    .bigtext {
      font-size: 40px;
      margin: 10px 25px 10px 10px;
    }
  }

</style>
