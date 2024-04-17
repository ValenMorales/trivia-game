<template>
  <QuestionTemplate
  :question="generateQuestion()"
  :userIndex="props.userIndex"
  @callCharacters="callCharacters"
  @buttonAction="emit('buttonAction')"
  ></QuestionTemplate>
</template>


<script setup>

import QuestionTemplate from './QuestionTemplate.vue';
import { defineProps } from 'vue';

const emit = defineEmits(['changesInScore', 'buttonAction']);

const callCharacters  = () => {
  emit('changesInScore');
};
const props = defineProps({
  pokemon: Array,
  userIndex: Number
});


const generateRandomIndex = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}


const shuffleElements = (options) =>{
    options.sort(() => Math.random() - 0.5);
    return options;
}


const generateRandomQuestion = () => {
  const filteredPokemon = props.pokemon.filter(pokemon => pokemon.moves.length > 0);
  console.log(filteredPokemon, "filteredPokemon");
  const selectedPokemon = generateRandomIndex(filteredPokemon);
  console.log(selectedPokemon, "selectedPokemon");
  const pokemonSelected = selectedPokemon.name;
  console.log(pokemonSelected, "pokemonSelected");
  const correctAnswer = selectedPokemon.moves.length;
  const title = `How many moves does pokemon ${pokemonSelected} have?`

  const incorrectOptions =new Set();
  while(incorrectOptions.size < 3){
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber !== correctAnswer){
      incorrectOptions.add(randomNumber);
    }
  }

  let options = [
    { correct: true, content: correctAnswer.toString() },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];
  options = shuffleElements(options);
  return{ 
    title,
    options,
  }

}


const generateRandomQuestion2 = () => {
 const filteredPokemon = props.pokemon.filter(pokemon => pokemon.sprites);
  const selectedPokemon = generateRandomIndex(filteredPokemon);
  const title = `Which pokemon is shown in the image below?`;
  const imageUrl = selectedPokemon.sprites.front_default;

  // Crear un conjunto de opciones incorrectas únicas

  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomPokemon = generateRandomIndex(filteredPokemon);
    if(randomPokemon.name !== selectedPokemon.name){
      incorrectOptions.add(randomPokemon.name);
    }
  }

  let options = [
    { correct: true, content: selectedPokemon.name, imageUrl },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options = shuffleElements(options);
  return { title, options, imageUrl };
}

const generateRandomQuestion3 = () => {
  const filteredPokemon = props.pokemon.filter(pokemon => pokemon.abilities);
  const selectedPokemon = generateRandomIndex(filteredPokemon);
  const title = `How many abilities does pokemon ${selectedPokemon.name} have?`;
  const correctAnswer = selectedPokemon.abilities.length;

  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber !== correctAnswer) {
      incorrectOptions.add(randomNumber);
    }
  }

  let options = [
    { correct: true, content: correctAnswer.toString() },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options = shuffleElements(options);

  return {
    title,
    options,
  };
}

const generateRandomQuestion4 = () => {
  const filteredPokemon = props.pokemon.filter(pokemon => pokemon.abilities);
  const selectedPokemon = generateRandomIndex(filteredPokemon);
  const correctAnswer = selectedPokemon.abilities.map(ability => ability.ability.name);
  console.log(correctAnswer, "correctAnswer")
  const allAbilities = filteredPokemon.flatMap(pokemon => pokemon.abilities.map(ability => ability.ability.name));

  const title = `Which ability or abilities does pokemon ${selectedPokemon.name} have?`;

  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomAbility = generateRandomIndex(allAbilities);
    const randomAbilityTwo = generateRandomIndex(allAbilities);
    if(randomAbility !== correctAnswer && randomAbilityTwo !== correctAnswer){
      const caden = randomAbility + ', ' + randomAbilityTwo;
      incorrectOptions.add(caden);
    }
  }

  const cadena = correctAnswer.join(', ');
  let options = [
    { correct: true, content: cadena },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options = shuffleElements(options);

  return {
    title,
    options,
  };

}


const generateRandomQuestion5 = () => {
  const filteredPokemon =props.pokemon.filter(pokemon => pokemon.types);
  const selectedPokemon = generateRandomIndex(filteredPokemon);
  const title = `Which type or types does pokemon ${selectedPokemon.name} have?`;
  const correctAnswer = selectedPokemon.types.map(type => type.type.name);
  console.log(correctAnswer, "correctAnswer");
  const allTypes = filteredPokemon.flatMap(pokemon => pokemon.types.map(type => type.type.name));

  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomType = generateRandomIndex(allTypes);
    const randomTypeTwo = generateRandomIndex(allTypes);
    if((randomType !== correctAnswer) && (randomTypeTwo !== correctAnswer)){
      const caden = randomType + ', ' + randomTypeTwo;
      incorrectOptions.add(caden);
    }
  }

  const cadena = correctAnswer.join(', ');

  let options = [
    { correct: true, content: cadena },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options = shuffleElements(options);

  return {
    title,
    options,
  };
}

const generateQuestion = () => {
  const randomIndex = Math.floor(Math.random() * 4);
    let selectedQuestion;

    switch(randomIndex){
        case 0:
            selectedQuestion = generateRandomQuestion();
            break;
        case 1:
            selectedQuestion = generateRandomQuestion2();
            break;
        case 2:
            selectedQuestion = generateRandomQuestion3();
            break;
        case 3:
            selectedQuestion = generateRandomQuestion4();
            break;
        case 4:
            selectedQuestion = generateRandomQuestion5();
            break;
        case 5:
            selectedQuestion = generateRandomQuestion6();
            break;
        default:
    }

    return selectedQuestion;
}
</script>



<style scoped>

</style>