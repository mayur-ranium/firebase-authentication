<script setup>
</script>

<template>
<div id="nav">
      <router-link to="/"> Home </router-link> |
     <span v-if="isLoggedIn"
      >
         <router-link to="/feed"> Feed </router-link> |
        <span @click="signOut" class="font-bold cursor-pointer">Logout</span>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/login"> Login </router-link>
      </span>
      
    </div>
 <router-view />
</template>
<script>
  import { getAuth, signOut } from "firebase/auth";

export default {
  data(){
    return{
      isLoggedIn : true,
    }
  },
  methods: {
    signOut(){
        const auth = getAuth();
          console.log(auth);
         signOut(auth).then(() => {
            this.$router.push("/");
            this.isLoggedIn = false;
           console.log("sign out successful");
         }).catch((error) => {
        console.log(error); 
     });
    }
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
input {
    margin-right: 20px;
}
</style>
