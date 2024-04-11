<template>
    <button @click="getCharacters">click</button>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import {characterRickAndMorty,characterStarWars,characterPokemon,characterMarvel,filterAllForNameWithImage} from '../helpers/characterCall.js'

const rickAndMorty = ref([]);
const starWars = ref([]);
const pokemon = ref([]);
const marvel = ref([]);

onMounted(() => {
    getCharacters();
});

async function getCharacters(){
    rickAndMorty.value = await characterRickAndMorty();
    starWars.value = await characterStarWars();
    pokemon.value = await characterPokemon();
    marvel.value = await characterMarvel();

    console.log(rickAndMorty.value , "rickAndMorty");
    console.log(starWars.value ,"starWars");
    console.log(pokemon.value ,"pokemon");

    console.log(marvel.value ,"marvel");

    console.log(filterAllForNameWithImage(rickAndMorty.value));
    console.log(filterAllForNameWithImage(starWars.value));
    console.log(filterAllForNameWithImage(pokemon.value));
}

</script>

<style scoped>

</style>