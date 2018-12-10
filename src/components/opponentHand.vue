<template>
  <div class="opponentHand">
    <div v-for="card in opponentHand" class="opponentCard col-2">
      <div class="card" @click="setOpponentCard(card.id)">
        <div v-if="card.visible">
          <h5>{{card.name}}</h5>
          <img :src="card.img" style="height: 100px" />
          <p>Attack: {{card.attack}}</p>
          <p>Shield: {{card.defense}}</p>
          <p>Health: {{card.health}}</p>
        </div>
        <img v-else src="@/assets/img/gladiator.jpg">
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
    justify-content: space-around;
  }

  .opponentCard {
    display: flex;
    flex-direction: column;

  }
</style>