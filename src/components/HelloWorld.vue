<template>
  <div class="">
    <h1>Your Wordle:</h1>
    <h2>{{ randomWord }}</h2>
    <div class="guess-container">
      <input type="text" maxLength="1">
      <input type="text" maxLength="1">
      <input type="text" maxLength="1">
      <input type="text" maxLength="1">
      <input type="text" maxLength="1">
    </div>
  </div>
</template>

<script>

import randomWord from 'random-word-by-length';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    console.log(randomWord(5));
    console.log('test');
  },
  computed: {
    randomWord() {
      let word = randomWord(5);
      while (word === undefined || word.length !== 5) {
        word = randomWord(5);
      }
      return word;
    },
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
