<template>
  <div class="container-fluid gamePage">
    <!-- {{opponent}} -->
    <opponent></opponent>
    <br>
    <br>
    <br>
    <h3 class="text">Will Fight Against</h3>
    <button @click="fight({"playerId": setPC})>Fight</button>
    <br>
    <br>
    <br>
    <player></player>
  </div>
</template>

<script>
  import opponent from "@/components/opponent.vue"
  import player from '@/components/player.vue'
  export default {
    name: '',
    //mounted that sends the id from the route to the store which makes an http request to get the game with that id
    data() {
      return {

      }

    },
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
      fight(payload){

      }
    }
  }

</script>

<style>
  .gamePage{
    background-size: cover;
   background-image: url(https://i0.wp.com/www.italyswonders.com/wp-content/uploads/2014/07/vlcsnap-2014-07-17-15h32m39s153.jpg)
  }


</style>