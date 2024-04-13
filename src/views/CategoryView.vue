<template>
    <div>
      <SelectCharacter></SelectCharacter>
      <h1>Categoría {{ $route.params.category }}</h1>
      <h2 v-if="values.length > 0">Valores de la categoría:</h2>
      <ul>
        <li v-for="(value, index) in values" :key="index">
          {{ value }}
        </li>
      </ul>
      
      <MovieQuestion v-if="showMovieQuestion &&  route.params.category == 'movies' && values.length > 0" :movies="values"></MovieQuestion>
      <Characters buttonText="submit" @buttonAction="submitanswer()"></Characters>

    </div>

  </template>
  
  <script setup>
  import Characters from '@/components/Characters.vue';
  import SelectCharacter from '../components/SelectCharacter.vue';
  import MovieQuestion from '../components/MovieQuestion.vue';
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const values = ref([]);
  const showMovieQuestion = ref(true); 


  onMounted(() => {
    const storedValues = localStorage.getItem(`${route.params.category}`);
    if (storedValues) {
      values.value = JSON.parse(storedValues);
    } else {
      console.error('No hay valores almacenados para esta categoría en el almacenamiento local.');
    }
  });

  const submitanswer = () => {

    showMovieQuestion.value = false;

setTimeout(() => {
  showMovieQuestion.value = true;
}, 500);
  }
  </script>
  
  <style scoped>
  </style>
  