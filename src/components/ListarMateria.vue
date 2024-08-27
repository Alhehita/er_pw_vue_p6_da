<template>
  <div class="container">
    <div class="consultar">
      <button class="cons" @click="listar">Consultar</button>
    </div>
    <div class="datos">
      <table>
        <thead>
          <th>Código</th>
          <th>Nombre</th>
          <th>Acción</th>
          <th>Acción</th>
        </thead>
        <tbody>
          <tr v-for="detalle in detalles">
            <td>{{ detalle.codigo }}</td>
            <td>{{ detalle.nombre }}</td>
            <td>
              <router-link class="a" :to="'/actualizar/'+detalle.codigo"
                >Actualizar</router-link
              >
            </td>
            <td><button class="eliminar" @click="eliminar(detalle.id)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>

      <div class="mensaje" v-if="mensaje">
      <label for="">{{ mensaje }}</label>
      <button class="borrar" @click="borrarMensaje">Ok</button>
    </div>
    </div>
  </div>
</template>

<script>
import {
  buscarTodosFachada,
  eliminarFachada,
} from "../clients/MateriaCliente.js";
export default {
  data() {
    return {
      detalles: [],
      mensaje: "",
    };
  },
  methods: {
    async listar() {
      const materia = await buscarTodosFachada();

      this.detalles = materia;
    },
    borrarMensaje() {
      this.mensaje = "";
    },
    async eliminar(id) {
      try {
        const resultado = await eliminarFachada(id);
        if (resultado) {
          this.mensaje = "Materia eliminada con éxito";
          this.listar();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
th,
td,
table {
  border: solid 1px black;
  font-size: 15px;
}

th,
td {
  padding: 5px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table{
    margin: 15px;
       border-collapse: collapse;
       
}
.cons{
    padding: 5px;
    border-radius: 5px;

}

.mensaje{
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin:10px ;
        align-items: center;

}

.mensaje .borrar{
    margin-top:5px ;
    width: 30px;
    
}

thead{
    background: #d4a373;
}


.borrar:hover, .eliminar:hover,.cons:hover, .a:hover  {
  background-color: #f4f1de;
  color: #3d405b;
  border-radius: 5px;
}
.eliminar, .a{
    border: solid 1px black;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
        font-size: 15px;
        background: #e3d5ca;

   
}
button{
    cursor: pointer;
}

.borrar{
    padding: 5px;
}

.eliminar{
    color: blueviolet;
}

</style>