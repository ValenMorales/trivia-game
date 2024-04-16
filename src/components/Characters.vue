<script setup>
import { ref, onMounted, watch } from 'vue'
const emit = defineEmits(['buttonAction'])
const props = defineProps(['buttonText', 'first' , 'second', 'changes', 'showButton'])

const username1 = ref('')
const username2 = ref('')
const score1 = ref('')
const score2 = ref('')

watch(() => props.changes, (newValue) => {
      if (newValue === true) {
        changesInScore();
      }
    });

const changesInScore = () => {
   username1.value=localStorage.getItem('username1');
 username2.value=localStorage.getItem('username2');
 score1.value=localStorage.getItem('score1');
 score2.value=localStorage.getItem('score2');
}


onMounted(() => {
    changesInScore()
});


</script>

<template>

<div class="characters">
    <div class="character-info">
      <div class="info">
        <img v-if="username1 != '' " :src="'https://robohash.org/set_set5/' + username1 + '.png'">
      <p>{{ username1 }}</p>
      <p  v-if="score1 != '0' " >score: {{ score1 }}</p>
      </div>
      <img v-if="first"  class="arrow" src="../../izquieda.png">
    </div>

    <button v-if="showButton" @click="emit('buttonAction')">{{ buttonText }}</button>
    <div class="character-info">
      <img v-if="second" class="arrow" src="../../derecha.png">
      <div class="info">
        <img v-if="username2" :src="'https://robohash.org/set_set5/' + username2 + '.png'">
      <p>{{ username2 }}</p>
      <p v-if="score2 != '0' " > score: {{ score2 }}</p>
      </div>
    </div>
   
  </div>
</template>


<style scoped>


button:hover {
  background-color: rgba(255, 0, 0, 0.5);
}

.characters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.info img {
  width: 100px;
  height: 100px;

}

.characters p{
  font-size: 20px;
  text-align: center;
}

.characters button{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin-top: 20px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: bold;
}

.character-info {
  display:flex;
  align-items: center;
}

.arrow{
  margin-left: 20px ;
  margin-right: 20px;
  width: 2rem;
  height: 2rem;
}

</style>