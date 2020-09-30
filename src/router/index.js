import Vue from 'vue'
import VueRouter from 'vue-router'
import Listagem from '../components/Listagem.vue'

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
    component: () => import('../components/CriarFormulario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
