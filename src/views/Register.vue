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
  <div class="text-red-700 text-xl mt-10 text-center ">{{ errorMsg }}</div>
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
        const errorMsg = ref('');
        const errorMessage = ref('');
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
        console.log(error);
          let errorMessage = {
                 'auth/internal-error' : 'Password is Missing',
                 'auth/invalid-email': "Invalid Email" ,
                 'auth/weak-password': "Password should be at least 6 characters ",
                 'auth/email-already-in-use': "Email Already in use Try Another",
                }
                console.log(errorMessage[error.code]);
                errorMsg.value = errorMessage[error.code];
            });
        }
         return {email, password, errorMsg, Router,errorMessage, register}
    },
})
</script>



<script setup>






</script>
