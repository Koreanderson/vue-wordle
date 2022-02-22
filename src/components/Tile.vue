<template>
<span class="tile" :class="letterClasses">
  {{ answerLetter }}
</span>
  
</template>

<script>
export default {
  name: "Tile",
  props: {
    answerArray: Array,
    answerLetter: String,
    guessLetter: String,
    validated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    letterClasses() {
      return {
        yellow: this.validated && this.answerArray.includes(this.guessLetter),
        green: this.validated && this.answerLetter === this.guessLetter,
      }
    },
  },
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

</style>