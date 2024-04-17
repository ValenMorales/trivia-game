<script setup>
import { useRouter} from 'vue-router'
import { ref } from 'vue';

const router = useRouter();

const goToCharacters = () =>{
    router.push({name: 'charactersView'})
}

const ModalShow = ref(false);

const controlModal = () => {
    ModalShow.value = !ModalShow.value;
}
</script>


<template>
    <div class="hero">
        <div class="hero-text">
            <h1>Welcome to <span>Brain </span> <span>Puzzle</span></h1>
            <p>Test your knowledge</p>
            <button @click="goToCharacters()" >Play</button>
            <button @click="controlModal"> instructions</button>
        </div>
    </div>

    <div v-if="ModalShow" class="modal">
        <div class="modal-content">
            <span class="close" @click="controlModal">&times;</span>
            <img src="/public/logo3.png" alt=""> 
            <h2>Instructions</h2>
            <div class="grid">
                <div class="group">
                    <p>choose the multiplayer or classic game mode if you choose classic you 
                    will play alone if you choose multiplayer you will play with a friend</p>
                    <img src="/public/classicMR.png" class="large-image1" alt="">
                </div> 
                <div class="group">
                    <p>Enter your name, and the game will provide you with a random avatar for your enjoyment.
                    fterward, you will enter the interface that displays various categories. You'll need to click 
                    'roll' to be assigned a category.</p>
                    <div class="row">
                        <img src="/public/name.png"  class="large-image2" alt="">
                        <img src="/public/rollR.png" alt="" class="large-image4">
                    </div>
                </div> 
                <div class="group">
                    <p>Respect your turn and click the button where the correct answer is
                         for you to enjoy.</p>
                    <div class="row">
                        <img src="/public/optionR.png" class="large-image2" alt="">
                        <img src="/public/turnoR.png"  class="large-image3"alt="">
                    </div>
                </div> 
                <div class="win">
                    <span>&#127942;</span>
                    <p>The player with the most good luck points wins</p>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
/* The Modal (background) */

.group img.large-image2 {
    max-width: 250px; /* Ajusta el tamaño según lo necesites */
    height: auto;
}

.group img.large-image1 {
    max-width: 400px; /* Ajusta el tamaño según lo necesites */
    height: auto;
}

.group img.large-image3 {
    max-width: 150px; /* Ajusta el tamaño según lo necesites */
    height: auto;
}
.group img.large-image4 {
    max-width: 100px; /* Ajusta el tamaño según lo necesites */
    height: auto;
}

.win {
    -webkit-box-shadow: inset 10px 10px 73px 26px #78b7bd;
    -moz-box-shadow: inset 10px 10px 73px 26px #78b7bd;
    box-shadow: inset 10px 10px 73px 26px #78b7bd;
    width: 200px;
    height: auto;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    border-radius: 1.5rem;
    padding: 1.5rem;
}
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1.5rem;
}

.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}
.group{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.9rem;
    margin: 0.8rem;
    border-radius: 1rem;
    background-color: #78b7bd;
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

.row {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.group img{
    max-width: 100%;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    padding: 1rem;
}
/* Modal Content */
.modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
    border-radius: 10px;
    text-align: center;
    -webkit-box-shadow: inset 10px 10px 73px 26px #78b7bd;
-moz-box-shadow: inset 10px 10px 73px 26px #78b7bd;
box-shadow: inset 10px 10px 73px 26px #78b7bd;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-weight: bold;
  color: red;
  cursor: pointer;
  font-size: 4rem;
}

.modal-content img{
    max-width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
}
/* The Modal (background) */


.hero-text h1 :nth-child(1) {
  color: #c4533e;
}

.hero-text h1 :nth-child(2) {
  color: #78b7bd;
}

span{
    font-size: 4rem;
}
.hero{
    background-image: url("../public/Designere.jpeg");
    background-size: cover;
    background-position: center;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-text{
    width: 100%;
    text-align: center;
    padding: 2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-text h1{
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-text p{
    font-size: 1.5rem;
}

.hero-text button{
    width: 10rem;
    height: 3rem;
    font-size: 1.5rem;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.6s ease;
}

.hero-text button:hover{
    background-color: #78b7bd;
    transform:scale(1.3);
}
</style>
