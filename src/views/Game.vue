<template>
  <div class="container-fluid">
    <!-- {{opponent}} -->
    <opponent></opponent>
    <br>
    <br>
    <br>
    <h3>Will Fight Against</h3>
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
    methods: {}
  }

</script>

<style>


</style>