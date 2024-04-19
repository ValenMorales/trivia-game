<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

const resetScore = () => {
  localStorage.setItem("scores", []);
  window.location.reload();
};

const reloadPage = () =>{
  window.location.reload();
}
const router = useRouter();
const score1 = localStorage.getItem("score1") || "0";
const score2 = localStorage.getItem("score2") || "0";
const username1 = localStorage.getItem("username1");
const username2 = localStorage.getItem("username2");
const scoresString = localStorage.getItem("scores");
const scores = ref(scoresString ? JSON.parse(scoresString) : []);

const sortedScores = computed(() => {
  console.log(scores);
  return scores.value.slice().sort((a, b) => b.score - a.score);
});

onMounted(() => {
  reset();
});

const goHome = () => {
  router.push({
    name: "homeView",
  });
};

const reset = () => {
  localStorage.setItem(username1 + "score", score1);
  localStorage.setItem(username2 + "score", score2);

  const userScore = parseInt(score1) || 0;
  const userScore2 = parseInt(score2) || 0;

  const existingScoreIndex = scores.value.findIndex(
    (item) => item.username === username1
  );
  if (existingScoreIndex === -1) {
    scores.value.push({ username: username1, score: userScore });
  } else {
    if (userScore > scores.value[existingScoreIndex].score) {
      scores.value[existingScoreIndex].score = userScore;
    }
  }

  const existingScoreIndex2 = scores.value.findIndex(
    (item) => item.username === username2
  );
  if (existingScoreIndex2 === -1) {
    scores.value.push({ username: username2, score: userScore2 });
  } else {
    if (userScore2 > scores.value[existingScoreIndex2].score) {
      scores.value[existingScoreIndex2].score = userScore2;
    }
  }
  localStorage.setItem("scores", JSON.stringify(scores.value));
  scores.value = localStorage.getItem("scores");

  //localStorage.setItem("score1", 0);
  // localStorage.setItem("score2", 0);
};
</script>

<template>
  <div class="score-view">
    <div class="score">
      <h1>SCORE</h1>
      <div class="users-score">
        <h2>{{ username1 }} {{ score1 }}</h2>
      <h2 v-if="username2">{{ username2 }} {{ score2 }}</h2>
      </div>
      <div class="buttones">
        <button @click="goHome()">Play again</button>
      <button @click="resetScore()">Reset score</button>
      <button @click="reloadPage()" >View position</button>
      </div>
    
    </div>

    <div class="scores-table">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="score in sortedScores">
            <td>{{ score.username }}</td>
            <td>{{ score.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
th {
  text-align: center;
}

td img {
  width: 50px;
  height: 50px;
}

td p {
  width: 80px;
  text-align: center;
}

td {
  text-align: center;
}

.table {
  margin: 2rem;
}

.table-product {
  display: flex;
  justify-content: center;
  align-items: center;
}

.score-view {
  display: flex;
  justify-content: space-around;
}

.scores-table {
  width: 50%;
}

.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 85vh;
}

.score h1{
  font-size: 3rem;
  font-weight: bold;
}

 .buttones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:4rem;
  width: 100%;
}

.buttones button {
  width: 8rem;
  height: 50px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
 margin:auto;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
}

.buttones button:hover {
  background-color: #78b7bd;
  transform: scale(1.1);
}

.users-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

</style>
