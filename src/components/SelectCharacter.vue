<template>
    <h1>hola</h1>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import {characterRickAndMorty,characterStarWars,characterPokemon} from '../helpers/characterCall.js'

const rickAndMorty = ref([]);
const starWars = ref([]);
const pokemon = ref([]);

onMounted(() => {
    getCharacters();
});

async function getCharacters(){
    rickAndMorty.value = await characterRickAndMorty();
    starWars.value = await characterStarWars();
    pokemon.value = await characterPokemon();

    console.log(rickAndMorty.value);
    console.log(starWars.value);
    console.log(pokemon.value);
}

</script>

<style scoped>

</style>