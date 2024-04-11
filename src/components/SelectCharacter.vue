<template>
    <h1>hola</h1>
    <h1>hola</h1>
    <h1>hola</h1>
    <h1>hola</h1>
    <h1>hola</h1>
    <h1>hola</h1>
    <h1>hola</h1>
    <button @click="getCharacters">click</button>
</template>


<script setup>
import { ref } from 'vue'
import {characterRickAndMorty,characterStarWars,characterPokemon} from '../helpers/characterCall.js'

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
}

</script>

<style scoped>

</style>