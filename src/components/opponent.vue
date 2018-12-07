<template>
  <div class="opponent">
    <h1>this is the opponent object</h1>

    <opponentHand></opponentHand>

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


</style>