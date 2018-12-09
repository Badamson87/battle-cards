<template>
  <div class="player row">
    <div class="col-12">
        <p class="text">Reserve: {{player.remainingCards}}</p>
      <h3 class="text">Gladiator</h3>
      <playerHand></playerHand>
    </div>

  </div>
</template>

<script>
  import playerHand from '@/components/playerHand.vue'
  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      player() {
        return this.$store.state.game.player
      }
    },
    methods: {},
    components: {
      playerHand

    }
  }

</script>

<style>


</style>