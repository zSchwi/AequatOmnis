import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginScreen from '../views/LoginScreen.vue'
import TabelaProd from '../views/TabelaProdView.vue'
import TabelaVenda from '../views/TabelaVendasView.vue'
import CadastrarProd from '../views/CadastrarProdutoView.vue'
import FormularioVenda from '../views/FormularioVendaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/login',
      name: 'loginscreen',
      component: LoginScreen
    },

    {
      path: '/tabelaprod',
      name: 'tabelaprod',
      component: TabelaProd
    },

    {
      path: '/tabelavenda',
      name: 'tabelavenda',
      component: TabelaVenda
    },

    {
      path: '/cadastroprod',
      name: 'cadastroprod',
      component: CadastrarProd
    },

    {
      path: '/formvenda',
      name: 'formvenda',
      component: FormularioVenda
    },

  ]
})

export default router