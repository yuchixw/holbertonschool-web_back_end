const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", function () {
  it("should accept positive whole numbers and sum them", function () {
    assert.strictEqual(calculateNumber(4, 5), 9);
    assert.strictEqual(calculateNumber(0, 5), 5);
  });

  it("should accept all integers and sum them", function () {
    assert.strictEqual(calculateNumber(4, 5), 9);
    assert.strictEqual(calculateNumber(-4, 5), 1);
    assert.strictEqual(calculateNumber(4, -5), -1);
    assert.strictEqual(calculateNumber(0, 5), 5);
  });

  it("should accept real numbers, round  and sum them", function () {
    assert.strictEqual(calculateNumber(4.2, 5), 9);
    assert.strictEqual(calculateNumber(4.2, 5.2), 9);
    assert.strictEqual(calculateNumber(4.6, 5.2), 10);
    assert.strictEqual(calculateNumber(4.6, 5.7), 11);
    assert.strictEqual(calculateNumber(-4.2, 5), 1);
    assert.strictEqual(calculateNumber(4, -5.2), -1);
    assert.strictEqual(calculateNumber(-4.8, 5), 0);
    assert.strictEqual(calculateNumber(-4.8, 5.7), 1);
    assert.strictEqual(calculateNumber(-4.6, -5.2), -10);
  });
});
