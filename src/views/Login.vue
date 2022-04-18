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
     <div class="text-red-500 text-xl mt-10 text-center">{{ errorMsg }}</div>
  </template>

<script>
import { ref } from "vue"
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router'

export default({
    name : "Login",
    setup() {
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const errorMessage = ref('');
        const errorMsg = ref('');

    const login = () => {
      const auth = getAuth();
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    console.log("user successfully loged in");
                    router.push("/feed");
                })
            .catch(error => {
                let errorMessage = {
                    'auth/invalid-email': "Invalid email",
                    'auth/user-not-found': 'No account with that email was found',
                    'auth/wrong-password': 'Incorrect password',
                    'auth/MISSING_PASSWORD': 'Password is missing',
                    'auth/INVALID_ARGUMENT': 'API key not valid. Please pass a valid API key.',
                    'default': 'Please Enter Your Password.'
                }
                console.log(errorMessage[error.code]);
                errorMsg.value = errorMessage[error.code];
            });
        }
        return{email, password, login, router, errorMessage, errorMsg}
    },
})
 



   

   
</script>
<script>


</script>
