<template>
<h1 class="text-3xl">User Successfully Loged In</h1>
<h1 class="text-3xl m-10">Welcome To My Todo APP {{ user.data.email }}</h1>


</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
          
        };
    },
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
     created(){
     

     }
}
</script>