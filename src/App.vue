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
         <span @click="Logout" class="font-bold cursor-pointer">Logout</span>
        </span>
   </div>
</div>
<router-view />
</template>

<script >
  import { ref } from "vue";
  import { useRouter } from "vue-router"
  import { useStore } from "vuex"
  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
  export default({
    setup() {
      const Router = useRouter();
      const loggedIn = ref(true);
      const store = useStore();
      
      const  user = store.getters.user;
      const Logout = () => {
        const auth = getAuth();
        auth.signOut()
        Router.push('/')
      }
      
      return { Logout, user, loggedIn}
      
    }
  })

  

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
