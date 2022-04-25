<template>
  <div class="home">
    <GameComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import GameComponent from '@/components/GameComponent.vue'

export default {
  name: 'HomeView',
  components: {
    GameComponent
  }
}
</script>
