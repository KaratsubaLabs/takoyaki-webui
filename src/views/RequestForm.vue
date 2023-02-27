<template>
  <div class="maincontent">
    <p class="bigtext">{{id == undefined ? "Request new VPS" : "Modify VPS specs"}}</p>
    <div class="form">
      <div class="labels">
        <p class="label" v-on:mouseover="displayname.tooltip=true" v-on:mouseout="displayname.tooltip=false">Display Name</p>
        <p class="label" v-if="id == undefined" v-on:mouseover="hostname.tooltip=true" v-on:mouseout="hostname.tooltip=false">Hostname</p>
        <p class="label" v-if="id == undefined" v-on:mouseover="os.tooltip=true" v-on:mouseout="os.tooltip=false">Operating System</p>
        <p class="label" v-if="id == undefined" v-on:mouseover="username.tooltip=true" v-on:mouseout="username.tooltip=false">Username</p>
        <p class="label" v-if="id == undefined" v-on:mouseover="password.tooltip=true" v-on:mouseout="password.tooltip=false">Password</p>
        <p class="label" v-if="id == undefined" v-on:mouseover="ssh.tooltip=true" v-on:mouseout="ssh.tooltip=false">SSH Public Key</p>
        <p class="label" v-on:mouseover="cpu.tooltip=true" v-on:mouseout="cpu.tooltip=false">CPU Logical Cores</p>
        <p class="label" v-on:mouseover="ram.tooltip=true" v-on:mouseout="ram.tooltip=false">RAM (GB)</p>
        <p class="label" v-on:mouseover="ssd.tooltip=true" v-on:mouseout="ssd.tooltip=false">SSD (GB)</p>
        <p class="label bottom">Reason</p>
      </div>
      <div class="inputs">
        <div class="input">
          <input class="dispname" v-model="displayname.value" v-on:focus="displayname.ok = true" v-on:focusout="displayname.value=='' ? displayname.ok=false : displayname.ok=true"
            v-bind:class="{invalid:!displayname.ok}" placeholder="Shibuya">
          <p class="red" v-on:mouseover="displayname.tooltip=true" v-on:mouseout="displayname.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="displayname.tooltip">Display name shown in the dashboard only</div>
          </div>
        </div>
        <div class="input" v-if="id == undefined">
          <input class="hostname" v-model="hostname.value" v-on:focus="hostname.ok = true" v-on:focusout="hostname.value=='' ? hostname.ok=false : hostname.ok=true"
            v-bind:class="{invalid:!hostname.ok}" placeholder="shibuya">
          <p class="red" v-on:mouseover="hostname.tooltip=true" v-on:mouseout="hostname.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="hostname.tooltip">The VPS' hostname</div>
          </div>
        </div>
        <div class="input" v-if="id == undefined">
          <input readonly class="os" v-model="os.value" v-on:focus="os.ok = true" v-on:click="dropdown_expanded = true" v-on:focusout="os.value=='' ? os.ok=false : os.ok=true"
            v-bind:class="{invalid:!os.ok}" placeholder="Debian 11">
          <div class="dropdown" v-on:click="dropdown_expanded=false" v-on:mouseover="dropdown_expanded = true" v-on:mouseout="dropdown_expanded = false" v-bind:class="{expanded: dropdown_expanded}">
            <p v-on:click="os.value='arch'">Arch</p>
            <p v-on:click="os.value='debian_10'">Debian 10</p>
            <p v-on:click="os.value='debian_11'">Debian 11</p>
            <p v-on:click="os.value='ubuntu_2004'">Ubuntu Server 20.04 LTS</p>
          </div>
          <p class="red" v-on:mouseover="os.tooltip=true" v-on:mouseout="os.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="os.tooltip">Choose a supported operating system</div>
          </div>
        </div>
        <div class="input" v-if="id == undefined">
          <input class="username" v-model="username.value" v-on:focus="username.ok = true" v-on:focusout="username.value=='' ? username.ok=false : username.ok=true"
            v-bind:class="{invalid:!username.ok}" placeholder="kugelblitz">
          <p class="red" v-on:mouseover="username.tooltip=true" v-on:mouseout="username.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="username.tooltip">The username user account</div>
          </div>
        </div>
        <div class="input" v-if="id == undefined">
          <input class="name" v-model="password.value" v-on:focus="password.ok = true" v-on:focusout="password.value=='' ? password.ok=false : password.ok=true"
            v-bind:class="{invalid:!password.ok}" type="password" placeholder="Password">
          <p class="red" v-on:mouseover="password.tooltip=true" v-on:mouseout="password.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="password.tooltip">Your password for your account</div>
          </div>
        </div>
        <div class="input" v-if="id == undefined">
          <input class="name" v-model="ssh.value" v-on:focus="ssh.ok = true" v-bind:class="{invalid:!ssh.ok}" placeholder="SSH Key">
          <div class="invisible">
            <div class="tooltip" v-if="ssh.tooltip">Your SSH public key (Optional)</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="cpu.value" v-on:focus="cpu.ok = true" v-on:focusout="(cpu.value != null && (cpu.value < 1 || cpu.value > 8)) ? cpu.ok = false : cpu.ok = true"
            v-bind:class="{invalid:!cpu.ok}" type="number" min="1" max="8" placeholder="69">
          <p class="red" v-on:mouseover="cpu.tooltip=true" v-on:mouseout="cpu.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="cpu.tooltip">Min: 1 thread, Max: 8 threads</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="ram.value" v-on:focus="ram.ok = true" v-on:focusout="(ram.value != null && (ram.value < 1 || ram.value > 16)) ? ram.ok = false : ram.ok = true"
            v-bind:class="{invalid:!ram.ok}" type="number" min="1" max="16" placeholder="69">
          <p class="red" v-on:mouseover="ram.tooltip=true" v-on:mouseout="ram.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="ram.tooltip">Min: 1 GB, Max: 16 GB</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="ssd.value" v-on:focus="ssd.ok = true" v-on:focusout="(ssd.value != null && (ssd.value < 5 || ssd.value > 50)) ? ssd.ok = false : ssd.ok = true"
            v-bind:class="{invalid:!ssd.ok}" type="number" min="5" max="50" placeholder="420">
          <p class="red" v-on:mouseover="ssd.tooltip=true" v-on:mouseout="ssd.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="ssd.tooltip">Min: 5 GB, Max: 50 GB</div>
          </div>
        </div>
        <div class="input">
          <textarea class="reason" v-model="reason" rows="4" placeholder="Because I want a VPS"></textarea>
        </div>
      </div>
    </div>
    <p class="red">※ Indicates Mandatory Field</p>
  </div>
  <div class="bottomtext">
    <button class="bottombtn"><router-link class="link" to="/dashboard">Go Back</router-link></button>
    <button class="bottombtn" v-on:click="processSubmit">Submit Request</button>
    <!-- debug info
    <div>displayname {{displayname}}</div>
    <div>hostname {{hostname}}</div>
    <div>os {{os}}</div>
    <div>username {{username}}</div>
    <div>password {{password}}</div>
    <div>ssh {{ssh}}</div>
    <div>cpu {{cpu}}</div>
    <div>ram {{ram}}</div>
    <div>ssd {{ssd}}</div>
    <div>reason {{reason}}</div>
    -->
  </div>
