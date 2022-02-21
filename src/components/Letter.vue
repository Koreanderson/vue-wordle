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
    showResult: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    letterClasses() {
      return {
        yellow: this.showResult && this.answerArray.includes(this.guessLetter),
        green: this.showResult && this.answerLetter === this.guessLetter,
      }
    },
  },
}
</script>

<style>
.letter {
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

</style>