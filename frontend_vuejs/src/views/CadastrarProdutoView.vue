<script setup>
// TODO: Melhorar o formulario, colocando um boolean
import { reactive } from 'vue';
import http from '@/services/http.js'

const dadosProduto = reactive({
    titulo: '',
    descricao: '',
    empresa: '',
    genero: '',
    plataforma: '',
    valor: '',
    estoque: ''

})

const enviarDadosProduto = async () => {
    try {
        const { data } = await http.post('/jogos', dadosProduto)
        console.log(data)
    } catch (error) {
        console.log(error?.response?.data) 
    }
}

</script>





<template>
    <v-main>
        <v-container>
            <v-card>

                <v-form @submit.prevent="enviarDadosProduto">
                    <v-col cols="12">
                        <v-container>
                            <v-row class="d-flex justify-center mb-5">
                                <h3>Cadastro de Produto</h3>
                            </v-row>
                            <v-row>
                                <v-col col="9" md="9">
                                    <v-text-field v-model="dadosProduto.titulo" label="Nome completo:"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.descricao" label="descricao:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.empresa" label="Empresa:"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.genero" label="genero"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.plataforma" label="Plataforma"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.valor" label="valor"
                                        required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.estoque" label="estoque"
                                        required></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>
                                <v-col cols="5" md="3">
                                    <v-text-field type="text" v-model="dadosProduto.valor" label="Valor:"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="justify-end">
                                <v-btn type="submit" color="green-darken-1" class="mx-5">Confirmar</v-btn>
                                <v-btn color="red-darken-1">Cancelar</v-btn>
                            </v-row>
                        </v-container>
                    </v-col>


                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>