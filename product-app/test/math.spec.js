// BDD- Behaviour Driven Development

const assert = require('assert')

function add(a,b) {
    return a + b
}

describe("math test suite", () => {

    // useful to setup initial environment for test cases, setup db, table
    // called before running each test case
    beforeEach(() => {
        console.log("Math before each")
    })

    // useful to release resource, locks, uninitialize env
    // called after running each  test case
    afterEach( () => {
        console.log("Math after each")
    })

    // write test cases
   it("should add two positive numbers", () => {
       // test conditions
       // compare actual vs expected result
       //assert.equal(actual, expected)
       assert.equal(add(10, 20), 30)
   })

   it("should add two negative numbers", () => {
    // test conditions
    // compare actual vs expected result
    //assert.equal(actual, expected)
    assert.equal(add(-10, -20), -30)
})
})