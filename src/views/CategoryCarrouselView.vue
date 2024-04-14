<script setup>
import CategoryCarrousel from '@/components/CategoryCarrousel.vue';
const categories = ['marvel', 'movies', 'rickandmorty', 'starwars', 'pokemon'];
const categoryImages = ['marvel.jpg', 'movies.jpg', 'rick.jpg', 'starwars.jpg', 'pokemon.jpg'];

</script>

<template>
        <CategoryCarrousel
        :categories="categories"
        :categoryImages="categoryImages"
        ></CategoryCarrousel>
</template>

<style scoped>

</style>