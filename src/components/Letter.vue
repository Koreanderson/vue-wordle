<template>
<span class="letter" :class="letterClasses">
  {{ answerLetter }}
</span>
  
</template>

<script>
export default {
  name: "Letter",
  props: {
    answerArray: Array,
    answerLetter: String,
    guessLetter: String,
  },
  computed: {
    letterClasses() {
      return {
        yellow: this.answerArray.includes(this.guessLetter),
        green: this.answerLetter === this.guessLetter,
      }
    },
  },
}
</script>

<style>
.letter {
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  font-weight: 700;
  justify-content: center;
  width: 50px;
  height: 50px;
  text-transform: uppercase;
}

.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}

</style>