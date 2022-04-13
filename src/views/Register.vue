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
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
export default{
    name: "register",
    data() {
        return{
            email : "",
            password : "",
            errMsg: "",
        };
    },
    methods: {
        register(){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.$router.push("/");
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error);
                switch (error.code) {
                case 'auth/invalid-email':
                    this.errMsg = 'Invalid email'
                    break
                case 'auth/email-already-in-use':
                   this.errMsg = 'Email already in use'
                      break
                case 'auth/weak-password':
                   this.errMsg = 'Password should be at least 6 characters'
                      break
                default:
                   this.errMsg = 'Please Ener password'
                   break
                }
                 });

        }
    }
}

</script>