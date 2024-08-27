<template>
  <div class="container">
    <h2>Actualizar Materia</h2>
    <div class="datos">
      <p type="Código: ">
        <label class="cod" for="">  {{ codigo }}</label>
      </p>
      <p type="Nombre: "><input v-model="nombre" type="text" /></p>
      <p type="Descripción: ">
        <input class="des" v-model="descripcion" type="text" />
      </p>
      <p type="Número de Créditos: ">
        <input v-model="numCreditos" type="number" />
      </p>
    </div>

    <div class="boton">
      <button class="act" @click="actualizar">Actualizar</button>

      <router-link class="a" to="/listar">Regresar</router-link>
    </div>

    <div class="mensaje" v-if="mensaje">
      <label for="">{{ mensaje }}</label>
      <button class="borrar" @click="borrarMensaje">Ok</button>
    </div>
  </div>
</template>

<script>
import {
  actualizarFachada,
  buscarPorCodigoFachada,
} from "../clients/MateriaCliente.js";
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
  async mounted() {
    this.codigo = this.$route.params.codigo;
    const materia = await buscarPorCodigoFachada(this.codigo);
    if (materia) {
      this.nombre = materia.nombre;
      this.descripcion = materia.descripcion;
      this.numCreditos = materia.numCreditos;
    }
  },
  methods: {
    async actualizar() {
      this.codigo = this.$route.params.codigo;

      const body = {};

      if (this.codigo) {
        body.codigo = this.codigo;
      }

      if (this.nombre) {
        body.nombre = this.nombre;
      }

      if (this.descripcion) {
        body.descripcion = this.descripcion;
      }
      if (this.numCreditos) {
        body.numCreditos = this.numCreditos;
      }

      try {
        const respuesta = await actualizarFachada(body, this.codigo);
        if (respuesta) {
          this.mensaje = "Materia Actualizada con éxito";
          this.mounted();
        }
      } catch (error) {
        console.log(error);
      }
    },
    borrarMensaje() {
      this.mensaje = "";
    },
  },
};
</script>

<style scoped>
p::before {
  content: attr(type);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
input {
  margin-left: 3px;
}

.cod,
input {
  margin-top: 2px;
}

.boton {
  display: flex;
  flex-direction: column;
}

.datos {
    border: solid 2px #d4a373;
  padding: 0px 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}

button {
  padding: 5px;
  cursor: pointer;
}

.cod {
  border: solid 1px black;
  border-radius: 2px;
  min-width: 170px;
  display: flex;
  margin-left: 3px;
  align-items: flex-start;
  padding: 0px 2px;
}

.a {
  border: solid 1px black;
  border-radius: 2px;
  margin: 5px;
  padding: 5px;
}

.borrar:hover,
.act:hover,
.a:hover {
  background-color: #f4f1de;
  color: #3d405b;
  border-radius: 5px;
}

.mensaje {
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
  align-items: center;
}

.act,
.a {
  border: solid 1px black;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  font-size: 15px;
  background: #e3d5ca;
}

.mensaje .borrar {
  margin-top: 5px;
  width: 30px;
}
</style>