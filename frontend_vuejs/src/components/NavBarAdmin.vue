<template>
    <v-app-bar color="bg-grey-lighten-1">
        <v-toolbar-title>AOC</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="/">
            <v-btn color="primary" variant="text">Home</v-btn>
        </router-link>

        <router-link to="/login">
            <v-btn color="primary" variant="text">Entrar</v-btn>
        </router-link>

        <router-link to="/tabelavenda">
            <v-btn color="primary" variant="text">Tabela Venda</v-btn>
        </router-link>

        <router-link to="/tabelaprod">
            <v-btn color="primary" variant="text">Tabela Produto</v-btn>
        </router-link>

        <router-link to="/cadastroprod">
            <v-btn color="primary" variant="text">Cadastrar Produto</v-btn>
        </router-link>

        <router-link to="/formvenda">
            <v-btn color="primary" variant="text">Vendas</v-btn>
        </router-link>


        <v-btn color="primary" variant="text">Cadastrar</v-btn>

        <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
            <v-badge :content="6" color="red">
                <v-icon>mdi-cart</v-icon>
            </v-badge>
        </v-btn>
    </v-app-bar>
</template>