</template>

<script>
import VPSService from '/src/services/vps.service.js'
import {useRouter} from 'vue-router'

export default{
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  methods: {
    processSubmit: function(e) {
      e.preventDefault();
      this.validate();

      var editok = false, createok = false;
      if (this.displayname.ok && this.cpu.ok && this.ram.ok && this.ssd.ok) editok = true;
      if (this.hostname.ok && this.os.ok && this.username.ok && this.password.ok && editok) createok = true;

      if (this.$route.query.id == undefined && createok) this.processCreate();
      else if (this.$route.query.id != undefined && editok) this.processEdit();
    },
    validate: function() {
      if (this.displayname.value == "") this.displayname.ok = false;
      if (this.hostname.value == "") this.hostname.ok = false;
      if (this.os.value == "") this.os.ok = false;
      if (this.username.value == "") this.username.ok = false;
      if (this.password.value == "") this.password.ok = false;
      if (this.cpu.value < 1 || this.cpu.value > 8) this.cpu.ok = false;
      if (this.ram.value < 1 || this.ram.value > 16) this.ram.ok = false;
      if (this.ssd.value < 5 || this.ssd.value > 50) this.ssd.ok = false;
    },
    processCreate: async function() {
      var response = await VPSService.create(this.displayname.value, this.hostname.value, this.username.value, this.password.value,
        this.ssh.value, this.ram.value, this.cpu.value, this.ssd.value, this.os.value, this.reason);
      console.log(response)
      if (response.status == 200) {
        this.$router.push('/confirm?data=create%20VPS');
      }
      else if (response.status == 400) alert("400 BAD REQUEST: Request contained invalid data; Please fix your form and try again");
      else if (response.status == 401) alert("401 UNAUTHORIZED: Please log in again");
      else if (response.status == 500) alert("500 INTERNAL ERROR: Backend Error");
      else alert("Error: Backend Unreachable");
    },
    processEdit: function() {
      alert("@MrPicklePinosaur has not implemented this on the backend. This form currently exists as a monument to his failure.");
    }
  },
  data() {
    var displayname = "", cpu = null, ram = null, ssd = null;
    if (this.$route.query.id != undefined) {
      displayname = this.$route.query.display;
      cpu = this.$route.query.cpu;
      ram = this.$route.query.ram;
      ssd = this.$route.query.ssd;
    }
    return{
      id: this.$route.query.id,
      displayname: {value: (displayname==undefined?"":displayname), ok: true, showtooltip: false},
      hostname: {value: "", ok: true, showtooltip: false},
      os: {value: "", ok: true, showtooltip: false},
      username: {value: "", ok: true, showtooltip: false},
      password: {value: "", ok: true, showtooltip: false},
      ssh: {value: "", ok: true, showtooltip: false},
      cpu: {value: cpu==undefined?null:cpu, ok: true, showtooltip: false},
      ram: {value: ram==undefined?null:ram, ok: true, showtooltip: false},
      ssd: {value: ssd==undefined?null:ssd, ok: true, showtooltip: false},
      reason: "",
      dropdown_expanded: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .maincontent {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: -50px;
  }

  button {
    border: none;
    background: none;
    color: #2c3e50;
  }
  button:active {
    color: lightseagreen;
  }
  input, textarea, select {
    font-size: 18px;
    padding: 5px 10px 5px 10px;
    border: 1px solid slategrey;
    margin: 5px 15px 5px 15px;
    width: 250px;
  }
  input:focus, textarea:focus {
    outline: none;
    border: 1px solid lightseagreen;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .bigtext {
    font-size: 40px;
    margin: 10px 25px 20px 10px;
  }
  .invalid {
    border: 1px solid crimson !important;
    color: red;
  }
  .bottomtext {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
  .bottombtn {
    margin: 10px 10px 10px 10px;
    font-size: 18px;
    vertical-align: middle;
    display: inline-flex;
    color: #2c3e50;
  }
  .reason {
    resize: none;
    columns: 4 !important;
    height: auto !important;
  }
  .red {
    color: red;
    margin: 0px;
    align-self: center;
  }
  .input .red {
    cursor: default;
    user-select: none;
  }
  .label {
    text-align: left;
    margin: 10px 0 11px 0;
  }
  .label.bottom {
    margin: 42px 0 42px 0 !important;
  }
  .link {
    cursor: default;
    text-decoration: none;
    color: inherit;
  }
  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0 30px 0;
  }
  .labels, .inputs {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .input {
    display: flex;
    flex-direction: row;
  }
  .invisible {
    position: relative;
    width: 0;
    height: 0;
  }
  .tooltip {
    position: absolute;
    left: 15px;
    top: 12px;
    width: 400px;
    display: flex;
    justify-content: left;
    color: crimson;
  }
  .dropdown {
    display: none;
    position: absolute;
    margin: 5px 15px;
    background-color: #FFFFFF;
    border: 1px solid lightseagreen;
    width: 270px;
    z-index: 1;
  }
  .dropdown p {
    margin: 0;
    padding: 8px 0;
  }
  .dropdown p:hover {
    background-color: lightseagreen;
    color: #FFFFFF;
  }
  .dropdown.expanded {
    display: block;
  }
</style>
