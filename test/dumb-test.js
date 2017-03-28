var expect = require("chai").expect;

describe("Calc tests", function() {
  it("sums two values", function() {
    expect(1 + 1).to.equal(2);
  });

  it("multiplies two values", function() {
    expect(2 * 3).to.equal(6);
  });

  it("subtracts value", function() {
    expect(2 - 3).to.equal(-1);
  });
});
