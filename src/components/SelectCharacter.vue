<template>
    <button @click="getCharacters">click</button>
</template>


<script setup>
import { ref } from 'vue'
import {characterRickAndMorty,characterStarWars,characterPokemon,filterAllForNameWithImage} from '../helpers/characterCall.js'

const rickAndMorty = ref([]);
const starWars = ref([]);
const pokemon = ref([]);

async function getCharacters(){
    rickAndMorty.value = await characterRickAndMorty();
    starWars.value = await characterStarWars();
    pokemon.value = await characterPokemon();

    console.log(rickAndMorty.value);
    console.log(starWars.value);
    console.log(pokemon.value);

    console.log(filterAllForNameWithImage(rickAndMorty.value));
    console.log(filterAllForNameWithImage(starWars.value));
    console.log(filterAllForNameWithImage(pokemon.value));
}

</script>

<style scoped>

</style>