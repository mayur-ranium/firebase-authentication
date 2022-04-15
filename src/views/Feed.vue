<template>
<h1 class="text-3xl">User Successfully Loged In</h1>
<h1 class="text-3xl m-10">Welcome To My Todo APP {{ user.data.email }}</h1>

</template>

<script>
import { useStore } from "vuex"
export default {
  name : "Feed",
  setup() {
    const store = useStore();
    const  user = store.getters.user;
    console.log(user);
    return{store, user};
  },
}
</script>

