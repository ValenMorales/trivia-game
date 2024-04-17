<template>
    <div>
      <div v-if="showFinishGame" class="modal-overlay">
        <div class="modal">
            <h2>Game finished</h2>
        </div>
    </div>
      <SelectCharacter></SelectCharacter>
      <h1>Categoría {{ $route.params.category }}</h1>
      <h2 v-if="values.length > 0">Valores de la categoría:</h2>
      <ul>
        <li v-for="(value, index) in values" :key="index">
          {{ value }}
        </li>
      </ul>
      
      <MovieQuestion v-if="showQuestion &&  route.params.category == 'movies' && values.length > 0" :movies="values"></MovieQuestion>
      <MarvelQuestion v-if="showQuestion && route.params.category == 'marvel' && values.length > 0" :characters="values"></MarvelQuestion>
      <PokemonQuestion v-if="showQuestion && route.params.category == 'pokemon' && values.length > 0" :pokemon="values"></PokemonQuestion>
      <StarWarsQuestion v-if="showQuestion && route.params.category == 'starwars' && values.length > 0" :starWars="values"></StarWarsQuestion>
      <RickAndMortyQuestion v-if="showQuestion && route.params.category == 'rickandmorty' && values.length > 0" :rickAndMorty="values"></RickAndMortyQuestion>
      <Characters :first="first" :second="second" buttonText="submit" @buttonAction="submitanswer()"></Characters>

    </div>

  </template>
  
  <script setup>
  import Characters from '@/components/Characters.vue';
  import SelectCharacter from '../components/SelectCharacter.vue';
  import MovieQuestion from '../components/MovieQuestion.vue';
  import MarvelQuestion from '@/components/MarvelQuestion.vue';
  import PokemonQuestion from '@/components/PokemonQuestion.vue';
  import StarWarsQuestion from '@/components/StarWarsQuestion.vue';
  import RickAndMortyQuestion from '@/components/RickAndMortyQuestion.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue'; 
const router = useRouter()
  
  const route = useRoute();
  const values = ref([]);
  const showQuestion = ref(true); 
  const first = ref(true);
  const second = ref(false);
  const counter = ref(0);
  const showFinishGame = ref(false);

  
const openScore = () => {
showFinishGame.value = true;
setTimeout(() => {
router.push({
  name: "scoreView", 
});
  
}, 1000);

}

  onMounted(() => {
    const storedValues = localStorage.getItem(`${route.params.category}`);
    if (storedValues) {
      values.value = JSON.parse(storedValues);
    } else {
      console.error('No hay valores almacenados para esta categoría en el almacenamiento local.');
    }
  });

  const submitanswer = () => {
    counter.value  += 1;
    if (counter.value % 2 == 0) {
      first.value = false;
      second.value = true;
    } else {
      first.value = true;
      second.value = false;
    }

    if (counter.value == 10){
      openScore();
    }

    
    showQuestion.value = false;

setTimeout(() => {
  showQuestion.value = true;
}, 500);
  }
  </script>
  
  <style scoped>

  
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  color:black;
  font-size: 1.2rem;
}
  </style>
  