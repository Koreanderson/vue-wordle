<template>
<button 
  class="letter" 
  :class="letterClasses"
  @click="handleKeydown(letter)"
>
  {{ letter }}
</button>
  
</template>

<script>
export default {
  name: "Tile",
  props: {
    letter: String,
    status: String,
  },
  computed: {
    letterClasses() {
      return {
        yellow: this.status === "present",
        green: this.status === "correct",
      }
    },
  },
  methods: {
    handleKeydown(letter) {
      this.$emit('keydown', letter);
    },
  }
}
</script>

<style>
.letter {
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