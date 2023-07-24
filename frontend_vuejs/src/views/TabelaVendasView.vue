<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-center">
                    Nome Produto
                </th>
                <th class="text-center">
                    Comprador
                </th>

                <th class="text-center">
                    Email
                </th>

                <th class="text-center">
                    Total
                </th>

                <th class="text-center">
                    Operações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="venda in vendas" :key="venda.nome_produto">
                <td class="text-center">{{ venda.nome_produto }}</td>
                <td class="text-center">{{ venda.comprador }}</td>
                <td class="text-center">{{ venda.email }}</td>
                <td class="text-center">{{ venda.total }}</td>
                <td class="d-flex justify-end">


                    <router-link :to="{ path: `/visualizarvenda/${venda._id}` }">
                        <v-btn icon="mdi-update"></v-btn>
                    </router-link>

                    <v-btn icon="mdi-delete" @click="deletarVenda(venda._id)"></v-btn>

                    <router-link :to="{ path: `/editarvenda/${venda._id}` }">
                        <v-btn icon="mdi-pencil"></v-btn>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </v-table>



    <div class="d-flex justify-end">
        <router-link to="/cadastrarvenda">
            <v-btn class="my-6 mx-5" color="green-darken-2">Cadastrar</v-btn>
        </router-link>
    </div>
</template>


<script setup>
import http from '../services/http.js'
import { ref, onMounted } from 'vue';

onMounted(() => {
    getVendas()
})

const vendas = ref({
    nome_produto: "",
    comprador: "",
    email: "",
    total: ""
})

const getVendas =  () => {
    http.get('/venda/').then(res => {
        vendas.value = res.data
        console.log(vendas)

    }).catch(function (error) {
        console.log("Erro no getVendas")
    });
}


const deletarVenda = (idProduto) => {
    http.delete(`/venda/${idProduto}`).then(res => {
        console.log("foi excluido")
        getVendas();
    })
}
    
</script>