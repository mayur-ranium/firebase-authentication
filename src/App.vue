<script setup>
</script>

<template>
<div id="nav"> 
   <div>
      <router-link to="/"> Home </router-link> |
     <span v-if="!user.loggedIn">
        <router-link to="/register"> Register </router-link> |
        <router-link to="/login"> Login </router-link>
     </span>
     <span v-else>
          <router-link to="/feed"> Feed </router-link> |
      <span @click="signOut" class="font-bold cursor-pointer">Logout</span>
      </span>
   </div>
   
</div>
 <router-view />
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
import { mapGetters } from "vuex";

export default {
  data(){
    return{
   
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
 created(){
   
 },
  methods: {
    signOut(){
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log(auth)
        this.$router.push("/");
        // Sign-out successful.
      }).catch((error) => {
        console.log(error);
    // An error happened.
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
