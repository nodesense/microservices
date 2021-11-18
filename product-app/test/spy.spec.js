const sinon = require('sinon')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect

chai.should()

describe("sinon mock test suite", () => {
 
    const dbService = {
        save: (product) => {
            console.log("Inserting product into REAL DB", product)
        },
    };

    const webController = {
        saveData: function(req, res) {
           dbService.save(req.body)
        }
    }
 

    beforeEach(() => {
         sinon.spy(dbService, "save") // create a wrapper function for save as spy
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
   it("should create record in db", () => {
  
    webController.saveData({body: { name: 'iphone'}}, {})
      expect(dbService.save.callCount).to.eq(1)
      expect(dbService.save.args[0][0]).to.eql({ name: 'iphone'})
  //  assert.equals(fake(), "baz"); // behaviour is the same
   })

})