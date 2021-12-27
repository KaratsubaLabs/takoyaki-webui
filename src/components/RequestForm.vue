<template>
  <div class="maincontent">
    <p class="bigtext">Request {{label}}</p>
    <div class="form">
      <div class="labels">
        <p class="label" v-on:mouseover="displayname.tooltip=true" v-on:mouseout="displayname.tooltip=false">Display Name</p>
        <p class="label" v-on:mouseover="hostname.tooltip=true" v-on:mouseout="hostname.tooltip=false">Hostname</p>
        <p class="label" v-on:mouseover="cpu.tooltip=true" v-on:mouseout="cpu.tooltip=false">CPU Logical Cores</p>
        <p class="label" v-on:mouseover="ram.tooltip=true" v-on:mouseout="ram.tooltip=false">RAM (GB)</p>
        <p class="label" v-on:mouseover="ssd.tooltip=true" v-on:mouseout="ssd.tooltip=false">SSD (GB)</p>
        <p class="label bottom">Reason</p>
      </div>
      <div class="inputs">
        <div class="input">
          <input class="name" v-model="displayname.value" v-on:focus="displayname.ok = true" v-bind:class="{invalid:!displayname.ok}" placeholder="Shibuya">
          <p class="red" v-on:mouseover="displayname.tooltip=true" v-on:mouseout="displayname.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="displayname.tooltip">This field is mandatory</div>
          </div>
        </div>
        <div class="input">
          <input class="name" v-model="hostname.value" v-on:focus="hostname.ok = true" v-bind:class="{invalid:!hostname.ok}" placeholder="shibuya">
          <p class="red" v-on:mouseover="hostname.tooltip=true" v-on:mouseout="hostname.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="hostname.tooltip">This field is mandatory</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="cpu.value" v-on:focus="cpu.ok = true" v-on:focusout="(cpu != null && (cpu.value < 1 || cpu.value > 8)) ? cpu.ok = false : cpu.ok = true"
            v-bind:class="{invalid:!cpu.ok}" type="number" min="1" max="8" placeholder="69">
          <p class="red" v-on:mouseover="cpu.tooltip=true" v-on:mouseout="cpu.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="cpu.tooltip">Min: 1 thread, Max: 8 threads</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="ram.value" v-on:focus="ram.ok = true" v-on:focusout="(ram != null && (ram.value < 1 || ram.value > 16)) ? ram.ok = false : ram.ok = true"
            v-bind:class="{invalid:!ram.ok}" type="number" min="1" max="16" placeholder="69">
          <p class="red" v-on:mouseover="ram.tooltip=true" v-on:mouseout="ram.tooltip=false">※</p>
          <div class="invisible">
            <div class="tooltip" v-if="ram.tooltip">Min: 1 GB, Max: 16 GB</div>
          </div>
        </div>
        <div class="input">
          <input class="spec" v-model="ssd.value" v-on:focus="ssd.ok = true" v-on:focusout="(ssd != null && (ssd.value < 5 || ssd.value > 50)) ? ssd.ok = false : ssd.ok = true"
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
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default{
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  methods: {
    processSubmit: function(e) {
      e.preventDefault();
      if (this.displayname.value == "") this.displayname.ok = false;
      if (this.hostname.value == "") this.hostname.ok = false;
      if (this.cpu.value < 1 || this.cpu.value > 8) this.cpu.ok = false;
      if (this.ram.value < 1 || this.ram.value > 16) this.ram.ok = false;
      if (this.ssd.value < 5 || this.ssd.value > 50) this.ssd.ok = false;

      if (this.displayname.ok && this.hostname.ok && this.cpu.ok && this.ram.ok && this.ssd.ok) {
        if (this.$route.query.action == "create") {
          this.processCreate();
        }
        else if (this.$route.query.action == "modify") {
          this.processEdit();
        }
      }
    },
    processCreate: function() {
      
    },
    processEdit: function() {

    }
  },
  data() {
    var label = "new VPS"
    console.log(this.$route.query.id);
    if (this.$route.query.id == undefined) {
      label = "new VPS";
    } else {
      label = "to edit VPS";
    }
    return{
      label: label,
      displayname: {value: "", ok: true, showtooltip: false},
      hostname: {value: "", ok: true, showtooltip: false},
      cpu: {value: null, ok: true, showtooltip: false},
      ram: {value: null, ok: true, showtooltip: false},
      ssd: {value: null, ok: true, showtooltip: false},
      reason: "",
      test: false
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
  input, textarea {
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
  .maincontent {
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    width: 100%;
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
</style>