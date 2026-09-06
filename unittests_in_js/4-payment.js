const Utils = require("./utils");
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const utils = new Utils();
  const total = utils.calculateNumber("SUM", totalAmount, totalShipping);

  console.log(`The total is: ${total}`);

  return total;
}

module.exports = sendPaymentRequestToApi;
