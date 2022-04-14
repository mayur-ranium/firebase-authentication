<template>
<div class="container mx-auto mt-16 w-full lg:w-3/12 text-left px-6">
  
<div class="bg-gray-100 shadow-sm rounded-md p-8">
    <h2 class="text-center text-2xl mb-10">Login</h2>
    <div class="mb-6">
        <label for="email" class="mb-3 block text-gray-700">Email address:</label>
        <input type="email" id="email" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Email" v-model="email" required>
    </div>
    <div class="mb-6">
        <label for="password" class="mb-3 block text-gray-700">password :</label>
        <input type="password" id="password" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="password" v-model="password" required>
    </div>
    <button type="submit" class="py-3 px-12 bg-red-400 mr-5 rounded-md text-white text-lg focus:outline-none w-full" @click="login">Sign In</button>
</div>

</div>
     <div class="text-red-500 text-xl mt-10 text-center">{{ errMsg }}</div>
  </template>

<script>
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
export default {
    name : "login",
    data(){
        return{
         email : "",
         password : "",
         errMsg: "",
        };
    },
    methods: {
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    console.log("user successfully loged in");
                    this.$router.push("/feed");
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                    this.errMsg = 'Invalid email'
                    break
                case 'auth/user-not-found':
                  this.errMsg = 'No account with that email was found'
                     break
                case 'auth/wrong-password':
                   this.errMsg = 'Incorrect password'
                      break
                default:
                   this.errMsg = 'Please Enter Your Password.'
                       break
                    }
                 });
                }
    }
}
</script>
<style >
    .error-msg{
        color: red;
        font-size: 16px;
    }

</style>