<script setup>
// TODO: Melhorar o formulario, colocando um boolean
import { ref } from 'vue';
import http from '@/services/http.js'

const dadosVenda = ref({
    nome_produto: "",
    comprador: "",
    email: "",
    total: ""

})

const enviarDadosVenda = async () => {
    try {
        const { data } = await http.post('/venda/', dadosVenda.value)
        console.log(data)
        alert("Venda cadastrada com sucesso!")
    } catch (error) {
        console.log(error?.response?.data)
    }
}

</script>





<template>
    <v-main>
        <v-container>
            <v-card>

                <v-form @submit.prevent="enviarDadosVenda">
                    <v-col cols="12">
                        <v-container>
                            <v-row class="d-flex justify-center mb-5">
                                <h3>Cadastrar Compra</h3>
                            </v-row>
                            <v-row>
                                <v-col col="9" md="9">
                                    <v-text-field v-model="dadosVenda.nome_produto" label="Nome Produto:"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosVenda.comprador" label="Nome Comprador:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosVenda.email" label="Email:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosVenda.total" label="Total:"
                                        required></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row class="justify-end">
                                <v-btn type="submit" color="green-darken-1" class="mx-5">Confirmar</v-btn>
                                <router-link to="/tabelavenda">
                                    <v-btn color="red-darken-1">Cancelar</v-btn>
                                </router-link>
                            </v-row>
                        </v-container>
                    </v-col>


                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>