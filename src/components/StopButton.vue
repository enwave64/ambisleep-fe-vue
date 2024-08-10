<template>
  <div class="container" @click="click">
    <div class="stop">
      <span>STOP</span>
    </div>
  </div>
</template>

<script setup>
import { getJsonHttpsCall } from './ambisleep-rest'
import { getEnv } from '@/common/shared'
const click = async () => {
  const urlRest = getEnv('VITE_AMBISLEEP_REST_URL')
  console.log(`stop ${urlRest}`)

  const url = `${urlRest}/stop`
  console.log(`url? ${url}`)

  const response = await getJsonHttpsCall({ url })

  console.log(`response: ${JSON.stringify(response)}`)
}
</script>

<style scoped>
.stop {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  vertical-align: middle;

  span {
    font-size: 3rem;
  }
}

.container {
  background-color: rgba(114, 38, 38, 0.959);
  box-shadow: 5px 5px 5px rgb(206, 73, 12);
}
</style>
