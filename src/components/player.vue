<template>
  <div class="player row">
    <div class="col-12">
      <h1>{{player.name}}</h1>
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