<template>
<!-- <div class="present-grid">
    <div v-for="character in filteredCharacters" :key="character.id">
        <div>
            <img :src="character.image" :alt="character.name" />
            <div class="information">
                <p>{{ character.name }}</p>
                <button>Choose</button>
                <div class="information-desc">
                    <p v-if="character.gender === 'Male'">🚹{{ character.gender }}</p>
                    <p v-else>🚺{{ character.gender }}</p>
                    <p v-if="character.species === 'Human'">🧍{{ character.species }}</p>
                    <p v-else>👽{{ character.species }}</p>
                </div>
            </div>
        </div>
    </div>
  </div> -->
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { tvShowsSpecified, characterRickAndMorty,characterStarWars,characterPokemon,characterMarvel,filterAllRickAndMorty, tvShows} from '../helpers/characterCall.js'

const rickAndMorty = ref([]);
const starWars = ref([]);
const pokemon = ref([]);
const marvel = ref([]);
const filteredCharacters = ref([]);
const movies = ref([]);
const moviesSpecified = ref([]);

onMounted(() => {
    getCharacters();
});

async function getCharacters(){
    rickAndMorty.value = await characterRickAndMorty();
    starWars.value = await characterStarWars();
    pokemon.value = await characterPokemon();
    marvel.value = await characterMarvel();
    movies.value = await tvShows();

    console.log(rickAndMorty.value , "rickAndMorty");
    console.log(starWars.value ,"starWars");
    console.log(pokemon.value ,"pokemon");
    console.log(movies.value ,"movies");
  
    filteredCharacters.value = filterAllRickAndMorty(rickAndMorty.value);
    localStorage.setItem('rickandmorty',  JSON.stringify(rickAndMorty.value));
    localStorage.setItem('pokemon',  JSON.stringify(pokemon.value) );
    localStorage.setItem('starwars',  JSON.stringify(starWars.value));
    localStorage.setItem('movies',  JSON.stringify(movies.value));
}

</script>

<style scoped>

.present-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 10px;
}

.present-grid img {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
}

/*STYLOS PARA LA DESCRIPCION*/

.information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: rgb(214, 212, 212);
    border-radius: 1rem;
}

.information-desc {
    display: flex;
    justify-content: center;
    align-items: center;
}
.information button {
    transition: 0.5s;
    width: 6rem;
}
.information button:hover {
    transform : scale(1.1);
}
</style>