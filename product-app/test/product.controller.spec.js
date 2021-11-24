const sinon = require('sinon')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
chai.should()

const { getProduct } = require('../app/controllers/product.controller')
const productService = require('../app/services/product.service')



// unit testing

// Scope, what iam really testing
//     controller, should be tested? Yes
//     should I test my db? No
//      should i test my service? no
//      should i test my model ? No
// non scope items can be faked, spied, mock/stub

describe("product api spec", () => {
    beforeEach( () => {
      
    })

    afterEach( () => {
        // revert back spy/stub on other objects to original state
        sinon.restore()
    })

    it("create product with success ", async  () => {
        sinon.stub(productService, "getProduct").returns(Promise.resolve({_id: '1234567890', name: 'my stub name'}))

        const res = {
            json: sinon.spy(),
            send: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy() }) // to spy res.status(500).end()
        };


        const req = { params: {id: '1234567890'} }
        await getProduct(req, res)
        expect(res.json.callCount).to.eq(1)

        sinon.assert.calledWith(res.json,  {_id: '1234567890', name: 'my stub name'});
    })


    
    it("create product with not found ", async  () => {
        sinon.stub(productService, "getProduct").returns(Promise.resolve(null))

        const jsonSpy = sinon.spy()
        const res = {
            json: jsonSpy ,
            send: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy(), json: jsonSpy }) // to spy res.status(500).end()
        };

        const req = { params: {id: '1111111111'} }
        await getProduct(req, res)

        expect(res.status.callCount).to.eq(1)
        expect(res.json.callCount).to.eq(1)
        sinon.assert.calledWith(res.status, 404)

        sinon.assert.calledWith(res.json,  { errorCode: 404,
            message: 'product not found'});
    })
    it("create product with fail ", async  () => {
        sinon.stub(productService, "getProduct").returns(Promise.reject({errorCode: 5000, message: 'product already exist'}))

        const jsonSpy = sinon.spy()
        const res = {
            json: jsonSpy ,
            send: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy(), json: jsonSpy }) // to spy res.status(500).end()
        };


        const req = { params: {id: '1234567890'} }
        await getProduct(req, res)
        expect(res.status.callCount).to.eq(1)

        sinon.assert.calledWith(res.status,  500);

        expect(res.json.callCount).to.eq(1)

        sinon.assert.calledWith(res.json,  {
            errorCode: 500,
            message: 'product some error'
        });
    })
})
