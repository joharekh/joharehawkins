// spec/calculatorSpec.js
const calculator = require('../src/calculator');

describe('Calculator', function() {
  it('should add two numbers correctly', function() {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should handle negative numbers', function() {
    const result = calculator.add(-1, -1);
    expect(result).toBe(-2);
  });
});
