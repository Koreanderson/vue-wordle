<template>
  <div class="keyboard">
    <div class="row">
      <letter
        v-for="letter in firstRowLetters"
        :key="letter"
        :letter="letter"
      ></letter>
    </div>
    <div class="row">
      <letter
        v-for="letter in secondRowLetters"
        :key="letter"
        :letter="letter"
      ></letter>
    </div>
    <div class="row">
      <button class="key" @click="$emit('submit')">Enter</button>
      <letter
        v-for="letter in thirdRowLetters"
        :key="letter"
        :letter="letter"
      ></letter>
      <button class="key">Delete</button>
    </div>
  </div>
</template>

<script>
import Letter from './Letter.vue'

export default {
  name: "Keyboard",
  props: {
    answerArray: Array,
    previousGuesses: Array,
    validated: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Letter,
  },
  data() {
    return {
      firstRowLetters: ["q","w","e","r","t","y","u","i","o","p"],
      secondRowLetters: ["a","s","d","f","g","h","j","k","l"],
      thirdRowLetters: ["z","x","c","v","b","n","m"],
    }
  },
  computed: {},
}
</script>

<style>
  .tile {
    align-items: center;
    border: 2px solid #d3d6da;
    box-sizing: border-box;
    display: inline-flex;
    font-size: 24px;
    font-weight: 700;
    justify-content: center;
    width: 50px;
    height: 50px;
    text-transform: uppercase;
  }

  .yellow {
    border-width: 0;
    background-color: #c9b458;
    color: #FFFFFF;
  }

  .green {
    border-width: 0;
    background-color: #6aaa64;
    color: #FFFFFF;
  }

  .keyboard button {
    align-items: center;
    background-color: #d3d6da;
    border-width: 0;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    height: 50px;
    text-transform: uppercase;
  }
</style>
