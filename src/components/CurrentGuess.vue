<template>
<div class="guess-row">
  <letter
    :key="index" 
    v-for="(letter, index) in guess"
    :guess-letter="letter"
    v-text="letter">
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