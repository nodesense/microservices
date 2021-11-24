require("dotenv").config({path: '.env.test'}) 
const sinon = require('sinon')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
chai.should()

const chaiHttp = require('chai-http');
const app = require('../app');
const connectMongo = require("../app/config/connectMongo")
const Product = require("../app/models/Product")

chai.use(chaiHttp);

console.log('mongo url ', process.env.MONGO_URI)



//integration test
// a database
// stage data
// clean up stage data
describe("product api spec", () => {
     
    beforeEach(async () => {
        console.log("connect mongo")

        return await connectMongo()
        //console.log('connected to db', process.env.MONGO_URI)
        //done()
    })
 
    afterEach( () => {
        console.log("removing all test data")
        Product.deleteMany({})
    })

    it("create product ", () => {
        chai.request(app)
        .post('/products')
        .send({name: 'sample product', brand:'abc'})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            console.log("body", res.body)
            expect(res.body.name).eql('sample product');
            expect(res.body.brand).eql('abc');
            res.body.should.have.property("_id")

            chai.request(app)
            .get('/products/' + res.body._id)
            .end(function (err, res) {
                expect(res.body.name).eql('sample product');
                expect(res.body.brand).eql('abc');
                res.body.should.have.property("_id")
                expect(res.body._id).eql(res.body._id);
               
             })
         });
    })
})
