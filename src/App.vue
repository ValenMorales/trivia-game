<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <header >
            <nav>
                    <div class="left">
                      <RouterLink class="nav-link" to="/">Home</RouterLink>
                      <img src="/public/logo3.png" alt="">
                    </div>
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
.left {
    display: flex;
    align-items: center;
    justify-content: space-between;

}
nav  {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
    align-items: center;

}
nav img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}


.nav-link {
  color:#e2dcd7;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 50%;
  transition: 0.5s;
}

.nav-link:hover {
  background-color:#c4533e;
  transform:scale(1.1)
}


</style>
