<script setup>
import http from '@/services/http.js'
import { ref } from 'vue';
import router from '../router';


const usuario = ref({
    email: "",
    password: ""
})

const login = async () => {
    try {
        console.log(usuario.value)
        const { data } = await http.post('/client/login', usuario.value)
            
        if(usuario.email == "admin" && usuario.password == "admin") {
            console.log("eu entrei como admin")
           router.push('/admin')
        }
        console.log(data)
    } catch (error) {
        console.log(error?.response?.data)
    }
}
</script>


<template>
    <v-main class="d-flex flex-row justify-center ">
        <v-card class="bg-grey-darken-4" width="700">
            <v-row align="center">
                <v-col class="d-flex justify-center py-10">
                    <h3>Entrar</h3>
                </v-col>
            </v-row>


            <v-form @submit.prevent="login" class="d-flex justify-center">
                <v-col cols="12">
                    <v-container class="my-4 py-5 bg-grey-darken-4 rounded">
                        <v-row class=" d-flex justify-center">
                            <v-col cols="12" md="7">
                                <v-text-field v-model="usuario.email" label="Email" required></v-text-field>
                            </v-col>


                        </v-row>

                        <v-row class="d-flex justify-center">

                            <v-col cols="12" md="7">
                                <v-text-field v-model="usuario.password" type="password" label="Senha"
                                    required></v-text-field>
                            </v-col>

                        </v-row>

                        <v-row class="justify-center">
                            <v-btn type="submit" color="green-darken-1">Confirmar</v-btn>
                        </v-row>
                    </v-container>
                </v-col>
            </v-form>
        </v-card>
    </v-main>
</template>