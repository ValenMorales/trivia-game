<template>
    <div class="question-container">
        <audio ref="audio" src="/public/audio.mp3" loop></audio>
        <div class="question-header">
            <div class="question-header-title">
                {{ question.title }}
                <img v-if="question.imageUrl" :src="question.imageUrl" alt="">
            </div>
        </div>
        <div class="question-footer">
            <div v-for="(option, index) in question.options" :key="index" class="question-footer-option">
                <button 
                    @click="sendResponse(option, index)"
                    :class="{ 'correct-answer': showCorrect && correctIndex === index, 'incorrect-answer': !showCorrect && correctIndex === index }"
                    @mouseover="stopAnimation"
                    @mouseleave="startAnimation"
                >
                    {{ option.content }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
const props = defineProps(['question', 'userIndex']);
const emit = defineEmits(['callCharacters', 'buttonAction']);
const showCorrect = ref(false);
const correctIndex = ref(-1);
const sendResponse = (option, index) => {
    if (option.correct == true){
        let userScore = localStorage.getItem('score' + props.userIndex);
        userScore = parseInt(userScore) + 100;
        localStorage.setItem('score' + props.userIndex,  userScore);
        showCorrect.value = true;
        correctIndex.value = index;
        emit('callCharacters');
        setTimeout(() => {
            showCorrect.value = false;
            emit('buttonAction');
        }, 1000);
    } else {
        showCorrect.value = false;
        correctIndex.value = index;
        setTimeout(() => {
            emit('buttonAction');
        }, 2000);
    }
}



const startAnimation = () => {
    const buttons = document.querySelectorAll('.question-footer-option button');
    buttons.forEach(button => {
        button.classList.add('animated');
    });
}

const stopAnimation = () => {
    const buttons = document.querySelectorAll('.question-footer-option button');
    buttons.forEach(button => {
        button.classList.remove('animated');
    });
}

startAnimation();
const audioRef = ref(null);

const playMusic = () => {
    if (audioRef.value) {
        audioRef.value.play();
    }
}

// Método para pausar la música
const pauseMusic = () => {
    if (audioRef.value) { 
        audioRef.value.pause(); 
    }
}

onMounted(() => {
    audioRef.value = document.querySelector('audio'); 
    playMusic();
});

</script>

<style scoped>

@keyframes changeColor {
    0% { background-color: #78b7bd; }
    25% { background-color: #ffcc00; }
    50% { background-color: #ec00b5; }
    75% { background-color: #6699ff; }
    100% { background-color: #78b7bd; }
}

.question-footer-option button.animated {
    animation: changeColor 2s infinite;
}

.question-container {
    width: 95%;
    height: 95%;
    -webkit-box-shadow: inset 8px 14px 70px 38px #c4533e;
    -moz-box-shadow: inset 8px 14px 70px 38px #c4533e;
    box-shadow: inset 8px 14px 70px 38px #78b7bd;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    border-radius: 1.5rem;
}

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
    align-items: center;
    text-align: center;
}

.question-header img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    margin: 20px;
    border-radius: 1.5rem;
}

.question-header-title {
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.question-footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.9rem;
}

.question-footer-option {
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 1rem;
}

.question-footer-option button {
    min-width: 24rem;
    height: auto;
    min-height: 3.8rem;
    font-size: 20px;
    font-weight: 600;
    border: none;
    background-color: #78b7bd;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    padding: 1rem 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
