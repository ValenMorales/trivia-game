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
const emit = defineEmits(['changesInScore', 'buttonAction']);

const callCharacters  = () => {
  emit('changesInScore');
};
const props = defineProps({
  characters: Array,
  userIndex : Number
});


const shuffleElements = (options) =>{
  options.sort(() => Math.random() - 0.5);
  return options;
}
const generateRandomIndex = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const findNonEmptyField = (items, field) => {
  for (const item of items) {
    if (item[field]) {
      return item[field];
    }
  }
  return null;
}


//no error
const generateRandomQuestion = () => {
  const filteredCharacters = props.characters.filter(character => character.series.items.length > 0);
  const character = generateRandomIndex(filteredCharacters);
  const title = `What is the name of the series that features ${character.name}?`;
  const seriesName = findNonEmptyField(character.series.items, 'name');

  // Crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomSeriesName = findNonEmptyField(randomCharacter.series.items, 'name');
    if (randomSeriesName && randomSeriesName !== seriesName) {
      incorrectOptions.add(randomSeriesName);
    }
  }

  let options = [
    { correct: true, content: seriesName },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };
}


//error muchas opciones
const generateRandomQuestion2 = () => {
  const filteredCharacters = props.characters.filter(character => character.comics.items.length > 0);
  const character = generateRandomIndex(filteredCharacters);
  const title = `In which comic did ${character.name} first appear?`;
  const comics = character.comics.items.filter(comic => comic.name); // Filter out comics with empty names
  const comicName = comics.length ? comics[0].name : 'Unknown'; // Select the first non-empty comic name or set to 'Unknown' if none found

  // Crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomComic = randomCharacter.comics.items.filter(comic => comic.name)[0];
    if (randomComic && randomComic.name !== comicName) {
      incorrectOptions.add(randomComic.name);
    }
  }

  let options = [
    { correct: true, content: comicName },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };
}



//no error
const generateRandomQuestion3 = () => {
  const filteredCharacters = props.characters.filter(character => character.events.items.length > 0);
  const character = generateRandomIndex(filteredCharacters);
  const title = `How many events has ${character.name} participated in?`;
  const correctAnswer = character.events.items.length;
  let options = [
    { correct: true, content: correctAnswer.toString() },
    { correct: false, content: (correctAnswer + 1).toString() },
    { correct: false, content: (correctAnswer - 1).toString() },
    { correct: false, content: (correctAnswer + 2).toString() }
  ];
  options=shuffleElements(options);
  return { title, options };
}

//error solo se pone una opcion 
const generateRandomQuestion4 = () => {
  const filteredCharacters = props.characters.filter(character => character.description);
  const character = generateRandomIndex(filteredCharacters);
  const title = `What is the description of ${character.name}?`;
  const description = character.description;

  // Crear un conjunto de opciones incorrectas únicas
  let incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomDescription = randomCharacter.description;
    if (randomDescription && randomDescription !== description) {
      incorrectOptions.add(randomDescription);
    }
  }

  let options = [
    { correct: true, content: description },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };
}

const generateRandomQuestion5 = () => {
  const filteredCharacters = props.characters.filter(character => character.thumbnail);
  const character = generateRandomIndex(filteredCharacters);
  const title = `Which character is shown in the image below?`;
  const imageUrl = character.thumbnail.path + '.' + character.thumbnail.extension;
  console.log(character.name, "---character.name---")

  // Crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomImageUrl = randomCharacter.name;
    if (randomImageUrl && randomImageUrl !== character.name) {
      incorrectOptions.add(randomImageUrl);
    }
  }

  let options = [
    { correct: true, content: character.name, imageUrl },
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options, imageUrl };
}

const generateRandomQuestion6 = () => {
  const filteredCharacters = props.characters.filter(character => character.events.items.length > 0);
  console.log(filteredCharacters, "---filteredCharacters---");
  const character = generateRandomIndex(filteredCharacters);
  const title = `What is the name of the event that ${character.name} participated in?`;
  const eventName = character.events.items.filter(event => event.name)[0].name;

  // Crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomEventName = randomCharacter.events.items.filter(event => event.name)[0].name;
    if (randomEventName && randomEventName !== eventName) {
      incorrectOptions.add(randomEventName);
    }
  }

  let options = [
    { correct: true, content: eventName },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };
}

const generateRandomQuestion7 = () => {
  const filteredCharacters = props.characters.filter(character => character.stories.items.length > 0);
  const character = generateRandomIndex(filteredCharacters);
  const title = `How many stories has ${character.name} participated in?`;
  const correctAnswer = character.stories.items.length;


  // Crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  while (incorrectOptions.size < 3) {
    const randomCharacter = generateRandomIndex(filteredCharacters);
    const randomStories = randomCharacter.stories.items.length;
    if (randomStories && randomStories !== correctAnswer) {
      incorrectOptions.add(randomStories);
    }
  }

  let options = [
    { correct: true, content: correctAnswer.toString() },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option.toString() })),
  ];

  options=shuffleElements(options);
  return { title, options };
}


const generateRandomQuestion8 = () =>{
  const filteredCharacters = props.characters.filter(character => character.stories.items.length > 0);
  const allTypes = filteredCharacters.flatMap(character => character.stories.items.map(item => item.type)); 
  const character = generateRandomIndex(filteredCharacters);
  const Stories = character.stories.items.filter (character => character.name);
  const randomStories = generateRandomIndex(Stories);
  const title = `What kind of story is ${randomStories.name} in?`;
  const correctAnswer = randomStories.type;


  //crear un conjunto de opciones incorrectas únicas
  const incorrectOptions = new Set();
  for (const type of allTypes) {
    if (type !== correctAnswer) {
      incorrectOptions.add(type);
      break
    }
  }

  let options = [
    { correct: true, content: correctAnswer },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };

}

const generateRandomQuestion9 = () =>{
const filteredCharacters = props.characters.filter(character => character.comics.items.length > 0 && character.stories.items.length > 0);
const character = generateRandomIndex(filteredCharacters);
const correctAnswer = character.comics.items.length+ character.stories.items.length;
const title = `How many comics and stories has ${character.name} participated in?`;

// Crear un conjunto de opciones incorrectas únicas

const incorrectOptions = new Set();
 while(incorrectOptions.size < 3){
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber !== correctAnswer){
        incorrectOptions.add(randomNumber);
    }
   }
 
let options = [
    { correct: true, content: correctAnswer.toString() },
    // Convertir el conjunto de opciones incorrectas a un array y mapear para formatear como objeto de opción
    ...Array.from(incorrectOptions).map(option => ({ correct: false, content: option })),
  ];

  options=shuffleElements(options);
  return { title, options };

}
const generateQuestion = () => {
  const randomIndex = Math.floor(Math.random() * 9);
  let selectedQuestion;

  switch (randomIndex) {
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
    case 6:
      selectedQuestion = generateRandomQuestion7();
      break;
    case 7:
      selectedQuestion = generateRandomQuestion8();
      break;
    case 8:
      selectedQuestion = generateRandomQuestion9();
      break;
    default:

  }

  return selectedQuestion;
}
</script>
