<template>
<div class="guess-row">
  <letter
    :key="index" 
    v-for="(index) in 5"
    :guess-letter="guess[index - 1]"
    v-text="guess[index - 1]">
  </letter>
</div>
  
</template>

<script>
import Letter from './Letter.vue';

export default {
  name: "CurrentGuess",
  props: {
    guess: Array,
  },
  components: {
    Letter,
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