
<script setup>
import { onMounted, ref } from 'vue';
import {  useRouter } from 'vue-router';

const resetScore = () =>{
    localStorage.setItem("scores", []);
    window.location.reload();
    
}

const router = useRouter();
    const score1 = localStorage.getItem("score1") || "0";
    const score2 = localStorage.getItem("score2") || "0";
    const username1 = localStorage.getItem("username1");
    const username2 = localStorage.getItem("username2");
    const scoresString = localStorage.getItem("scores");
    const scores = scoresString ? JSON.parse(scoresString) : [];

    onMounted(() => {
      setTimeout(() => {
        reset();
      }, 2000);
    });

    const goHome = () => {
      router.push({
        name: "homeView",
      });
    };

    const reset = () => {
      // Guardar los puntajes individuales en el almacenamiento local
      localStorage.setItem(username1 + "score", score1);
      localStorage.setItem(username2 + "score", score2);

      // Obtener los puntajes individuales de cada jugador
      const userScore = parseInt(score1) || 0;
      const userScore2 = parseInt(score2) || 0;

      // Actualizar el arreglo de puntajes
      scores.push(userScore);
      scores.push(userScore2);

      // Guardar el arreglo de puntajes en el almacenamiento local
      localStorage.setItem("scores", JSON.stringify(scores));

      // Reiniciar los puntajes individuales a 0
      localStorage.setItem("score1", 0);
      localStorage.setItem("score2", 0);
    };

</script>

<template>
    <div class="score-view">
        <div class="score">
        <h1> score </h1>
    <h1> {{ username1 }} {{score1}}</h1>
    <h1>  {{ username2 }} {{score2}}</h1>
  
    <button @click="goHome()" >Play again</button>
    <button @click="resetScore()">resetscore</button>

    </div>

    <div class="scores-table">
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="score in scores" >
                    <td>{{ score }}</td>
                   
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    
</template>

<style scoped>

.score-view {
    display:flex;
    justify-content: space-around;
}

</style>