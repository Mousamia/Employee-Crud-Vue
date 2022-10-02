<template>
  <table>
    <thead>
      <tr>
        <th>#ID</th>
        <th>Title</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>


    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td> {{employee.id}} </td>
        <td> {{ employee.title}} </td>
        <td> <img :src="employee.image" :alt="employee.title" :width="90"/>  </td>
        <td>
          <button @click="del(employee.id)" class="btn btn-del"> Delete</button>
        </td>
        
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {

  name: 'Employees',
  setup(){
    const employees = ref([]);
    onMounted(async ()=>{
      const res = await fetch('http://localhost:3000/employees');
      employees.value = await res.json();

    }) 

  const del = async(id) =>{
   await  fetch(`http://localhost:3000/employees/${id}`, {
    method : 'DELETE'
   })

    employees.value = employees.value.filter(p=> p.id !=id)

  }


    return { employees, del}
  }
    

}
</script>

<style>

</style> 