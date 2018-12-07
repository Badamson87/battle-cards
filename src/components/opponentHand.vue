<template>
  <div class="opponentHand">
    <div v-for="card in opponentHand" class="card col-2">
      <h5>{{card.name}}</h5>
      <img :src="card.img" style="height: 150px" />
      <p>Attack: {{card.attack}}</p>
      <p>Shield: {{card.defense}}</p>
      <p>Health: {{card.health}}</p>
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
  .card {
    display: flex;
    background-color: lightblue;
    flex-direction: column;
    border: solid red;
  }

  .opponentHand {
    border: solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>