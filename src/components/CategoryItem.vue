<template>
    <div :style="styles">
      <div class="slick">
        <picture>
            <img :src="'../../' + categoryImage" alt="Image" />
         
        </picture>
      </div>
      <p>{{ categoryName }}</p>
    </div>
  </template>
  
  <script setup>
  import {computed} from "vue";
  const props = defineProps(['seleccionada', 'categoryName', 'categoryImage']);

const styles = computed(() => ({
  background: props.seleccionada ? 'yellow' : 'transparent'
}));
  </script>
  
  <style scoped>

  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
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
  