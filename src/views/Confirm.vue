<template>
  <div class="maincontent">
    <p class="bigtext jp">オメデトウ</p>
    <p class="mediumtext">Your {{data}} request has been submitted!</p>
    <router-link class="link mediumtext" to="/dashboard">Back to Dashboard</router-link>
  </div>
</template>

<script lang="ts">
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

  .maincontent {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .bigtext {
    font-size: 140px;
    font-style: italic;
    margin: 50px 0;
  }

  .mediumtext {
    font-size: 24px;
    margin-top: -10px;
  }

  .mediumtext.link {
    margin-top: 8%;
  }
  
</style>
