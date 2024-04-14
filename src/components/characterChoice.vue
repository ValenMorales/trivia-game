<script setup>
import { ref } from 'vue'
const user = ref('');
const userindex = ref('');
const props = defineProps(['index']);
const createUser = (username) => {
   userindex.value = `username${props.index}`;
   user.value = username;
  localStorage.setItem(userindex.value, user.value);
  
  console.log(user.value);
}

</script>

<template>

    <div class="character-card">

        <div class="slick">
        <picture>
            <img v-if="user != '' " :src="'https://robohash.org/set_set5/' + user + '.png'">
        </picture>
      </div>
        <div class="input">
            <h3>Type a username and get a random character</h3>
            <input  v-model="username" type="text" >
            <button @click="createUser(username)">select</button>
         
        </div>
       
    </div>

</template>

<style scoped>

.input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.input h3{
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}

.input input{
    border-radius: 10px;
    padding: 10px;
}

.input button{
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: rgb(255, 255, 255);
}

.input button:hover{
    background-color: rgb(0, 0, 0);
    color: white;
    cursor: pointer;
    transition: 0.5s;
   
}
.character-card{
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
    margin:0;
    margin-top:1rem;
    
  }
  
  .slick img {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
  }

</style>