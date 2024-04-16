
<script setup>
const score1 =localStorage.getItem("score1");
const score2 =localStorage.getItem("score2");
const username1= localStorage.getItem("username1");
const username2= localStorage.getItem("username2");

const userscore = localStorage.setItem(username1+"score", score1);
const userscore2 = localStorage.setItem(username2+"score", score2);

const reset = () => {
    localStorage.setItem("score1", 0);
    localStorage.setItem("score2", 0);
    location.reload();
}	

</script>

<template>
    <h1> score </h1>
    <h1> {{ username1 }} {{score1}}</h1>
    <h1>  {{ username2 }} {{score2}}</h1>
    <button @click="reset">reset</button>
</template>

<style scoped> </style>