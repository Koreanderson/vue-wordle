<template>
<div class="guess-row">
  <tile
    :key="index - 1" 
    v-for="index in 5"
    :guess-letter="guess[index-1]"
    :answer-letter="answer[index - 1]"
    :answer-array="answer"
    :validated="validated"
    v-text="guess[index-1]">
  </tile>
</div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  name: "Entry",
  props: {
    active: Boolean,
    answer: Array,
    guess: Array,
    validated: Boolean,
  },
  components: {
    Tile,
  },
  computed: {

  },
}
</script>

<style>
  .guess-row {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    gap: 5px;
    justify-content: center;
  }
</style>