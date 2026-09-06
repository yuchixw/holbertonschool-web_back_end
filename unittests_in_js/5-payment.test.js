const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestApi()", function () {
  beforeEach(function () {
    logSpy = sinon.spy(console, "log");
  });
  afterEach(function () {
    logSpy.restore();
  });

  it("console logs 120", function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(logSpy, "The total is: 120");
    sinon.assert.calledOnce(logSpy);
  });

  it("console logs 10", function () {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(logSpy, "The total is: 20");
    sinon.assert.calledOnce(logSpy);
  });
});
