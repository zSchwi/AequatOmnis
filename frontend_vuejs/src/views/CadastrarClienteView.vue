<script setup>
// TODO: Melhorar o formulario, colocando um boolean
import { reactive } from 'vue';
import http from '@/services/http.js'

const dadosCliente = reactive({
    nome: '',
    email: '',
    password: '',
    admin: ''
})

const enviarDadosCliente = async () => {
    try {
        const { data } = await http.post('/client/register', dadosCliente)
        console.log(data)
        alert("Dado cadastrado com sucesso!")
    } catch (error) {
        console.log(error?.response?.data)
    }
}

</script>





<template>
    <v-main>
        <v-container>
            <v-card>

                <v-form @submit.prevent="enviarDadosCliente">
                    <v-col cols="12">
                        <v-container>
                            <v-row class="d-flex justify-center mb-5">
                                <h3>Cadastre-se</h3>
                            </v-row>
                            <v-row>
                                <v-col col="9" md="9">
                                    <v-text-field v-model="dadosCliente.nome" label="Nome completo:"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>

                                <v-col cols="5" md="3">
                                    <v-text-field type="email" v-model="dadosCliente.email" label="email:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="password" v-model="dadosCliente.password" label="Senha:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosCliente.admin" label="Admin:"
                                        required></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row class="justify-end">
                                <v-btn type="submit" color="green-darken-1" class="mx-5">Confirmar</v-btn>
                                <router-link to="/">
                                    <v-btn color="red-darken-1">Voltar</v-btn>
                                </router-link>
                            </v-row>
                        </v-container>
                    </v-col>


                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>