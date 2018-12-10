<template>
  <div class="opponent row">
    <div class="col-12">
      <h3 class="text">{{opponent.name}}</h3>
      <p class="text">Reserve: {{opponent.remainingCards}}</p>
      <opponentHand></opponentHand>
    </div>
  </div>
</template>

<script>
  import opponentHand from '@/components/opponentHand.vue'

  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      }
    },
    methods: {},
    components: {
      opponentHand
    }
  }

</script>

<style>
  .active {
    border: solid red
  }
</style>