<script setup>
import CategoryItem from "@/components/CategoryItem.vue";
import { ref } from "vue";

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps(["categories", "categoryImages",]);
const index = ref(-1);

const seleccionarAleatorio = () => {
  index.value = -1;
let i = 0;
const interval = setInterval(() => {
  index.value = Math.floor(Math.random() * props.categories.length);
  i++;
  if (i >= 30) {
    clearInterval(interval); 
    openSelectedCategory(index.value);
  }
}, 100);


 
};


const seleccionar = (itemIndex) => {
  return itemIndex === index.value;
};


const openSelectedCategory = (indice) => {

  setTimeout(() => {
    
  const category=props.categories[indice];
  router.push({
    name: "categoryView", 
    params: {
      category:category,
    },
  });
    
  }, 1000);

}

</script>

<template>
  <div class="Carousel">
    <h2>Categories</h2>
    <div class="slick-list" id="slick-list">
      <div class="slick-track" id="track">
        <CategoryItem
          v-for="(category, itemIndex) in categories"
          :key="itemIndex"
          :seleccionada="seleccionar(itemIndex)"
          :categoryName="category"
          :categoryImage="categoryImages[itemIndex]"
        ></CategoryItem>
      </div>
    </div>
  </div>
  <button @click="seleccionarAleatorio()">ROLL</button>
</template>

<style scoped>
.Carousel {
  width: 100%;
}
.Carousel h2 {
  font-size: 26px;
  line-height: 38px;
  opacity: 0.9;
  text-transform: uppercase;
  text-align: center;
}

/* images */

.slick-list {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 60vh;
  margin: 0px auto;
  max-width: 90vw;
  overflow: hidden;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: 0.5s ease-in-out;
}

button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.2);
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
button:hover {
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
