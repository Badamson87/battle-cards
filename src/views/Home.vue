<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>The Arena</h1>
      </div>
      <div>
        <button @click="startGame">Start The Battle</button>
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