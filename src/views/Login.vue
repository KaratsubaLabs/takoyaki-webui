<template>
  <div class="maincontent">
    <p class="bigtext jp" v-if="this.$route.path == '/login'" v-on:click="this.horny++">おかえり</p>
    <p class="bigtext jp" v-if="this.$route.path == '/signup'" v-on:click="this.horny++">ようこそ</p>

    <div class="input-container">
      <input class="email" v-model="email" placeholder="Email">
    </div>

    <div class="input-container">
      <input class="password" v-model="password" type="password" placeholder="Password">
      <button class="login_btn" v-on:click="logUp">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
    
    <p v-if="this.$route.path == '/login'" class="forgotpassword link" v-on:click="processResetPassword">Forgot your password?</p>
  </div>
  <div class="bottomtext">
    <p v-if="this.$route.path == '/login'">
      No account? <RouterLink class="link" to="/signup">Sign Up</RouterLink>
    </p>
    <p v-if="this.$route.path == '/signup'">
      Already have an account? <RouterLink class="link" to="/login">Log In</RouterLink>
    </p>
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
    togglePages: function(route) {
      this.$router.push(route);
      this.horny = 0;
      this.email = "";
      this.password = "";
    },
    logUp: function(e) {
      e.preventDefault();
      if (this.email == "") alert("Email cannot be empty");
      else if (this.password == "") alert("Password cannot be empty");
      else {
        if (this.$route.path == '/login') this.processLogin();
        else if (this.$route.path == '/signup') this.processSignUp();
      }
    },
    processLogin: async function() {
      var response = await AuthService.login(this.email, this.password);
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
    processSignUp: async function() {
      var response = await AuthService.register(this.email, this.password);
      console.log(response);
      if (response.status == 200) {
        this.horny = 0;
        this.$router.push('/dashboard');
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
<style scoped lang="scss">

  .maincontent {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: -50px;
  }

  .bigtext {
    font-size: 100px;
    margin-top: 10px;
    margin-bottom: 30px;
    user-select: none;
    cursor: default;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    width: 250px;
    margin: 10px auto;

    input {
      font-size: 18px;
      min-width: 0;
      padding: 5px 10px;
      outline: none;
      border : 1px solid var(--bg-color-alt);
      background-color: var(--bg-color-alt);
      color: var(--text-color-alt);
    }

    input:focus {
      border: 1px solid var(--accent-hover);
    }

    .email {
      border-radius: 7px;
    }

    .password {
      border-radius: 7px 0 0 7px;
    }
  }

  .login_btn {
    border-radius: 0 7px 7px 0;
    min-height: 34px;
    min-width: 34px;
    padding: 0px;
    border : 1px solid var(--bg-color-alt);
    background-color: var(--bg-color-alt);
    font-size: 18px;
    color: var(--text-color-alt);
  }

  .login_btn:hover {
    border: 1px solid var(--accent-hover);
    color: var(--accent-hover);
  }

  .login_btn:active {
    border: 1px solid var(--accent-primary);
    color: var(--accent-hover);
  }

  .bottomtext {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }

</style>
