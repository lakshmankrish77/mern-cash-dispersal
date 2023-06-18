var assert = require('assert');
let chai = require ("chai");
let chaiHttp = require ("chai-http");

// chai.assert();
chai.use (chaiHttp);

describe("Get Currency from Dispenser", function () {
    describe("GET request to /api/atm", function () {
      it("GET request to /api/atm", function () {
        chai
          .request('http://localhost:5001')
          .get("/api/atm")
        //   .query({ input: "10L" }) // /api/convert?input=10L
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.CurrentBalance.TWO_DOLLARS, 5);
            // assert.equal(res.body.initUnit, "L");
            // assert.equal(res.body.returnNum, 2.64172);
            // assert.equal(res.body.returnUnit, "gal");
            // assert.equal(
            //   res.body.string,
            //   "10 liters converts to 2.64172 gallons"
            // );
          });
      });
    });
  });


  describe("Cash Deposit", function () {
    describe("POST request to /api/atm/deposit", function () {
      it("POST request to /api/atm/deposit", function () {
        chai
        .request('http://localhost:5001')
        .post('/api/atm/deposit/')        
        .send(  { "denomination": 100, "denom_count": 2 })
        //   .query({ input: "10L" }) // /api/convert?input=10L
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.CurrentBalance.HUNDRED_DOLLARS, 7);
            // assert.equal(res.body.initUnit, "L");
            // assert.equal(res.body.returnNum, 2.64172);
            // assert.equal(res.body.returnUnit, "gal");
            // assert.equal(
            //   res.body.string,
            //   "10 liters converts to 2.64172 gallons"
            // );
          });
      });
    });
  });

  describe("Cash Withdrawal", function () {
    describe("POST request to /api/atm/withdraw", function () {
      it("POST request to /api/atm/withdraw", function () {
        chai
        .request('http://localhost:5001')
        .post('/api/atm/withdraw/')        
        .send(  {
          "userEnteredAmount":110
        })
        //   .query({ input: "10L" }) // /api/convert?input=10L
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.CurrentBalance.HUNDRED_DOLLARS, 6);
            // assert.equal(res.body.initUnit, "L");
            // assert.equal(res.body.returnNum, 2.64172);
            // assert.equal(res.body.returnUnit, "gal");
            // assert.equal(
            //   res.body.string,
            //   "10 liters converts to 2.64172 gallons"
            // );
          });
      });
    });
  });