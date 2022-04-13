<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
export default{
    name: "register",
    data() {
        return{
            email : "",
            password : "",
        };
    },
    methods: {
        register(){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }
}

</script>