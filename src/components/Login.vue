<template>
  <div class="maincontent">
      <p class="bigtext" v-if="this.$route.path == '/login'" v-on:click="this.horny++">おかえり</p>
      <p class="bigtext" v-if="this.$route.path == '/signup'" v-on:click="this.horny++">ようこそ</p>
      <div class="inputs">
        <input class="email" v-model="email" placeholder="Email">
        <br>
        <input class="password" v-model="password" type="password" placeholder="Password">
        <button class="login_btn" v-on:click="logUp">
          <font-awesome-icon icon="arrow-right" />
        </button>
        <p v-if="this.$route.path == '/login'" class="forgotpassword link" v-on:click="processResetPassword">Forgot your password?</p>
      </div>
  </div>
  <div class="bottomtext">
    <p class="signup link" v-if="this.$route.path == '/login'" v-on:click="this.$router.push('/signup'); this.horny=0">No Account? Sign Up</p>
    <p class="signup link" v-if="this.$route.path == '/signup'" v-on:click="this.$router.push('/login'); this.horny=0">Already Have an account? Log In</p>
    <a v-if="horny>=10" class="horny link" href="https://myanimelist.net/anime/40750/Kaifuku_Jutsushi_no_Yarinaoshi" target="_blank">I'm Feeling Horny</a>
  </div>
</template>

<script>
import AuthService from '/src/services/auth.service.js'
import {useRouter} from 'vue-router'

export default {
  setup() {
    if (localStorage.getItem('authToken') != null) useRouter().push('/dashboard');
  },
  methods: {
    logUp: function(e) {
      e.preventDefault();
      if (this.email == "") alert("Email cannot be empty");
      else if (this.password == "") alert("Password cannot be empty");
      else {
        if (this.$route.path == '/login') this.processLogin();
        else if (this.$route.path == '/signup') this.processSignUp();
      }
    },
    processLogin: function() {
      var response = AuthService.login(this.email, this.password);
      console.log(response)
      if (response.status == 200) {
        this.horny=0;
        this.$router.push('/dashboard');
      }
      else if (response.status == 401) alert("401 UNAUTHORIZED: Email or password incorrect");
      else if (response.status == 500) alert("500 INTERNAL ERROR: Backend Error");
      else alert("Error: Backend Unreachable");
      this.password = "";
    },
    processSignUp: function() {
      var response = AuthService.register(this.email, this.password);
      console.log(response);
      if (response.status == 200) {
        this.horny = 0;
        this.$router.push('/kongura?data=sign%20up');
      }
      else if (response.status == 409) alert("409 CONFLICT: Email is taken");
      else if (response.status == 500) alert("500 INTERNAL ERROR: Backend Error");
      else alert("Error: Backend Unreachable");
    },
    processResetPassword: function(e) {
      e.preventDefault();
      var email = window.prompt("Please enter your email address:");
      
      if(email == "") alert("Please enter an email address!");
    }
  },
  data() {
    return {
      horny: 0,
      email: "",
      password: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maincontent{
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 100%
}
.bigtext{
  font-size: 100px;
  margin: 10px;
  user-select: none;
  cursor: default;
}
.email, .password{
  font-size: 18px;
  padding: 5px 10px 5px 10px;
  border: 1px solid slategrey;
  margin: 10px 0 10px 0;
}
.email:focus, .password:focus{
  outline: none;
  border: 1px solid cadetblue;
}
.email{
  width: 250px;
}
.password{
  width: 217px;
  border-right: 0px !important;
}
.login_btn{
  height: 33px;
  width: 33px;
  padding: 0px;
  background: white;
  border: 1px solid slategrey;
  font-size: 18px;
  color: #2c3e50;
}
.login_btn:active{
  border: 1px solid cadetblue;
}
.link{
  user-select: none;
  cursor: default;
}
.link:active{
  color: cadetblue;
}
.signup, .horny{
  display: inline;
  margin: 0 10px 0 10px;
}
.bottomtext{
  position: absolute;
  bottom: 20px;
  width: 100%;
}
</style>
