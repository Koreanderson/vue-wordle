<template>
  <div>
    <div v-if="solved">
      <h2>Correct! The answer was <strong>{{ answer }}</strong>!</h2>
    </div>
    <div class="guess__container">
      <div class="previous-guesses">
        <entry
          :key="index"
          v-for="(guess, index) in previousGuesses"
          :active="index === currentAttempt - 1"
          :answer="answerLetterArray"
          :validated="index !== currentAttempt - 1"
          :guess="index === currentAttempt - 1 ? currentGuess : guess">
        </entry>
      </div>
      <div class="guess__input">
        <form name="guess" @submit.prevent="submitAnswer">
          <!-- <input ref="guessInput" v-model="currentGuess" type="text" maxLength="5"> -->
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '../utils.js'
import randomWord from 'random-word-by-length';
import Entry from './Entry.vue';

export default {
  name: 'Wordle',
  props: {
    enableDuplicateGuesses: Boolean,
  },
  components: {
    Entry,
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if(/^[A-Za-z]+$/.test(e.key)) {
        this.onKeyPress(e.key);
      } else e.preventDefault();
    });
  },
  data() {
    return {
      "currentGuess": [],
      "currentAttempt": 1,
      "previousGuesses": [[],[],[],[],[],[]],
      "solved": false,
      "gameover": false,
    }
  },
  computed: {
    answer() {
      let word = randomWord(5);
      while (word === undefined || word.length !== 5) {
        word = randomWord(5);
      }
      return 'beans';
      // return word;
    },
    answerLetterArray() {
      return this.answer.split('');
    },
    currentGuessString() {
      return this.currentGuess.join('');
    },
    gameDisabled() {
      return this.gameover || this.solved
    },
    guessIsDuplicate() {
      for (const guess of this.previousGuesses) {
        if (this.currentGuess.join('') === guess.join('')) {
          return true
        }
      }

      return false
    },
  },
  methods: {
    onKeyPress(key) {
      if (!this.gamover) {
        if (key === "Enter") {
          this.submitAnswer();
        }

        if (key === "Backspace") {
          this.currentGuess.pop();
        }

        if (key.length === 1 && this.currentGuess.length < 5) {
          this.currentGuess.push(key);
        }
      }
    },
    submitAnswer() {
      if (this.enableDuplicateGuesses && this.guessIsDuplicate) {
        return false
      }

      if (this.currentGuess.length === 5 && !this.previousGuesses.includes(this.currentGuess)) {
        this.previousGuesses[this.currentAttempt - 1] = (this.currentGuess);
        this.currentGuess = [];

        if (this.currentGuess === this.answer) {
          this.solved = true;
        }

        if (this.currentAttempt < 6) {
          this.currentAttempt ++;
        } else {
          this.gameover = true;
        }

      } else {
        // Show Error
        return false
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.previous-guesses {
  display: grid;
  gap: 5px;
}
</style>
