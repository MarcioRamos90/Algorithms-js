const BinarySearch = require("./binarySearch.js")

describe("binarySearch", () => {
  it("Should return right result", () => {
    const array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const binarySearch = new BinarySearch(array, 67)

    expect(binarySearch.run()).toEqual({
      num: 67,
      position: 18
    })
  })
})