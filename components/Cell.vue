<template lang="pug">
  .cell(:style="{background:`yellow`}")
    slot
</template>

<style scoped>
  .cell{
    height: 32px;
    width: 32px;
    border: ridge 4px #fff;
    border-radius: 2px;
  }
</style>