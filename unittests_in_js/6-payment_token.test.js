const getPaymentTokenFromAPI = require("./6-payment_token");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function () {
  it("returns object", function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({
          data: "Successful response from the API",
        });
        done();
      })
      .catch(done);
  });
});
