<template>
  <v-app id="inspire" theme="dark">
    <Navbar />
    <v-main>
      <RouterView />

    </v-main>
  </v-app>
</template>

<script setup>
/**
  * TODO: melhorar os botões do banner
  * TODO: Fazer componente para display dos card pegando tudo que ta em v-row
**/

import Navbar from './components/NavBar.vue'

</script>