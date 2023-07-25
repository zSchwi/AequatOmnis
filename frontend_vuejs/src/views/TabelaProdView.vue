<template>
    <v-table class="">
        <thead>
            <tr>
                <th class="text-center">
                    Nome
                </th>

                <th class="text-center">
                    Descrição
                </th>
                <th class="text-center">
                    Empresa
                </th>

                <th class="text-center">
                    Genero
                </th>

                <th class="text-center">
                    Plataforma
                </th>

                <th class="text-center">
                    Valor
                </th>

                <th class="text-center">
                    Estoque
                </th>

                <th class="text-center">
                    Operações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="produto in produtos" :key="produto.titulo">
                <!--TODO: Falta fazer a conexão com o banco, sentar com o gui para pegar esses valores-->
                <td class="text-center">{{ produto.titulo }}</td>
                <td class="text-center">{{ produto.descricao }}</td>
                <td class="text-center">{{ produto.empresa }}</td>
                <td class="text-center">{{ produto.genero }}</td>
                <td class="text-center">{{ produto.plataforma }}</td>
                <td class="text-center">R$ {{ produto.valor }}</td>
                <td class="text-center">{{ produto.estoque }}</td>
                

                <td class="text-center">

                    <router-link :to="{ path: `/visualizarproduto/${produto._id}` }">
                        <v-btn icon="mdi-update"></v-btn>
                    </router-link>
                    
                    <v-btn @click="deletarProduto(produto._id)" icon="mdi-delete"></v-btn>

                    <router-link :to="{path: `/editarproduto/${produto._id}`}">
                        <v-btn icon="mdi-pencil"></v-btn>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </v-table>




    <div class="d-flex justify-end">
        <router-link to="/cadastrarprod">
            <v-btn class="my-6 mx-5" color="green-darken-2">Cadastrar</v-btn>
        </router-link>
    </div>
</template>


<script setup>
import http from '../services/http.js'
import { ref, onMounted } from 'vue';

onMounted(() => {
    getProdutos()
})


const produtos = ref({
    titulo: "",
    descricao: "",
    empresa: "",
    genero: "",
    plataforma: "",
    valor: "",
    estoque: ""
})

const getProdutos = () => { 
    http.get('/jogos/').then(res => {
        produtos.value = res.data
        console.log(produtos)

    }).catch( error => {
        console.log(`Erro ao pegar os dados ${error}`)
    })
}


const deletarProduto = (idProduto) => {
     http.delete(`/jogos/${idProduto}`).then(res => {
        console.log("foi excluido")
        getProdutos();
    })
}



</script>