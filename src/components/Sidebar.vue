<template>
  <div class="sidebar">
    <ul class="side-menu">
      <li><router-link :to="{ name : 'Employees'}" > Employees And their Nakhra</router-link></li>
      <li><router-link :to ="{ name : 'EmployeeCreate'}"> Add Employees</router-link> </li>



    </ul>
  </div>
</template>

<script>
export default {
    name : 'Sidebar'

}
</script>

<style>

</style>