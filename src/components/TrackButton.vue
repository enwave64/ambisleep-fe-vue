<template>
  <div class="container" @click="click">
    <img :src="getImageUrl()">
  </div>
</template>

<script setup>
import { getJsonHttpsCall } from './ambisleep-rest';
const props = defineProps({
  imagePath: { type: String, required: true },
})

const click = () => {
  console.log('click')
}

const getImageUrl = () => {
  return new URL(`${props.imagePath}`, import.meta.url).href
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid grey;
  margin: 1rem;
  height: 30vh;
  width: 95vw;
  flex-grow: 1;
}

img {
  border-radius: 5px;
  /* border: 1px solid grey; */
  margin: 1rem;
  padding: 1rem;
}

@media (min-width: 1024px) {
  .container {
    height: 95vh;
    width: 31vw;
  }

}
</style>
