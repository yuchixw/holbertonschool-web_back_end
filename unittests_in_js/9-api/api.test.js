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
});
