// BDD- Behaviour Driven Development

const chai = require('chai')

const assert = chai.assert
const expect = chai.expect

chai.should()


function add(a,b) {
    return a + b
}

describe("chai math test suite", () => {
    // write test cases
   it("should add two positive numbers", () => {
       // test conditions
       // compare actual vs expected result
       //assert.equal(actual, expected)
       assert.equal(add(10, 20), 30)
       expect(add(10, 20)).to.eq(30)
       expect(add(10, 20)).to.greaterThan(29)
       expect(add(10, 20)).to.lessThan(31)
   })

   it("should add two negative numbers", () => {
    // test conditions
    // compare actual vs expected result
    //assert.equal(actual, expected)
    assert.equal(add(-10, -20), -30)
})
})