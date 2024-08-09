<template>
  <div class="container" @click="click">
    <img :src="getImageUrl()">
  </div>
</template>

<script setup>
import { getJsonHttpsCall } from './ambisleep-rest'
import { getEnv } from '@/common/shared'
const props = defineProps({
  imagePath: { type: String, required: true },
})

const click = async () => {
  const urlRest = getEnv('VITE_AMBISLEEP_REST_URL')
  console.log(`click ${urlRest}`)

  const track = 2
  const queryParam = new URLSearchParams({ track })

  const url = `${urlRest}/play?${queryParam.toString()}`
  console.log(`url? ${url}`)

  const response = await getJsonHttpsCall({ url })

  console.log(`response: ${JSON.stringify(response)}`)
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
  margin: 0.3rem 1rem;
  height: 28vh;
  width: 95vw;
  flex-grow: 1;
}

img {
  border-radius: 5px;
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
