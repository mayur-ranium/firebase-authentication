<template>
<div class="shadow-lg w-1/2 mx-auto font-bold mb-12 py-10">
<h1 class="text-xl text-emerald-500">User Successfully Loged In</h1>
<h1 class="text-2xl my-2 text-red-500 bg-white p-2">Welcome To My Todo APP </h1>
<h1 class="text-blue-500 normal-case">USER : {{ user.data.email }}</h1>

</div>
<div>
   
    <div class="flex w-1/2 mx-auto">
        <input type="text" id="text" class="bg-white rounded-md border border-gray-200 px-4 py-2 placeholder:text-slate-400 focus:outline-none w-full focus:ring-1 focus:ring-red-200" placeholder="Enter Your Task" v-model="enterTask" >
        <button class="bg-red-400 hover:bg-red-600 text-white px-4 py-2 font-bold rounded-lg ml-2 focus:outline-none focus:ring-1 focus:ring-violet-300" :disabled="enterTask == ''" :class="enterTask == '' ? 'cursor-not-allowed' : 'cursor-pointer' " @click="submitTask">SUBMIT</button>
    </div>
    <div class="mt-8">
    <table class="border-collapse border border-slate-400 w-1/2 mx-auto text-black text-left">
        <thead class="text-center">
        <tr>
            <th>SR NO.</th>
            <th class="border border-slate-300 px-2 font-bold">TASKS</th>
            <th class="border border-slate-300 px-2 font-bold">STATUS</th>
            <th class="border border-slate-300">EDIT</th>
            <th class="border border-slate-300">REMOVE</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(task, taskIndex) in tasksList" :key="taskIndex" class="text-center">
                <td class="border border-slate-300 px-2 py-2 ">{{ taskIndex + 1 }}</td>
  
                <td class="border border-slate-300 px-2 py-2 text-left cursor-pointer capitalize font-semibold" @click="taskStatus(task)" :class="task.done ? 'text-green-600' : 'text-red-500'">{{ task.content }}</td>
                    <td class="border border-slate-300 px-2 py-2">
                    <input type="checkbox" v-model="task.done" class="ml-2 border border-slate-300 cursor-pointer">
                </td>
                <td class="border border-slate-300">
                <div @click="editTask(taskIndex)">
                    <span class="fa fa-pen"></span>
                </div>
                </td>
                <td class="border border-slate-300 text-center">
                <div @click="removeTask(taskIndex)">
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
import { useStore, mapGetters } from "vuex"

import { ref } from "vue"
export default {
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    },
    name : "Feed",
    setup() {
    const store = useStore();
    const  user = store.getters.user;
    const enterTask = ref('');
    const tasksList = ref([
        {   
            content : "hello world",
            done : false
        },
        {   
            content : "have meeting",
            done : false
        }
    ]);
    const editedTask = ref(null);

    const submitTask = () => {
      if(editedTask.value == null){
           tasksList.value.push ({
                 content : enterTask.value,
                 done : false,
             })
       }else{
           console.log("enter task else", tasksList.value[editedTask.value].content);
           tasksList.value[editedTask.value].content = enterTask.value;
           editedTask.value = null;
       }
         enterTask.value = "";
    }
    
    const taskStatus = (task) => {
      console.log(task);
      task.done = !task.done;
   }

    const editTask = (index) => {
       console.log(tasksList.value[index].content);
       enterTask.value = tasksList.value[index].content;
       editedTask.value = index;
    }
    
    const removeTask = (index) => {
        console.log("remove");
        tasksList.value.splice(index, 1);
    }
    return{
        store, 
        user, 
        submitTask, 
        tasksList, 
        enterTask, 
        removeTask, 
        editTask, 
        editedTask, 
        taskStatus};


  },
}
</script>

