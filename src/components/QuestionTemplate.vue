<script setup>
const props = defineProps(['question']);

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
                <div class="question-footer-option" v-for="(option, index) in question.options" :key="index">
               <h4> {{option.content}}</h4> 
                </div>
        </div>
    </div>

</template>

<style scoped>
   .question-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    }


</style>