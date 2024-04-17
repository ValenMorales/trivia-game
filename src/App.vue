<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <header >
            <nav>

                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                    <RouterLink class="nav-link"to="/score">scores</RouterLink>
                    <RouterLink class="nav-link"to="/characters">options</RouterLink>
             
            </nav>
            </header>




<RouterView/>
  
</template>

<style scoped>
header {
    background-color: #78b7bd;
    padding: 10px;
    margin:0;
    color:#e2dcd7;
   
}


nav  {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;

}


.nav-link {
  color:#e2dcd7;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 50%;
  transition: 0.5s;
}

.nav-link:hover {
  background-color:#c4533e;
  transform:scale(1.1)
}


</style>
