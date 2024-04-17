<template>
  <div v-if="showFinishGame" class="modal-overlay">
    <div class="modal">
      <h2>Game finished</h2>
    </div>
  </div>
  <section>

    <SelectCharacter></SelectCharacter>
    <div class="counter">
      <p>{{ counter }} of 10 </p>
    </div>
    <MovieQuestion @buttonAction="submitanswer()" @changesInScore="changesInScore"
      v-if="showQuestion && route.params.category == 'movies' && values.length > 0" :movies="values"
      :userIndex="userIndex"></MovieQuestion>
    <MarvelQuestion @buttonAction="submitanswer()" @changesInScore="changesInScore"
      v-if="showQuestion && route.params.category == 'marvel' && values.length > 0" :characters="values"
      :userIndex="userIndex"></MarvelQuestion>
    <PokemonQuestion @buttonAction="submitanswer()" @changesInScore="changesInScore"
      v-if="showQuestion && route.params.category == 'pokemon' && values.length > 0" :pokemon="values"
      :userIndex="userIndex"></PokemonQuestion>
    <StarWarsQuestion @buttonAction="submitanswer()" @changesInScore="changesInScore"
      v-if="showQuestion && route.params.category == 'starwars' && values.length > 0" :starWars="values"
      :userIndex="userIndex"></StarWarsQuestion>
    <RickAndMortyQuestion @buttonAction="submitanswer()" @changesInScore="changesInScore"
      v-if="showQuestion && route.params.category == 'rickandmorty' && values.length > 0" :rickAndMorty="values"
      :userIndex="userIndex"></RickAndMortyQuestion>
    <Characters :changes="changes" :first="first" :second="second"></Characters>
  </section>

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
const changes = ref(false);
const userIndex = ref(1)
const router = useRouter()
const route = useRoute();
const values = ref([]);
const showQuestion = ref(true);
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
  changes.value = true;
  setTimeout(() => {
    changes.value = false;
  }, 1000);
}

const submitanswer = () => {
  counter.value += 1;
  if (counter.value % 2 == 0 && username2 != null) {
    first.value = false;
    second.value = true;
    userIndex.value = 2;
  } else if (counter.value % 2 == 1 || username2 == null) {
    first.value = true;
    second.value = false;
    userIndex.value = 1;
  }

  if (counter.value == 10) {
    openScore();
  }

  showQuestion.value = false;

  setTimeout(() => {
    showQuestion.value = true;
  }, 500);
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;


  width: 90vw;
  height: 90vh;
  background: url(../../public/)
}


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
  color: black;
  font-size: 1.2rem;
}

.counter p {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.counter {
  display: flex;
  float: right;
}
</style>