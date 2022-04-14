<template>
<div class="shadow-lg w-1/2 mx-auto font-bold mb-12 py-10">
<h1 class="text-xl text-emerald-500">User Successfully Loged In</h1>
<h1 class="text-2xl my-2 text-red-500 bg-white p-2">Welcome To My Todo APP </h1>
<h1 class="text-blue-500 capitalize">USER : {{ user.data.email }}</h1>

</div>
<div>
   
    <div class="flex w-1/2 mx-auto">
        <input type="text" id="text" class="bg-white rounded-md border border-gray-200 px-4 py-2 placeholder:text-slate-400 focus:outline-none w-full focus:ring-1 focus:ring-red-200" placeholder="Enter Your Task" v-model="enterTask" >
        <button class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 font-medium rounded-lg ml-2 focus:outline-none focus:ring-1 focus:ring-violet-300">SUBMIT</button>
    </div>
    <div class="mt-8">
    <table class="border-collapse border border-slate-400 w-1/2 mx-auto text-black text-left">
        <thead>
        <tr>
            <th class="border border-slate-300 px-2 font-bold">TASKS</th>
            <th class="border border-slate-300 px-2 font-bold">STATUS</th>
            <th class="border border-slate-300"></th>
            <th class="border border-slate-300"></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(task, taskIndex) in tasks" :key="taskIndex">
                <td class="border border-slate-300 px-2 py-2">{{ task.name }}</td>
                <td class="border border-slate-300 px-2 py-2">{{ task.status }}</td>
                <td class="border border-slate-300 text-center">
                <div>
                    <span class="fa fa-pen"></span>
                </div>
                </td>
                <td class="border border-slate-300 text-center">
                <div>
                    <span class="fa fa-trash"></span>
                </div>
                </td>
            </tr>
        </tbody>

    </table>

    </div>
     
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
          enterTask: "",
          tasks: [
              {
                  name : "Woke up 7 am",
                  status : "to do"
              },
              {
                  name : "meeting scheduled at 10 am",
                  status : "in progress"
              },

          ] 
        };
    },
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
     created(){
     },
}
</script>