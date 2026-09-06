const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber()", function () {
  it("should round numbers then add them", function () {
    assert.strictEqual(calculateNumber("SUM", 4, 5), 9);
    assert.strictEqual(calculateNumber("SUM", -4, 5), 1);
    assert.strictEqual(calculateNumber("SUM", -4, -5), -9);
    assert.strictEqual(calculateNumber("SUM", -4, 0), -4);
    assert.strictEqual(calculateNumber("SUM", 0, 5.6), 6);
    assert.strictEqual(calculateNumber("SUM", 4.8, 5.6), 11);
    assert.strictEqual(calculateNumber("SUM", 4.2, 5.6), 10);
    assert.strictEqual(calculateNumber("SUM", -4.8, 5.6), 1);
    assert.strictEqual(calculateNumber("SUM", -4.2, 5.6), 2);
    assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
    assert.strictEqual(calculateNumber("SUM", -4.7, 0.3), -5);
  });

  it("should round numbers then subtract them", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 4, 5), -1);
    assert.strictEqual(calculateNumber("SUBTRACT", -4, 5), -9);
    assert.strictEqual(calculateNumber("SUBTRACT", -4, -5), 1);
    assert.strictEqual(calculateNumber("SUBTRACT", -4, 0), -4);
    assert.strictEqual(calculateNumber("SUBTRACT", 0, 5.6), -6);
    assert.strictEqual(calculateNumber("SUBTRACT", 4.8, 5.6), -1);
    assert.strictEqual(calculateNumber("SUBTRACT", 4.2, 5.6), -2);
    assert.strictEqual(calculateNumber("SUBTRACT", -4.8, 5.6), -11);
    assert.strictEqual(calculateNumber("SUBTRACT", -4.2, 5.6), -10);
    assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
    assert.strictEqual(calculateNumber("SUBTRACT", -4.7, 0.3), -5);
  });

  it("should round numbers then divide them", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 10, 5), 2);
    assert.strictEqual(calculateNumber("DIVIDE", 10, -5), -2);
    assert.strictEqual(calculateNumber("DIVIDE", -10, -5), 2);
    assert.strictEqual(calculateNumber("DIVIDE", 11.7, 6), 2);
    assert.strictEqual(calculateNumber("DIVIDE", 10.2, 5), 2);
    assert.strictEqual(calculateNumber("DIVIDE", 15.8, 4.2), 4);
    assert.strictEqual(calculateNumber("DIVIDE", 15.8, -4.2), -4);
    assert.strictEqual(calculateNumber("DIVIDE", -15.8, -4.2), 4);
    assert.strictEqual(calculateNumber("DIVIDE", 15.8, 0), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", 15.8, 0.3), "Error");
  });
});
