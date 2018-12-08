<template>
  <div class="opponentHand">
    <div v-for="card in opponentHand" class="opponentCard col-2">
      <h5>{{card.name}}</h5>
      <img :src="card.img" style="height: 100px" />
      <p>Attack: {{card.attack}}</p>
      <p>Shield: {{card.defense}}</p>
      <p>Health: {{card.health}}</p>
      <button @click="setOpponentCard(card.id)">Prepare for Glory</button>
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
    methods: {
      setOpponentCard(cardId) {
        this.$store.dispatch("setOpponentCard", cardId)
      }
    }
  }

</script>

<style>
  .opponentHand {
    display: flex;
    border: solid red;
    justify-content: space-around;
  }

  .opponentCard {
    display: flex;
    background-color: lightblue;
    flex-direction: column;
    border: solid red;
  }
</style>