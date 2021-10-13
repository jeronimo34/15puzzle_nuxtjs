<template lang="pug">
    div.gameboard
        piece(v-for="piece in pieces" 
        :key="piece.pos" 
        :number="piece.number" 
        :y="Math.floor(piece.pos/4)"
        :x="Math.floor(piece.pos%4)") 
</template>

<script>
  import Piece from '~/components/Piece.vue'
  export default {
    computed: {
        pieces(){
            return this.$store.state.game.pieces;
        }
    },
    components: {
      Piece
    }
  }

</script>

<style scoped>
  .gameboard{
    position: relative;
    width: 256px;
    height: 256px;
    margin: auto;
  }
</style>