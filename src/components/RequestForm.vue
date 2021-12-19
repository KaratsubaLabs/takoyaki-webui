<template>
  <div class="maincontent">
    <p class="bigtext">Request {{type}}</p>
    <p class="label">Machine Name</p>
    <input class="name" v-model="name" placeholder="Shibuya">
    <p class="label">CPU Logical Cores (Threads)</p>
    <input class="spec" v-model="cpu" type="number" min="1" placeholder="69">
    <p class="label">RAM (GB)</p>
    <input class="spec" v-model="ram" type="number" min="1" placeholder="69">
    <p class="label">SSD (GB)</p>
    <input class="spec" v-model="ssd" type="number" min="10" placeholder="420">
    <p class="label">Reason</p>
    <textarea class="reason" v-model="reason" rows="4" placeholder="Because I want to"></textarea>
  </div>
  <div class="bottomtext">
    <button class="submitbtn">Submit Request</button>
  </div>
    
</template>

<script>
import {useRouter} from 'vue-router'

export default{
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  methods: {

  },
  data() {
    return{
      type: "new VPS",
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
  color: cadetblue;
}
.maincontent {
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  width: 100%
}
.bigtext {
  font-size: 40px;
  margin: 10px 25px 20px 10px;
}
.name, .spec, .reason {
  font-size: 18px;
  padding: 5px 10px 5px 10px;
  border: 1px solid slategrey;
  margin: 5px 0 30px 0;
}
.name:focus, .spec:focus, .reason:focus {
  outline: none;
  border: 1px solid cadetblue;
}
.bottomtext {
  position: absolute;
  bottom: 20px;
  width: 100%;
}
.submitbtn {
  margin: 10px 10px 10px 10px;
  font-size: 18px;
  vertical-align: middle;
  display: inline-flex;
  color: #2c3e50;
}
.label {
  margin: 0px;
}
.reason {
  resize: none;
}
</style>