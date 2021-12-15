<template>
  <div class="maincontent">
      <p class="bigtext" v-on:click="incrementEasteregg">おかえり</p>
      <div class="inputs">
        <input class="username" v-model="username" placeholder="Username">
        <br>
        <input class="password" v-model="password" type="password" placeholder="Password">
        <button class="login_btn" v-on:click="processLogin">
          <font-awesome-icon icon="arrow-right" />
        </button>
        <p class="forgotpassword link">Forgot your password?</p>
      </div>
  </div>
  <div class="bottomtext">
    <p class="signup link">Sign Up</p>
    <a v-if="horny>=10" class="horny link" href="https://myanimelist.net/anime/40750/Kaifuku_Jutsushi_no_Yarinaoshi" target="_blank">I'm Feeling Horny</a>
  </div>
</template>

<script>
import AuthService from '/src/services/auth.service.js'

export default {
  name: 'Login',
  methods: {
    incrementEasteregg: function(e) {
      e.preventDefault();
      this.horny++;
    },
    processLogin: function(e) {
      e.preventDefault();
      if (this.username == "") alert("Username cannot be empty");
      else if (this.password == "") alert("Password cannot be empty");
      else {
        var response = AuthService.login(this.username, this.password);
        console.log(response)
        if (response.status == 200) {
          this.$router.push('/dashboard');
        }
        else if (response.status == 401) alert("401 UNAUTHORIZED: Username or password incorrect");
        else if (response.status == 500) alert("500 INTERNAL ERROR: Backend Error");
        else alert("Error: Backend Unreachable");
        this.password = "";
      }
    },
  },
  data() {
    return {
      horny: 0,
      username: "",
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
.username, .password{
  font-size: 18px;
  padding: 5px 10px 5px 10px;
  border: 1px solid slategrey;
  margin: 10px 0 10px 0;
}
.username:focus, .password:focus{
  outline: none;
  border: 1px solid cadetblue;
}
.username{
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
