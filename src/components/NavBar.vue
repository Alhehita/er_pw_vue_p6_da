<template>
<div class="container">
  
    <router-link class="a" to="/nueva">Crear Nueva Materia</router-link> 
    <router-link class="a" to="/listar">Consultar Materias</router-link>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

.a{
    border: solid 1px black;
    border-radius: 2px;
    margin: 5px;
    padding: 5px;
    background: #faedcd;
   
}

.container{
     margin-top: 30px;

      margin-bottom: 30px;

      
}

.a:hover {
  background-color: #f4f1de;
  color: #3d405b;
  border-radius: 5px;
}

</style>