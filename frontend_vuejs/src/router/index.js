import { createRouter, createWebHistory, useRouter} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginScreen from '../views/LoginScreen.vue'
import TabelaProd from '../views/TabelaProdView.vue'
import TabelaVenda from '../views/TabelaVendasView.vue'
import CadastrarProd from '../views/CadastrarProdutoView.vue'
import FormularioVenda from '../views/FormularioVendaView.vue'
import EditarProd from '../views/EditarProdutoView.vue'
import VisualizarProd from '../views/VisualizarProdutoView.vue'
import CadastrarCliente from '../views/CadastrarClienteView.vue'
import HomeAdminView from '../views/HomeAdminView.vue'
import CadastrarVenda from '../views/CadastrarVendaView.vue'
import editarVenda from '../views/EditarVendaView.vue'
import visualizarVenda from '../views/VisualizarVendaView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/admin',
        name: 'homeadmin',
        component: HomeAdminView
    },

    {
        path: '/login',
        name: 'loginscreen',
        component: LoginScreen
    },

    {
        path: '/cadastrousuario',
        name: 'cadastrarusuario',
        component: CadastrarCliente
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
    
    {
        path: '/visualizarproduto/:id',
        name: 'visualizarproduto',
        component: VisualizarProd
    },

    {
        path: '/editarvenda/:id',
        name: 'editarvenda',
        component: editarVenda
    },

    {
        path: '/visualizarvenda/:id',
        name: 'visualizarvenda',
        component: visualizarVenda
    },

    {
        path: '/cadastrarvenda',
        name: 'cadastrarvenda',
        component: CadastrarVenda
    },

    ]
})

export default router