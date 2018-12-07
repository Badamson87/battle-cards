<template>
  <div class="container-fluid">
    <!-- {{opponent}} -->
    <opponent></opponent>
  </div>
</template>

<script>
  import opponent from "@/components/opponent.vue"
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
      }
    },
    components: {
      opponent
    },
    methods: {}
  }

</script>

<style>


</style>