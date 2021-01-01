class BinarySearch {

  constructor(array = [], numToFind = 0) {
    this.array = array
    this.min = 0
    this.max = array.length - 1
    this.numToFind = numToFind
  }

  run() {
    this.guess = this.calcGuess()
    if (this.min >= this.max) {
      return undefined
    }
    if (this.array[this.guess] === this.numToFind) {
      return {
        num: this.array[this.guess],
        position: this.guess,
      }
    } else if (this.array[this.guess] < this.numToFind) {
      this.min = this.guess + 1
    } else if (this.array[this.guess] > this.numToFind) {
      this.max = this.guess - 1
    } 
    return this.run()
  }

  calcGuess() {
    return Math.floor((this.min + this.max) / 2)
  }
}

module.exports = BinarySearch