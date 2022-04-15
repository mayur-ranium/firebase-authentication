<template>
 <div class="container mx-auto mt-16 lg:w-3/12 text-left px-6">
    <div class="bg-gray-100 shadow-sm rounded-md p-8">
     <h2 class="text-center text-2xl mb-10">Register User</h2>
    <div class="mb-6">
        <label for="email" class="mb-3 block text-gray-700">Email address:</label>
        <input type="email" id="email" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Email" v-model="email" required>
    </div>
    <div class="mb-6">
        <label for="password" class="mb-3 block text-gray-700">password :</label>
        <input type="password" id="password" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="password" v-model="password" required>
    </div>
    <button type="submit" class="py-3 px-12 bg-red-400 mr-5 rounded-md text-white text-lg focus:outline-none w-full" @click="register">Register</button>
</div>
</div>
  <div class="text-red-700 text-xl mt-10 text-center ">{{ errMsg }}</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export default({
    name : "Register",
    setup() {
        const email = ref("");
        const password = ref("");
        const errMsg = ref("");
        const Router = useRouter();
        
    const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        Router.push("/");
        console.log(user);
    })
    .catch(error => {
        console.log(error.message);
        switch (error.code) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
            break
            case 'auth/user-not-found':
                errMsg.value = 'No account with that email was found'
            break
            case 'auth/wrong-password':
                errMsg.value = 'Incorrect password'
            break
            case 'auth/email-already-in-use':
                errMsg.value = 'Email Already in use try another.'
            break
            default:
                errMsg.value = 'Please Enter Your Password.'
            break
        }
    })
}
         return {email, password, errMsg, Router, register}
    },
})
</script>



<script setup>






</script>
