const sinon = require("sinon");
const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment.js");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("calculateNumber is called once", function () {
    // Spy on calculateNumber method and console log
    const spy = sinon.spy(Utils.prototype, "calculateNumber");

    // Call sendPayment function
    sendPaymentRequestToApi(100, 20);

    // Check that the method is called once with correct args
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, "SUM", 100, 20);

    spy.restore();
  });

  it("console.log gets result from CalculateNumber", function () {
    const utils = new Utils();

    // Spy on console log
    const consoleSpy = sinon.spy(console, "log");

    // Call send Payment function
    sendPaymentRequestToApi(100, 20);

    // Check that console log returns correct message
    sinon.assert.calledWith(consoleSpy, "The total is: 120");

    consoleSpy.restore;
  });
});
