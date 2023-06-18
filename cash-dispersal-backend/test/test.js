let server = require("../server.js");
let chai = require ("chai");
let chaiHttp = require ("chai-http");

chai.should();
chai.use (chaiHttp);
var expect = chai.expect;
describe('Cash dispersal APIs', function () {
  describe('test GET route /api/atm/', function (done) {
    chai.request('http://localhost:5001')
    .get("/api/atm")
    .end((err,response) => {
      response.should.have.status(200);
      // response.body.should.not.have.property('error');
      // response.body.length.should.not.be.eq(0);
     
    });
    // done()
  })
});

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// describe('Array01', function () {
//     describe('#indexOf()', function () {
//       it('should return 3 when the index is 2', function () {
//         assert.equal([1, 2, 3].indexOf(2), 1);
//       });
//     });
//   });
