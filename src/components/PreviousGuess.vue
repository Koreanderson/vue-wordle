<template>
<div class="">
  <letter
    :key="index" 
    v-for="(letter, index) in guess"
    :guess-letter="letter"
    :answer-letter="answer[index]"
    :answer-array="answer"
    v-text="letter">
  </letter>
</div>
  
</template>

<script>
import Letter from './Letter.vue';

export default {
  name: "PreviousGuess",
  props: {
    answer: Array,
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

</style>