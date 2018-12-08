<template>
  <div class="container-fluid">
    <div class="home row">
      <div class="col-12">
        <h1 class="m-5">The Arena</h1>
        <button @click="startGame">Start The Battle</button>
      </div>
      <div>
        <div class="col-12">

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'home',
    components: {

    },
    methods: {
      startGame() {
        this.$store.dispatch('startGame', this.newGame)
      }
    }
  }
</script>

<style>
.home{
  background-size: cover;
  height:90vh;
  background-image: url("https://images7.alphacoders.com/674/thumb-1920-674297.jpg")
}

</style>