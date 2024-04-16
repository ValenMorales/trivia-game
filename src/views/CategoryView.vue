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
      
      <MovieQuestion @changesInScore="changesInScore"  v-if="showMovieQuestion &&  route.params.category == 'movies' && values.length > 0" :movies="values" :userIndex="userIndex" ></MovieQuestion>
      <Characters :changes="changes"  :first="first" :second="second" buttonText="submit" @buttonAction="submitanswer()"></Characters>

    </div>

  </template>
  
  <script setup>
  import Characters from '@/components/Characters.vue';
  import SelectCharacter from '../components/SelectCharacter.vue';
  import MovieQuestion from '../components/MovieQuestion.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const changes = ref(false);

  const userIndex =ref(1)
 
const router = useRouter()
  
  const route = useRoute();
  const values = ref([]);
  const showMovieQuestion = ref(true); 
  const first = ref(true);
  const second = ref(false);
  const counter = ref(1);
  const showFinishGame = ref(false);
  const username2 = localStorage.getItem('username2');
  
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

  const changesInScore = () => {
    changes.value=true ;
    setTimeout(() =>
    {
      changes.value=false;
    }, 1000);
  }

  const submitanswer = () => {
    counter.value  += 1;
    if (counter.value % 2 == 0 && username2 != null ) {
      first.value = false;
      second.value = true;
      userIndex.value= 2;
    } else if (counter.value % 2 == 1 || username2 == null ) {
      first.value = true;
      second.value = false;
      userIndex.value= 1;
    }

    if (counter.value == 10){
      openScore();
    }
    

    showMovieQuestion.value = false;

setTimeout(() => {
  showMovieQuestion.value = true;
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
  