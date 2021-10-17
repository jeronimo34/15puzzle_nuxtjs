<template lang="pug">
  .cell(v-if="number!==16" @click="movePiece(x,y)" :style="{top:`${y*64}px`, left:`${x*64}px`}")
    span {{number}}
  .blank(v-else @click="movePiece(x,y)" :style="{top:`${y*64}px`, left:`${x*64}px`}")
    span {{number}}
</template>

<script>
  export default {
    props: ['number','y', 'x'],
    methods: {
        movePiece (x, y) {
            this.$store.commit('game/movePiece', {x, y})
        }
    }
  }

</script>
<style scoped>
  .cell{
    height: 64px;
    width: 64px;
    border: ridge 1px #fff;
    position: absolute;
    background: lightblue;
    cursor: pointer;
    color:#666666;
  }
  .cell:hover{
    opacity:0.3;
    color:white;
  }
  .blank{
    height: 64px;
    width: 64px;
    border: ridge 1px #fff;
    position: absolute;
    background: lightyellow;
    cursor: default;
    color:#666666;
  }
  span{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
</style>