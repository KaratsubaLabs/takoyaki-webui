<template>
  <div class="maincontent">
    <p class="bigtext">コングラ</p>
    <p class="smoltext">Your {{data}} request has been submitted!</p>
    <button class="smolbtn"><router-link class="link" to="/dashboard">Back to Dashboard</router-link></button>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  setup() {
    if (localStorage.getItem('authToken') == null) useRouter().push('/login');
  },
  data() {
    if (this.$route.query.data == undefined) this.$router.push("/");
    return {
      data: this.$route.query.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    color: #2c3e50;
    border: none;
    background: none;
  }
  button:active {
    color: lightseagreen;
  }
  .maincontent {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%
  }
  .bigtext {
    font-size: 140px;
    font-style: italic;
    margin: 0;
  }
  .smoltext {
    margin: 0;
    font-size: 26px;
  }
  .smolbtn {
    margin-top: 8%;
    font-size: 24px;
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
</style>
