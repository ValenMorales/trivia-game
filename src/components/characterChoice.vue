<script setup>
import { ref } from "vue";
const user = ref("");
const userindex = ref("");
const props = defineProps(["index"]);
const inUse = ref(false)
const createUser = (username) => {
  let players = localStorage.getItem("players");
  const username1 = localStorage.getItem("username1");
  console.log(username1);

  players = JSON.parse(players);
  if ((players != null && username in players) || username1 == username) {
    inUse.value = true;
    setTimeout(() =>
    {
       inUse.value= false;
    }, 1000);
    
    return;
  }

  userindex.value = `username${props.index}`;
  const userScore = `score${props.index}`;

  user.value = username;
  localStorage.setItem(userindex.value, user.value);
  localStorage.setItem(userScore, 0);
};
</script>

<template>
<div v-if="inUse" class="modal-overlay">
        <div class="modal">
            <h2>User already in use</h2>
        </div>
    </div>
  <div class="character-card">
    <div class="slick">
      <picture>
        <img
          v-if="user != ''"
          :src="'https://robohash.org/set_set5/' + user + '.png'"
        />
      </picture>
    </div>
    <div class="input">
      <h3>Type a username and get a random character</h3>
      <input v-model="username" type="text" />
      <button @click="createUser(username)">Choose</button>
    </div>
  </div>
</template>

<style scoped>


.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.input h3 {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.input input {
  border-radius: 10px;
  padding: 10px;
}

.input button {
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  height: 3rem;
  border-radius: 50%;
  width: 10rem;
}

.input button:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 25rem;
}

.slick {
  position: relative;
  width: 13rem;
  padding: 0 18px;
  float: left;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  margin: 0;
  margin-top: 1rem;
}

.slick img {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  background-color: white;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:#5BC0EB;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
 background-color: #f3eaea;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  color:black;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.modal h2{
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color :#2A4858;
}

</style>
