<script setup>

import Carrosel from '../components/CarroselJogos.vue'
import Banner from '../components/BannerJogo.vue'
import JogosEmpresa from '../components/RowDisplay.vue'
import Navbar from '../components/Navbar.vue'

</script>


<template>
    

    <v-container>
        <Carrosel />
    </v-container>
    <v-container>
        <JogosEmpresa nomeEmpresa="From Software" />
        <JogosEmpresa nomeEmpresa="Bandai Nanco" />
        <JogosEmpresa nomeEmpresa="Ubisoft" />
        <Banner />

        <v-row>
            <template v-for="n in 3" :key="n">


                <v-col v-for="j in 3" :key="`${n}${j}`" cols="4">
                    <Cards empresa="From Software" />
                </v-col>
            </template>
        </v-row>



    </v-container>
</template>