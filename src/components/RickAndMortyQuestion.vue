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
    rickAndMorty: Array,
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
   const filteredRick = props.rickAndMorty.filter(character => character.image);
    const selectedCharacter = generateRandomIndex(filteredRick);
    const title = `Which character is shown in the image below?`;
    const imageUrl = selectedCharacter.image;
  
    // Crear un conjunto de opciones incorrectas únicas
  
    const incorrectOptions = new Set();
    while (incorrectOptions.size < 3) {
      const randomCharacter = generateRandomIndex(filteredRick);
      if(randomCharacter.name !== selectedCharacter.name){
        incorrectOptions.add(randomCharacter.name);
      }
    }
  
    let options = [
      { correct: true, content:selectedCharacter.name, imageUrl },
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
  
    options = shuffleElements(options);
    return { title, options, imageUrl };
  }
  

  const generateRandomQuestion2 = () =>{
    const filteredRick = props.rickAndMorty.filter(character => character.episode.length > 0);
    const selectedCharacter = generateRandomIndex(filteredRick);
    const title = `How many episodes does appear in?`;
    const imageUrl = selectedCharacter.image;
    const correctAnswer = selectedCharacter.episode.length;
  
    const incorrectOptions = new Set();
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
    return { title, options , imageUrl };
  }  

  const generateRandomQuestion3 = () => {
    const filteredRick = props.rickAndMorty.filter(character => character.status !== 'unknown');
    const selectedCharacter = generateRandomIndex(filteredRick);
    const title = `What is the status of ?`;
    const imageUrl = selectedCharacter.image;
    const correctAnswer = selectedCharacter.status;
  
    const incorrectOptions = new Set();
    while(incorrectOptions.size < 1){
      const randomCharacter = generateRandomIndex(filteredRick);
      if(randomCharacter.status !== selectedCharacter.status){
        incorrectOptions.add(randomCharacter.status);
      }
    }
  
    let options = [
      { correct: true, content: correctAnswer },
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return { title, options, imageUrl };
  }

  const  generateRandomQuestion4 = () => {
    const filteredRick = props.rickAndMorty.filter(character => character.species !== 'unknown');
    const selectedCharacter = generateRandomIndex(filteredRick);
    const title = `What is the species of ?`;
    const imageUrl = selectedCharacter.image;
    const correctAnswer = selectedCharacter.species;
  
    const incorrectOptions = new Set();
    while(incorrectOptions.size < 1){
      const randomCharacter = generateRandomIndex(filteredRick);
      if(randomCharacter.species !== selectedCharacter.species){
        incorrectOptions.add(randomCharacter.species);
      }
    }
  
    let options = [
      { correct: true, content: correctAnswer },
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];
    options = shuffleElements(options);
    return { title, options, imageUrl };
  }

  const generateRandomQuestion5 = () => {
    const filteredRick = props.rickAndMorty.filter(character => character.origin.name !== 'unknown');
    const selectedCharacter = generateRandomIndex(filteredRick);
    const title = `What is the origin of ?`;
    const imageUrl = selectedCharacter.image;
    const correctAnswer = selectedCharacter.origin.name;

    const incorrectOptions = new Set();
    while(incorrectOptions.size < 1){
      const randomCharacter = generateRandomIndex(filteredRick);
      if(randomCharacter.origin.name !== selectedCharacter.origin.name){
        incorrectOptions.add(randomCharacter.origin.name);
      }
    }

    let options = [
      { correct: true, content: correctAnswer },
      ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
    ];

    options = shuffleElements(options);

    return { title, options, imageUrl };
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