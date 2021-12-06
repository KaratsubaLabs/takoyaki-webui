<template>
  <div class="toplinks">
      <p class="bigtext topitem">My Dashboard</p>
      <button class="topitem">Request New</button>
      <button class="topitem">Start</button>
      <button class="topitem">Download Snapshot</button>
      <button class="topitem">Delete</button>
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
export default {
  name: 'Dashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  border: none;
  background: none;
  color: #2c3e50;
}
button:active{
  color: cadetblue;
}
table{
  border-collapse: collapse;
  margin: 0 10px 0 10px;
}
th{
  padding: 5px 15px 5px 15px;
  border-bottom: 2px solid slategrey;
}
td{
  padding: 5px 10px 5px 10px;
}
.toplinks {
  height: auto;
  width: 100%;
  text-align: left;
}
.topitem {
  margin: 10px 10px 10px 10px;
  font-size: 18px;
  vertical-align: middle;
  display: inline-flex;
  color: #2c3e50;
}
.bigtext{
  font-size: 40px;
  margin: 10px 25px 10px 10px;
}
</style>
