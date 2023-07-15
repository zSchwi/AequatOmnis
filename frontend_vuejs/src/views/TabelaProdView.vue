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
                <td>{{ jogo.nome }}</td>
                <td>{{ jogo.empresa }}</td>
                <td>{{ jogo.genero }}</td>
                <td>{{ jogo.plataforma }}</td>
                <td>{{ jogo.valor }}</td>
                <td class="d-flex justify-end">
                    <v-btn icon="mdi-update"></v-btn>
                    <v-btn icon="mdi-delete"></v-btn>
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
import { ref } from 'vue';

const jogos = ref([
    {
        nome: 'Dark Souls',
        empresa: 'essa daqui',
        genero: 'SoulsLike',
        plataforma: 'PC',
        valor: 35
    },

    {
        nome: 'Fallout 4',
        empresa: 'essa daqui',
        genero: 'SoulsLike',
        plataforma: 'PC',
        valor: 35
    },

    {
        nome: 'Skyrim',
        empresa: 'essa daqui',
        genero: 'SoulsLike',
        plataforma: 'PC',
        valor: 35
    },

    {
        nome: 'Battlefield 4',
        empresa: 'essa daqui',
        genero: 'SoulsLike',
        plataforma: 'PC',
        valor: 35
    },

    {
        nome: 'Forza Horizon',
        empresa: 'essa daqui',
        genero: 'SoulsLike',
        plataforma: 'PC',
        valor: 35
    }
])
</script>