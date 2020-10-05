import Vue from 'vue'
import VueRouter from 'vue-router'
import Listagem from '../components/Listagem.vue'
import Formulario from '../components/Formulario.vue'
import CriarFormulario from '../components/CriarFormulario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Listagem',
    component: Listagem
  },
  {
    path: '/criarFormulario',
    name: 'criarFormulario',
    component: CriarFormulario
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
