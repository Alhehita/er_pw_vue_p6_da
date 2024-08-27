<template>
  <div class="container">
    <h2>Nueva Materia</h2>
    <div class="datos">
      <p type="Código: "><input v-model="codigo" type="text" /></p>
      <p type="Nombre: "><input v-model="nombre" type="text" /></p>
      <p type="Descripción: "><input v-model="descripcion" type="text" /></p>
      <p type="Número de Créditos: ">
        <input v-model="numCreditos" type="number" />
      </p>
    </div>

    <div class="boton">
      <button class="guardar" @click="guardar">Guardar</button>
    </div>

    <div class="mensaje" v-if="mensaje">
      <label for="">{{ mensaje }}</label>
      <button class="borrar" @click="borrarMensaje">Ok</button>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "../clients/MateriaCliente.js";
export default {
  data() {
    return {
      codigo: "",
      nombre: "",
      descripcion: "",
      numCreditos: 0,
      mensaje: "",
    };
  },
  methods: {
    async guardar() {
      const body = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        numCreditos: this.numCreditos,
      };
      try {
        const resultado = await guardarFachada(body);
        if(resultado){
            this.mensaje ="Materia guardad con éxito"
            this.limpiarPantalla();
        }
      } catch (error) {
        console.log(error);
      }
    },
    limpiarPantalla(){
        this.codigo="";
      this.nombre= "";
      this.descripcion= "";
      this.numCreditos= 0;
    },
    borrarMensaje(){
        this.mensaje ="";
    }
    
    },
};
</script>

<style scoped>

.guardar:hover, .borrar:hover {
  background-color: #f4f1de;
  color: #3d405b;
  border-radius: 5px;
}
p::before {
  content: attr(type);
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

}


p{
    display: flex;
}
input{
    margin-left:3px ;
}

.datos{
    border: solid 2px #d4a373;
    border-radius: 4px;
    margin-bottom: 15px;
    padding: 0px 10px;
}

button{
    padding: 5px;

}

.guardar{
    font-size: 15px;
        background: #e3d5ca;
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

button{
    cursor: pointer;
}
</style>