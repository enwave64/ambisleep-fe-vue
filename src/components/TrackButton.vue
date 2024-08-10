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
  trackNumber: { type: Number, required: true },
})

const click = async () => {
  const urlRest = getEnv('VITE_AMBISLEEP_REST_URL')
  console.log(`click ${urlRest}`)

  const queryParam = new URLSearchParams({ track: props.trackNumber })

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
img {
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
}
</style>
