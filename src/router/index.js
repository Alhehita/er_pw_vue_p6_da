import { createRouter, createWebHashHistory } from 'vue-router'
import Actualizar from '../page/ActualizarMateriaPage.vue'
import Nueva from '../page/NuevaMateriaPage.vue'

import Listar from '../page/ListarMateriaPage.vue'

const routes = [
 
  {
    path: '/nueva',
    component: Nueva
  },
   
  {
    path: '/listar',
    component: Listar
  },
   
  {
    path: '/actualizar/:codigo',
    component: Actualizar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
