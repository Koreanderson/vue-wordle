Array.prototype.equals = (array) => {
  if (this.length !== array.length ) {
    return false
  }
  for (var i = 0; i < this.length, i++;) {
    if (this[i] !== array[i]) {
      return false
    }
  }
  return true
}