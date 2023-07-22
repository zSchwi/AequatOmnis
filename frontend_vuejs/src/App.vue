<template>
  <v-app id="inspire" theme="dark">
    <Navbar />
    <v-main>
      <RouterView />

    </v-main>
  </v-app>
</template>

<script setup>

import Navbar from './components/NavBar.vue'

</script>