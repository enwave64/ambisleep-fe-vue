<template>
  <main>
    <div class="buttons">
      <TrackButton :image-path="image1"></TrackButton>
      <TrackButton :image-path="image2"></TrackButton>
      <StopButton image-path=""></StopButton>
    </div>
  </main>
</template>

<script setup>
import TrackButton from './components/TrackButton.vue'
import StopButton from './components/StopButton.vue'

const image1 = '../assets/rainsounds.png'
const image2 = '../assets/relaxingwaterfalls.png'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.buttons {
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .buttons {
    flex-direction: row;
  }
}
</style>
