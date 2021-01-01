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
    if (this.isEqual(this.array[this.guess], this.numToFind)) {
      return this.resultObject()
    } else if (this.isLesser(this.array[this.guess], this.numToFind)) {
      this.min = this.guess + 1
    } else if (this.isGreater(this.array[this.guess], this.numToFind)) {
      this.max = this.guess - 1
    } 
    return this.run()
  }

  resultObject() {
    return {
      num: this.array[this.guess],
      position: this.guess,
    }
  }

  isEqual(value1, value2) {
    return value1 === value2
  }

  isGreater(value1, value2) {
    return value1 > value2
  }

  isLesser(value1, value2) {
    return value1 < value2
  }

  calcGuess() {
    return Math.floor((this.min + this.max) / 2)
  }
}

module.exports = BinarySearch