<template>
    <v-main>
        <v-container>
            <v-card>

                <v-form>
                    <v-col cols="12">
                        <v-container>
                            <v-row class="d-flex justify-center mb-5">
                                <h3>Cadastro de Produto</h3>
                            </v-row>
                            <v-row>
                                <v-col col="9" md="9">
                                    <v-text-field label="Nome completo:" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" label="Empresa:" required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" label="Genero:" required></v-text-field>
                                </v-col>

                                <v-col cols="5" md="3">
                                    <v-text-field type="text" label="Plataforma" required></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>
                                <v-col cols="5" md="3">
                                    <v-text-field type="text" label="Valor:" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="justify-end">
                                <v-btn color="green-darken-1" class="mx-5">Confirmar</v-btn>
                                <v-btn color="red-darken-1">Cancelar</v-btn>
                            </v-row>
                        </v-container>
                    </v-col>


                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>