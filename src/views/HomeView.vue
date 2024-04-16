<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const goToCharacters = () =>{
    router.push({name: 'charactersView'})
}
</script>


<template>
    <div class="hero">
        <div class="hero-text">
            <h1>Welcome to <span>Brain Puzzle</span></h1>
            <p>Test your knowledge</p>
            <button @click="goToCharacters()" >Play</button>
        </div>
    </div>
</template>

<style scoped>
.hero{
    background-image: url("../public/laberinto.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-text{
    width: 50%;
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
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    margin-top: 1rem;
    cursor: pointer;
}

.hero-text button:hover{
    background-color: rgba(255, 255, 255, 0.2);
}
</style>