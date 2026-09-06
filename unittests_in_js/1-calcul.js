function calculateNumber(type, a, b) {
  let result = 0;
  if (type === "SUM") {
    result = Math.round(a) + Math.round(b);
  } else if (type === "SUBTRACT") {
    result = Math.round(a) - Math.round(b);
  } else if (type === "DIVIDE") {
    if (b === 0) {
      return "Error";
    }
    result = Math.round(a) / Math.round(b);
  }

  return result == Infinity ? "Error" : result;
}
module.exports = calculateNumber;
