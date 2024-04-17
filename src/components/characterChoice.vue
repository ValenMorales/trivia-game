<script setup>
import { ref } from "vue";
const user = ref("");
const userindex = ref("");
const props = defineProps(["index"]);
const emit = defineEmits(["habilitate"]);
const inUse = ref(false)
const createUser = (username) => {
    userindex.value = `username${props.index}`;
    const username1= localStorage.getItem("username1");
    const username2= localStorage.getItem("username2");
  
  const score1 = JSON.parse(localStorage.getItem(username + "score")) || null;
  console.log(score1);

  if ((username1 == username || username2 == username) ||  score1 != null  ) 
  {
    inUse.value = true;

    setTimeout(() => {
      inUse.value = false;
    }, 2000);
    return;
  }

  user.value = username;
  localStorage.setItem(userindex.value, user.value);
  localStorage.setItem('score1', 0);
  localStorage.setItem('score2', 0);
  emit('habilitate')
  
  
};
</script>

<template>
  <section>

    <div v-if="inUse" class="modal-overlay">
        <div class="modal">
            <h2>User already in use</h2>
            <p>please write another</p>
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

  </section>

</template>

<style scoped>

section {
  height: 70vh;
}


.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.input h3 {
  width:18rem;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.input input {
  width:16rem;
  border:none;
  padding: 10px;
  background-color:#e2dcd7;
  color:#143041;
  outline: none;
}

.input button {
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  height: 3rem;
  border-radius: 50%;
  width: 10rem;
 
  background-color: #c4533e;
  color: #e2dcd7;
}

.input button:hover {
  background-color: #143041;
  
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
 background-color: #e2dcd7;
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
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color :#2A4858;
}

.modal p{
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color :#2A4858;
}

</style>
