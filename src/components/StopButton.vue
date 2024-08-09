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
  background-color: red;
}

@media (min-width: 1024px) {
  .container {
    height: 95vh;
    width: 31vw;
  }
}
</style>
