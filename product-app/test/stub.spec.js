const sinon = require('sinon')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect

chai.should()

describe("stub mock test suite", () => {
 
    const add = sinon.stub()
    add.withArgs(10, 30).returns(40) // is a stub for add function without logic

    beforeEach(() => {
         // create a wrapper function for save as spy
    })

    // wrap existing method without changing its behaviour
    // 
 
    // useful to release resource, locks, uninitialize env
    // called after running each  test case
    afterEach( () => {
         // releases fakes, mocks, spies setup before
         sinon.restore()
    })

    // write test cases
   it("should work like add ", () => {
        expect(add(10, 30)).to.eq(40)
  //  assert.equals(fake(), "baz"); // behaviour is the same
   })

})