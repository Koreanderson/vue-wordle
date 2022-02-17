<template>
  <div class="">
    <h1>Your Wordle:</h1>
    <div v-if="solved">
      <h2>Correct! The answer was <strong>{{ answer }}</strong>!</h2>
    </div>
    <div class="guess__container">
      <div class="previous-guesses">
        <previous-guess
          :key="index"
          v-for="(guess, index) in previousGuesses"
          :answer="answerLetterArray"
          :guess="guess">
        </previous-guess>
      </div>
      <h3>{{ currentGuess }}</h3>
      <div class="guess__input">
        <form name="guess" @submit.prevent="submitAnswer">
          <input ref="guessInput" v-model="currentGuess" type="text" maxLength="5">
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import randomWord from 'random-word-by-length';
import PreviousGuess from './PreviousGuess.vue';

export default {
  name: 'Wordle',
  components: {
    PreviousGuess,
  },
  data() {
    return {
      "currentGuess": "",
      "previousGuesses": [],
      "solved": false,
    }
  },
  computed: {
    answer() {
      let word = randomWord(5);
      while (word === undefined || word.length !== 5) {
        word = randomWord(5);
      }
      // return 'beans';
      return word;
    },
    answerLetterArray() {
      return this.answer.split('');
    },
    guessLetterArray() {
      return this.currentGuess.split('');
    },
  },
  methods: {
    submitAnswer() {
      this.previousGuesses.push(this.guessLetterArray);
      if (this.currentGuess === this.answer) {
        this.solved = true;
      } else {
        this.currentGuess = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
