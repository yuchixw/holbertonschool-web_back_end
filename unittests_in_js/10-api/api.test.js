const { expect } = require("chai");
const request = require("request");

describe("Index page", function () {
  const API_URL = "http://localhost:7865";

  it("correct status code", function (done) {
    request.get(`${API_URL}/`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("correct result", function (done) {
    request.get(`${API_URL}/`, function (error, response, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("has valid content type", function (done) {
    request.get(`${API_URL}/`, function (error, response, body) {
      expect(response.headers["content-type"]).to.include("text/html");
      done();
    });
  });

  it("cart/:${int} returns correct status code", function (done) {
    request.get(
      `http://localhost:7865/cart/8`,
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it("cart/:${!int} returns correct status code", function (done) {
    request.get(
      `http://localhost:7865/cart/yelp`,
      function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }
    );
  });

  it("/available_payments returns correct value", function (done) {
    request.get(
      `http://localhost:7865/available_payments`,
      function (error, response, body) {
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });

  it("/login returns correct value", function (done) {
    request.post(
      `http://localhost:7865/login`,
      { json: { userName: "Betty" } },
      function (error, response, body) {
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });
});
