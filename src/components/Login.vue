<template>
  <div class="maincontent">
      <p class="bigtext">おかえり</p>
      <div class="inputs">
        <input class="username" placeholder="Username">
        <br>
        <input class="password" type="password" placeholder="Password">
        <button class="login_btn">
          <font-awesome-icon icon="arrow-right" />
        </button>
        <p class="forgotpassword link">Forgot your password?</p>
      </div>
  </div>
  <div class="bottomtext">
    <p class="signup link">Sign Up</p>
    <p class="imfeelinghorny link">I'm Feeling Horny</p>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
  cursor: default;
}
.link:active{
  color: cadetblue;
}
.signup, .imfeelinghorny{
  display: inline;
  margin: 0 10px 0 10px;
}
.bottomtext{
  position: absolute;
  bottom: 20px;
  width: 100%;
}
</style>
