const sinon = require('sinon')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect

const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

// describe("hello http test", () => {
//     it("hello api ", () => {
//         chai.request(app)
//         .get('/hello')
//         .end(function (err, res) {
//             expect(err).to.be.null;
//             expect(res).to.have.status(200);
//             expect(res.body).eql({result: true});
//          });
//     })
// })
