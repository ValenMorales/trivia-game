<script setup>
import { ref } from 'vue';
const props = defineProps(['question', 'userIndex']);
const emit = defineEmits(['callCharacters'])
const showCorrect = ref(false);
const correctIndex = ref(-1);
const sendResponse = (option, index) =>{
    
   if (option.correct == true){
    let userScore=  localStorage.getItem('score'+props.userIndex);
    console.log('entre');
    userScore = parseInt(userScore) + 100;
    localStorage.setItem('score'+props.userIndex,  userScore);
    showCorrect.value = true;
    correctIndex.value = index;
    emit('callCharacters');
   } else {
    showCorrect.value =false;
    correctIndex.value = index;
   }
}

</script>
<template>

    <div class="question-container">
        <div class="question-header">
            <img v-if="question.imageUrl" :src="question.imageUrl" alt="">
            <div class="question-header-title">
                {{question.title}}
            </div>
        </div>
        <div class="question-footer">
                <div      :class="{ 'correct-answer': showCorrect && correctIndex == index,
                'incorrect-answer': !showCorrect && correctIndex == index
                }"
              
                
                class="question-footer-option" v-for="(option, index) in question.options" :key="index">
               <h4 
                @click="sendResponse(option, index)"
            
                 > {{option.content}}</h4> 
                </div>
               
                
        </div>
    </div>
</template>

<style scoped>

.incorrect-answer {
    background-color: rgb(234, 0, 0);
   
}
.incorrect-answer:hover {
    background-color: rgb(234, 0, 0);
}

.correct-answer {
background-color: green; 
}
.correct-answer:hover {
    background-color: green;
    }

    .question-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30%;
        border-radius: 10px;
    }

    .question-header img {
        width: 150px;
        height: 100px;
      object-fit: cover;
        margin: 20px;
    }
    .question-header-title {
        margin: 20px;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }

    .question-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
        border-radius: 10px;
    }

    .question-footer {
        
        width: 100%;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:5rem;
    }

    

    .question-footer-option{
        display: flex;
        justify-content: space-around;
        width: 100%;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
    }

  

</style>