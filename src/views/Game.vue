<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- {{opponent.hand}} -->
        <opponent></opponent>
      </div>
    </div>
  </div>
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