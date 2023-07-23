import { createRouter, createWebHistory, useRouter} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginScreen from '../views/LoginScreen.vue'
import TabelaProd from '../views/TabelaProdView.vue'
import TabelaVenda from '../views/TabelaVendasView.vue'
import CadastrarProd from '../views/CadastrarProdutoView.vue'
import FormularioVenda from '../views/FormularioVendaView.vue'
import EditarProd from '../views/EditarProdutoView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
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
        path: '/cadastrarprod',
        name: 'cadastrarproduto',
        component: CadastrarProd
    },

    {
        path: '/formvenda',
        name: 'formvenda',
        component: FormularioVenda
    },

     {
        path: '/editarproduto/:id',
        name: 'editarproduto',
        component: EditarProd
    },

    ]
})

export default router