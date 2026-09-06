const sinon = require("sinon");
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

    consoleSpy.restore();
  });

  it("Stub calculateNumber Method", function () {
    // Create stub
    const stub = sinon.stub(Utils.prototype, "calculateNumber");
    stub.withArgs("SUM", 100, 20).returns(10);

    sendPaymentRequestToApi(100, 20);

    // Test that stub method is called with correct args
    sinon.assert.calledWith(stub, "SUM", 100, 20);

    stub.restore();
  });

  it("console.log gets result from stub", function () {
    // Create stub
    const stub = sinon.stub(Utils.prototype, "calculateNumber");
    stub.withArgs("SUM", 100, 20).returns(10);

    // Create spy for console.log
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    // Spy that the console log returns correct msg
    sinon.assert.calledWith(consoleSpy, `The total is: 10`);

    consoleSpy.restore();
    stub.restore();
  });
});
