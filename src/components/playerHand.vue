<template>
  <div class="playerHand">
    <div v-for="card in playerHand" class="playerCard col-2">
      <h5>{{card.name}}</h5>
      <img :src="card.img" style='height: 100px'>
      <p>Attack: {{card.attack}}</p>
      <p>Shield {{card.defense}}</p>
      <p>Health {{card.health}}</p>
      <button @click="setPlayerCard(card.id)">Prepare for Glory</button>
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
      playerHand() {
        return this.$store.state.game.player.hand
      }
    },
    methods: {
      setPlayerCard(cardId){
        this.$store.dispatch("setPlayerCard", cardId)
      }
    }
  }

</script>

<style>
  .playerHand {
    display: flex;
    border: solid red;
    justify-content: space-around;
  }

  .playerCard {
    display: flex;
    flex-direction: column;
    background-color: lightgreen;
    border: solid red
  }
</style>