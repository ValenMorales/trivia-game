<template>
    <div>
      <SelectCharacter></SelectCharacter>
      <h1>Categoría {{ $route.params.category }}</h1>
      <h2 v-if="values.length > 0">Valores de la categoría:</h2>
      <ul v-if="values.length > 0">
        <li v-for="value in values" >{{ value }}</li>
      </ul>
      <p v-else>No hay valores disponibles para esta categoría.</p>
    </div>
  </template>
  
  <script setup>
  import SelectCharacter from '../components/SelectCharacter.vue';
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const values = ref([]);
  
  onMounted(() => {
    const storedValues = localStorage.getItem(`${route.params.category}`);
    if (storedValues) {
      values.value = JSON.parse(storedValues);
    } else {
      console.error('No hay valores almacenados para esta categoría en el almacenamiento local.');
    }
  });
  </script>
  
  <style scoped>
  /* Estilos adicionales */
  </style>
  