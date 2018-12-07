<template>
  <div class="opponentHand">
    <div v-for="card in opponentHand">
      <h2>name: {{card.name}}</h2>
    </div>


  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      opponentHand() {
        return this.$store.state.game.opponent.hand
      }
    },
    methods: {}
  }

</script>

<style>


</style>