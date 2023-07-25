<template>
    <v-carousel cycle height="300" hide-delimiter-background show-arrows="hover" hide-delimiters>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :imagensJogos="imagensJogos[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
const imagensJogos = [
    'src/assets/img/imgCarrosel1.jpg',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
]
const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]
</script>