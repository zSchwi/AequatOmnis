<script setup>
import Cards from '../components/CardJogos.vue';

defineProps({
    nomeEmpresa: String
})
</script>

<template>
    <v-row>
        <v-col class="d-flex justify-space-between mt-2" cols="12">
            <h2>{{ nomeEmpresa }}</h2>
            <v-btn color="primary">Ver Mais</v-btn>
        </v-col>
        <template v-for="n in 3" :key="n">
            <v-col v-for="j in 1" :key="`${n}${j}`" cols="4">
                <Cards />
            </v-col>
        </template>
    </v-row>
</template>