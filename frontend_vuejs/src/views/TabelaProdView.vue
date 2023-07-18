<template>
    <v-table class="">
        <thead>
            <tr>
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Empresa
                </th>

                <th class="text-left">
                    Genero
                </th>

                <th class="text-left">
                    Plataforma
                </th>

                <th class="text-left">
                    Valor
                </th>

                <th class="text-right">
                    Operações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(jogo, i) in jogos" :key="i">
                <td>{{ jogo.titulo }}</td>
                <td>{{ jogo.descricao }}</td>
                <td>{{ jogo.empresa }}</td>
                <td>{{ jogo.genero }}</td>
                <td>{{ jogo.plataforma }}</td>
                <td>{{ jogo.valor }}</td>
                <td>{{ jogo.estoque }}</td>
                <td class="d-flex justify-end">
                    <v-btn icon="mdi-update"></v-btn>
                    <v-btn @click="deletarProduto(jogo._id)" icon="mdi-delete"></v-btn>
                    <v-btn icon="mdi-pencil"></v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>



    <div class="d-flex justify-end">
        <v-btn class="my-6 mx-5" color="green-darken-2">Cadastrar</v-btn>
    </div>
</template>


<script setup>
import http from '../services/http.js'
import { ref, onMounted} from 'vue';

onMounted(() => {
    getProdutos()
})

const jogos = ref([
    {
        _id: '',
        titulo: '',
        descricao: '',
        empresa: '',
        genero: '',
        plataforma: '',
        valor: '',
        estoque: ''
    },
])

const getProdutos = async () => {
    await http.get('/jogos/tudo').then(res => {
        const jogos = res.data
        console.log(jogos)
        
    })
}


const deletarProduto =  (id) => {
    http.delete().then(res => {

    })
}
</script>