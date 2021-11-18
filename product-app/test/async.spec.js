const assert = require('assert')

function add(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("setTimeout called")
            resolve(a * b)
        }, 1000)
    }) 
}


describe("async test suite", () => {
    // write test cases
    // for async tesiting, we can a callback to set completion of test case
   it("should add two positive numbers async", (done) => {
       add(10, 20).then((result) => {
        console.log("callback")    
        assert.equal(result, 30)
        setImmediate(done);

        //    done() // test case is completing now
       })
   })
})