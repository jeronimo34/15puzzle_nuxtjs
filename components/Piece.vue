<template lang="pug">
  .cell(@click="movePiece(x,y)" :style="{top:`${y*64}px`, left:`${x*64}px`, background:`${getBackGround(number)}`}") 
        span {{number}}
</template>

<script>
  export default {
    props: ['number','y', 'x'],
    methods: {
        onClick ({x, y}) {
            this.$store.commit('game/onClick', {x, y})
        },
        getBackGround(number){
            return number == 16 ? "lightyellow" : "lightblue";
        },
        movePiece (x, y) {
            console.log(x + " " + y);
            this.$store.commit('game/movePiece', {x, y})
        },
        hoge(){
            console.log(this);
            return true;
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
  }
</style>