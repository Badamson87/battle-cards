<template>
  <div class="container-fluid gamePage">
    <!-- {{opponent}} -->
    <opponent></opponent>
    <div v-if="opponent.hand == 0">
      <h3 class="text text-success">You have won your freedom</h3>
    </div>
    <br>
    <h3 class="text">Are you not entertained?</h3>
    <button @click="fight()" class="btn-danger">Dual</button>
    <br>
    <div v-if="player.hand == 0 && opponent.hand == 0">
      <h3 class="text text-danger">No one earns their freedom</h3>
    </div>
    <div v-if="player.hand == 0">
      <h3 class="text text-danger">Your have lost the battle</h3>
    </div>
    <player></player>
  </div>
</template>

<script>
  import opponent from "@/components/opponent.vue"
  import player from '@/components/player.vue'
  export default {
    name: '',
    data() {
      return {

      }

    },
    //mounted that sends the id from the route to the store which makes an http request to get the game with that id
    mounted() {
      this.$store.dispatch("getGame", this.$route.params.id)
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      opponent() {
        return this.$store.state.game.opponent
      },
      player() {
        return this.$store.state.game.player
      },
    },
    components: {
      opponent,
      player
    },
    methods: {
      fight() {
        let gameDetails = {
          gameId: this.$route.params.id,
          cards: {
            "playerCardId": this.$store.state.game.player.cardId,
            "opponentCardId": this.$store.state.game.opponent.cardId
          }
        }
        this.$store.dispatch('fight', gameDetails)
        console.log(this.$store.state.game.player.cardId)
        console.log(this.$store.state.game.opponent.cardId)

      }
    }
  }

</script>

<style>
  .gamePage {
    background-size: cover;
    background-image: url('https://i0.wp.com/www.italyswonders.com/wp-content/uploads/2014/07/vlcsnap-2014-07-17-15h32m39s153.jpg')
  }

  .text {
    color: white;
    text-shadow: 5px 5px 15px black
  }
</style>