<script setup>
import QuestionTemplate from './QuestionTemplate.vue';
const emit = defineEmits(['changesInScore', 'buttonAction']);

const callCharacters  = () => {
  emit('changesInScore');
};

const props = defineProps(['movies', 'userIndex']);
const generateRandomIndex = () => {
        return props.movies[Math.floor(Math.random() * props.movies.length)];
}



const generateRandomQuestion = () =>{
    const movie = generateRandomIndex();
    const title =  'What is the name of the television show that started on ' + movie.start_date + ' and aired on ' + movie.network + '? '
    const options = [
        {
            correct: true,
            content: movie.name
        },
        {
            correct:false,
            content: generateRandomIndex().name
        },
        {
            correct: false,
            content: generateRandomIndex().name
        },
        {
            correct : false,
            content: generateRandomIndex().name
        }
    ]
    return {
        title: title ,
        options: options
    }
}

const generateRandomQuestion2 = () =>{
    const movie = generateRandomIndex();
    const title =  'The television show ' + movie.name + 'was emited on '
    const options = [
        {
            correct: false,
            content: generateRandomIndex().start_date
        },
        {
            correct:false,
            content: generateRandomIndex().start_date
        },
        {
            correct: false,
            content: generateRandomIndex().start_date
        },
        {
            correct : true,
            content: movie.start_date
        }
    ]
    return {
        title: title ,
        options: options
    }
}

const generateRandomQuestion3 = () =>{
    const movie = generateRandomIndex();
    const title =  'From this series name, what is in state ' + movie.status + '?'
    const v1 = generateRandomIndex();
    const v2 = generateRandomIndex();
    const v3 = generateRandomIndex();
    const options = [
        {
            correct: v1.status == movie.status,
            content: v1.name
        },
        {
            correct:true,
            content: movie.name
        },
        {
            correct: v2.status == movie.status,
            content: v2.name
        },
        {
            correct : v3.status == movie.status,
            content: v3.name
        }
    ]
    return {
        title: title ,
        options: options
    }
}


const generateRandomQuestion4 = () =>{
    const movie = generateRandomIndex();
    const title =  'this image, correspond to the serie ' 
    const options = [
        {
            correct:false,
            content: generateRandomIndex().name
        },
        {
            correct:false,
            content: generateRandomIndex().name
        },
        {
            correct: false,
            content: generateRandomIndex().name
        },
        {
            correct : true,
            content: movie.name
        }
    ]
    return {
        title: title ,
        imageUrl: movie.image_thumbnail_path,
        options: options
    }
}

const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * 4);
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
        default:
    }
    return selectedQuestion;
}
</script>
<template>

<QuestionTemplate
    :question="generateQuestion()"
    :userIndex="props.userIndex"
    @callCharacters="callCharacters"
    @buttonAction="emit('buttonAction')"
    ></QuestionTemplate>
    
</template>

<style scoped>

</style>
