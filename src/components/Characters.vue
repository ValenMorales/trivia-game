<script setup>
const emit = defineEmits(['buttonAction'])
const props = defineProps(['buttonText'])

const username1=localStorage.getItem('username1')
const username2=localStorage.getItem('username2')
</script>


<template>

<div class="characters">
    <div class="character-info">
      <img v-if="username1 != '' " :src="'https://robohash.org/set_set5/' + username1 + '.png'">
      <p>{{ username1 }}</p>
    </div>
    <button @click="emit('buttonAction')">{{ buttonText }}</button>
    <div class="character-info">
      <img v-if="username2 != '' " :src="'https://robohash.org/set_set5/' + username2 + '.png'">
      <p>{{ username2 }}</p>
    </div>
   
  </div>
</template>


<style scoped>


button:hover {
  background-color: rgba(255, 0, 0, 0.5);
}

.characters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.characters img {
  width: 100px;
  height: 100px;
}

.characters p{
  font-size: 20px;
  text-align: center;
}

.characters button{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin-top: 20px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: bold;
}
</style>