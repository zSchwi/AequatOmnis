import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginScreen from '../views/LoginScreen.vue'
import TabelaProd from '../views/TabelaProdView.vue'
import TabelaVenda from '../views/TabelaVendasView.vue'

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
    }

  ]
})

export default router