<script setup>
import { ref, computed } from 'vue'
import characterChoice from '@/components/characterChoice.vue';
const charactersCantity = ref(0);

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

    <div v-if="modalGame" class="modal-overlay">
        <div class="modal">
            <h2>Choose the type game</h2>
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
        <characterChoice :index="index" ></characterChoice>
        </div>

        </div>

        <RouterLink to="/categories" class="play-button">Play</RouterLink>
       
  
    </div>
    
    

    

</template>

<style scoped>

.play-button{
   margin:auto;
    width: 100px;
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
    background-color: black;
    color: white;
    transition: 0.5s;
}

.characterChoice{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cards{
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.players{
    text-align: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  color:black;
  font-size: 1.2rem;
}

.buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.buttons button{
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 50%;
    
    cursor: pointer;
    font-size: 1.2rem;

}
</style>