const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect;

describe("calculateNumber()", function () {
  it("should round numbers then add them", function () {
    expect(calculateNumber("SUM", 4, 5)).to.equal(9);
    expect(calculateNumber("SUM", -4, 5)).to.equal(1);
    expect(calculateNumber("SUM", -4, -5)).to.equal(-9);
    expect(calculateNumber("SUM", -4, 0)).to.equal(-4);
    expect(calculateNumber("SUM", 0, 5.6)).to.equal(6);
    expect(calculateNumber("SUM", 4.8, 5.6)).to.equal(11);
    expect(calculateNumber("SUM", 4.2, 5.6)).to.equal(10);
    expect(calculateNumber("SUM", -4.8, 5.6)).to.equal(1);
    expect(calculateNumber("SUM", -4.2, 5.6)).to.equal(2);
    expect(calculateNumber("SUM", 0, 0)).to.equal(0);
    expect(calculateNumber("SUM", -4.7, 0.3)).to.equal(-5);
  });

  it("should round numbers then subtract them", function () {
    expect(calculateNumber("SUBTRACT", 4, 5)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", -4, 5)).to.equal(-9);
    expect(calculateNumber("SUBTRACT", -4, -5)).to.equal(1);
    expect(calculateNumber("SUBTRACT", -4, 0)).to.equal(-4);
    expect(calculateNumber("SUBTRACT", 0, 5.6)).to.equal(-6);
    expect(calculateNumber("SUBTRACT", 4.8, 5.6)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", 4.2, 5.6)).to.equal(-2);
    expect(calculateNumber("SUBTRACT", -4.8, 5.6)).to.equal(-11);
    expect(calculateNumber("SUBTRACT", -4.2, 5.6)).to.equal(-10);
    expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
    expect(calculateNumber("SUBTRACT", -4.7, 0.3)).to.equal(-5);
  });

  it("should round numbers then divide them", function () {
    expect(calculateNumber("DIVIDE", 10, 5)).to.equal(2);
    expect(calculateNumber("DIVIDE", 10, -5)).to.equal(-2);
    expect(calculateNumber("DIVIDE", -10, -5)).to.equal(2);
    expect(calculateNumber("DIVIDE", 11.7, 6)).to.equal(2);
    expect(calculateNumber("DIVIDE", 10.2, 5)).to.equal(2);
    expect(calculateNumber("DIVIDE", 15.8, 4.2)).to.equal(4);
    expect(calculateNumber("DIVIDE", 15.8, -4.2)).to.equal(-4);
    expect(calculateNumber("DIVIDE", -15.8, -4.2)).to.equal(4);
    expect(calculateNumber("DIVIDE", 15.8, 0)).to.equal("Error");
    expect(calculateNumber("DIVIDE", 15.8, 0.3)).to.equal("Error");
  });
});
