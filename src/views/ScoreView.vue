
<script setup>
import { onMounted, ref } from 'vue';
import {  useRouter } from 'vue-router';
 

const score1 =localStorage.getItem("score1");
const score2 =localStorage.getItem("score2");
const username1= localStorage.getItem("username1");
const username2= localStorage.getItem("username2");
const scores = localStorage.getItem("scores");



onMounted(() => {
    setTimeout(() =>
    {
       reset();
    }, 4000);
});

const reset = () => {
 localStorage.setItem(username1+"score", score1);
 localStorage.setItem(username2+"score", score2);
 const userscore =localStorage.getItem(username1+"score");
 const userscore2 = localStorage.getItem(username2+"score");
 const scores = [];
 scores.push(userscore);
 scores.push(userscore2);
    localStorage.setItem("scores", scores);
    localStorage.setItem("score1", 0);
    localStorage.setItem("score2", 0);
    scores.value = localStorage.getItem("scores");
  
}	

</script>

<template>
    <h1> score </h1>
    <h1> {{ username1 }} {{score1}}</h1>
    <h1>  {{ username2 }} {{score2}}</h1>
    {{ scores }}
</template>

<style scoped> </style>