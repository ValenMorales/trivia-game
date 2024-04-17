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
    starWars: Array,
    userIndex: Number
  });
  
  
  const generateRandomIndex = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  function formatearString(str) {
  if (typeof str !== 'string') {
    throw new Error('Se esperaba un string como entrada.');
  }

  if (str.length < 3) {
    return str;
  } else {
    const parteEntera = str.substring(0, str.length - 2); 
    const parteDecimal = str.substring(str.length - 2); 
    return `${parteEntera},${parteDecimal}`;
  }
}
  
  const shuffleElements = (options) =>{
      options.sort(() => Math.random() - 0.5);
      return options;
  }
  

  const generateRandomQuestion = () => {
    const filteredCharacters = props.starWars.filter(character => character.birth_year !== "unknown");
    const selectedCharacter = generateRandomIndex(filteredCharacters);
    const characterSelected = selectedCharacter.name;
    const correctAnswer = selectedCharacter.birth_year;
    const allBirthYear =  filteredCharacters.map(character => character.birth_year);
    console.log(allBirthYear,"allBirtYear")
    const title = `What is the birth year of ${characterSelected}?`;

    const incorrectOptions =new Set();
    while (incorrectOptions.size <3 ){
        const random = generateRandomIndex(allBirthYear);
        if(random !== correctAnswer){
            incorrectOptions.add(random)
        }
    }

    let options = [
      { correct: true, content: correctAnswer},
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return{ 
      title,
      options,
    }
  
  }

  const generateRandomQuestion2 = () => {
    const filteredCharacters = props.starWars.filter(character => character.eye_color !== "unknown");
    const selectedCharacter = generateRandomIndex(filteredCharacters);
    const characterSelected = selectedCharacter.name;
    const correctAnswer = selectedCharacter.eye_color;
    const allEyes =  filteredCharacters.map(character => character.eye_color);
    const title = `What color eyes does ${characterSelected} have?`;

    const incorrectOptions =new Set();
    while (incorrectOptions.size <3 ){
        const random = generateRandomIndex(allEyes);
        if(random !== correctAnswer){
            incorrectOptions.add(random)
        }
    }

    let options = [
      { correct: true, content: correctAnswer},
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return{ 
      title,
      options,
    }
  

  }
  const generateRandomQuestion3 = () => {
    const filteredCharacters = props.starWars.filter(character => character.mass !== "unknown");
    const selectedCharacter = generateRandomIndex(filteredCharacters);
    const characterSelected = selectedCharacter.name;
    const correctAnswer = selectedCharacter.mass;
    const allMass =  filteredCharacters.map(character => character.mass);
    const title = `how much does ${characterSelected} weigh in kg`;

    const incorrectOptions =new Set();
    while (incorrectOptions.size <3 ){
        const random = generateRandomIndex(allMass);
        if(random !== correctAnswer){
            incorrectOptions.add(random)
        }
    }

    let options = [
      { correct: true, content: correctAnswer},
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return{ 
      title,
      options,
    }
  

  }
  const generateRandomQuestion4 = () => {
    const filteredCharacters = props.starWars.filter(character => character.height !== "unknown");
    const selectedCharacter = generateRandomIndex(filteredCharacters);
    const characterSelected = selectedCharacter.name;
    const correctAnswer = formatearString(selectedCharacter.height);
    const allMass =  filteredCharacters.map(character => character.mass);
    const title = `How tall is ${characterSelected} in meters?`;

    const incorrectOptions =new Set();
    while (incorrectOptions.size <3 ){
        const random = formatearString(generateRandomIndex(allMass));

        if(random !== correctAnswer){
            incorrectOptions.add(random)
        }
    }

    let options = [
      { correct: true, content: correctAnswer},
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return{ 
      title,
      options,
    }
  

  }
  
const generateRandomQuestion5 = () => {
    const filteredCharacters = props.starWars.filter(character => character.skin_color !== "unknown");
    const selectedCharacter = generateRandomIndex(filteredCharacters);
    const characterSelected = selectedCharacter.name;
    const correctAnswer = selectedCharacter.skin_color;
    const allSkin_color =  filteredCharacters.map(character => character.skin_color);
    const title = `What color skin does ${characterSelected} have?`;

    const incorrectOptions =new Set();
    while (incorrectOptions.size <3 ){
        const random = generateRandomIndex(allSkin_color)

        if(random !== correctAnswer){
            incorrectOptions.add(random)
        }
    }

    let options = [
      { correct: true, content: correctAnswer},
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return{ 
      title,
      options,
    }
  
}


  
  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * 5);
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
        default:

      }
  
      return selectedQuestion;
  }
  </script>
  
  
  
  <style scoped>
  
  </style>