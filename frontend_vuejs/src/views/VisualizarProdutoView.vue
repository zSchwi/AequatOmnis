<script setup>
// TODO: Melhorar o formulario, colocando um boolean
import { ref, onMounted } from 'vue';
import http from '@/services/http.js'
import { useRoute } from 'vue-router';

const route = useRoute()
const idEspecifico = route.params.id

const dadosProduto = ref({
    titulo: "",
    descricao: "",
    empresa: "",
    genero: "",
    plataforma: "",
    valor: "",
    estoque: ""
})

onMounted(() => {
    getProdutosEspecifico(idEspecifico)
})


const getProdutosEspecifico = (idEspecifico) => {
    http.get(`/jogos/${idEspecifico}`).then(res => {
        dadosProduto.value = res.data
        console.log(dadosProduto)

    }).catch(error => {
        console.log(`Erro ao pegar os dados ${error}`)
    })
}
</script>





<template>
    <v-main>
        <v-container>
            <v-card>

                <v-form disabled>
                    <v-col cols="12">
                        <v-container>
                            <v-row class="d-flex justify-center mb-5">
                                <h3>Editar Produto</h3>
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

                            <v-row class="justify-end">
                
                                <router-link to="/tabelaprod">
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