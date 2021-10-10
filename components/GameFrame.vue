<template lang="pug">
    div
        game-board

        .clearArea
            p(v-if="$store.state.game.isClear") クリア！
            button(v-if="$store.state.game.isClear" v-on:click="resetGame()") リトライ
</template>

<script>
  import GameBoard from '~/components/GameBoard.vue'
  export default {
    components: {
      GameBoard
    },
    methods: {
        resetGame(){
            this.$store.commit('game/resetGame')
        }
    }
  }
</script>

<style scoped>
  .clearArea{
    text-align: center;
  }
  .clearArea p {
      margin:10px;
  }
  .clearArea button {
      margin:10px;
  }
  
</style>