<template>
  <div class="playerHand">
    <div v-for="card in playerHand" class="playerCard col-2">
      <div class="card" :class="{'border-primary': player == card.id}" @click="setPlayerCard(card.id)">
        <h5>{{card.name}}</h5>
        <img :src="card.img" style='height: 100px'>
        <p>Attack: {{card.attack}}</p>
        <p>Shield {{card.defense}}</p>
        <p>Health {{card.health}}</p>
      </div>
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
      },
      player() {
        return this.$store.state.game.player.cardId
      }
    },
    methods: {
      setPlayerCard(cardId) {
        this.$store.dispatch("setPlayerCard", cardId)
      }
    }
  }

</script>

<style>
  .playerHand {
    display: flex;
    justify-content: space-around;
  }

  .playerCard {
    display: flex;
    flex-direction: column
  }
</style>