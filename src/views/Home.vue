<template>
    <div>
        <h1 class="text-3xl">Welcome Home!!!</h1>
     

        <p>{{VITE_API_KEY}}</p>
        <p>{{VITE_APP_ID}}</p>
        <p>{{VITE_PROJECT_ID}}</p>


    </div>
</template>


<script>
export default {
    name: "Home",
   data(){
       return{
         
           VITE_API_KEY: import.meta.env.VITE_API_KEY,
           VITE_APP_ID: import.meta.env.VITE_APP_ID,
           VITE_PROJECT_ID: import.meta.env.VITE_PROJECT_ID
           
     



       }
   }
}
</script>