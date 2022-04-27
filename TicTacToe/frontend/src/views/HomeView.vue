<template>
  <div class="home">
    <GameComponent/>
    <GoogleMap/>
  </div>
</template>

<script>
// @ is an alias to /src
import GameComponent from '@/components/GameComponent.vue'
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'HomeView',
  components: {
    GameComponent,
    GoogleMap
  }
}
</script>
