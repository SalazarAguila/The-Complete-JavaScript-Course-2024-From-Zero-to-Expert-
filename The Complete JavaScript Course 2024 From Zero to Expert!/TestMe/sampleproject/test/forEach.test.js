const assert = require("assert")
const {forEach} = require("../index")

let numbers
beforeEach( () => {
    numbers = [1,2,3]
})

it("ForEach function", () => {
    let sum = 0
    forEach(numbers, (value) => {
        sum += value
    })
    assert.strictEqual(sum,6,"Expected forEach to sum the array")
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
})

it("BeforeEach is ran each each time", () => {
    assert.strictEqual(numbers.length,3)
})