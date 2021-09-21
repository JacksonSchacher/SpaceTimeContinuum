<template>
  <div class="card">
    <h3>
      {{ photo.date }}
    </h3>
    <img :src="photo.img" class="img-fluid" />
    <h3>
      {{ photo.title }}
    </h3>
    <p>
      {{ photo.description }}
    </p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      photo: computed(() => AppState.photo)
    }
  }
}
</script>

<style>

</style>
