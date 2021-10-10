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
            console.log(this.$store.state.game.pieces);
            return this.$store.state.game.pieces;
        }
    },
    components: {
      Piece
    },
    methods: {
        onClick ({x, y}) {
            this.$store.commit('game/onClick', {x, y})
        },
        hoge(piece){
            console.log(piece);
            return true;
        }
    }
  }

</script>

<style scoped>
  .tr {
    display: table;
  }
  .td {
    display: table-cell;
  }
  .gameboard{
    position: relative;
    width: 256px;
    height: 256px;
    margin: auto;
  }
</style>