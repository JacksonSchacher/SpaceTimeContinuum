<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-1">
        <NASAPhoto/>
    </div>
    <form @submit.prevent="findPhoto">
    <label for="date"></label>
        <input v-model="date" type="date" id="date">
        <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { nasaService } from '../services/NASAService'
import Pop from '../utils/Pop'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  setup(){
    const date = ref('')

    return {
      date,
      async findPhoto() {
        try {
          await nasaService.findSpacePic(date.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      photo: computed(() => AppState.photo)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      width: 200px;
    }
  }
}
</style>
