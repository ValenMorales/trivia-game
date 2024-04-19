<script setup>
import { ref, computed } from 'vue'
import characterChoice from '@/components/characterChoice.vue';
const playEnabled= ref(false);
const charactersCantity = ref(0);
const times = ref(0)

const habilitate = () =>{
    times.value +=1;
    if(times.value == charactersCantity.value){
        playEnabled.value = true;
        console.log('entreee')
    }
}

const setCantity = (cantity) =>{
    charactersCantity.value = cantity;
    if (cantity == 1){
        localStorage.removeItem('username2');
    }
    modalGame.value = false;
}

const modalGame = ref(true);
</script>

<template>

    <div v-if="modalGame" class="modal-overlaye">
        <div class="modale">
            <h2>Choose the game type</h2>
            <div class="buttons">
                <button @click="setCantity(1)">Classic</button>
                <button @click="setCantity(2)">Multiplayer</button>
            </div>
        </div>
    </div>
    
    <div v-else class="characterChoice">
        <div class="cards">
            <div v-for="index in charactersCantity" :key="index" class="players">
            <h2>Player {{ index }} </h2>
        <characterChoice @habilitate="habilitate()" :index="index" ></characterChoice>
        </div>

        </div>
        <RouterLink  :to="playEnabled ? '/categories' : '/characters'" class="play-button">Play</RouterLink>
  
    </div>
    
    

    

</template>

<style scoped>

.play-button{

   margin-top: 20px;
    width: 12rem;
    padding:20px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
    justify-content: center;
    justify-self: center;
    text-decoration: none;
    color:black;
}

.play-button:hover{
    transition: 0.5s;
    background-color: #143041;
    color: white;
}

.characterChoice{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #78b7bd;
    color:#e2dcd7;
    height: 100vh;
}

.cards{
    display:flex;
    justify-content: space-around;
    align-items: center;
    
}

.cards h2{
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: #c4533e;
}

.players{
    text-align: center;
   
}

.modal-overlaye {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #143041;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modale {
 background-color: #78b7bd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  font-size: 1.2rem;
  width: 60%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.modale h2{
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    color:#e2dcd7;

}

.buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40rem;
    height: 10rem;
}

.buttons button{
    width: 10rem;
    height: 5rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: #c4533e;
    border:none;
    color:#e2dcd7;

}

.buttons button:hover{
    background-color:#143041;
    transform: scale(1.1);
    transition: 0.5s;
    border: none;
}
</style>