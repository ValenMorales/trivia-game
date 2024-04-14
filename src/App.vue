<script setup>
import SelectCharacter from '@/components/SelectCharacter.vue'

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <header >
            <nav>

                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                    <RouterLink class="nav-link"to="/scores">scores</RouterLink>
                    <RouterLink class="nav-link"to="/characters">options</RouterLink>
             
            </nav>
            </header>




<RouterView/>
  
</template>

<style scoped>
header {
    background-color: rgb(0, 0, 0);
    padding: 10px;
    margin:0;
    color:white;
}



nav  {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;

}


.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}






</style>
