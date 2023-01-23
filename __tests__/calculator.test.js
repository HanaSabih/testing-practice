const Calculator = require("../calculator");

const calc = new Calculator(10, 5);

describe("simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply", () => {
  test("check if the method add numbers", () => {
    expect(calc.add()).toBe(15);
  });
  test("check if the method subtract numbers", () => {
    expect(calc.subtract()).toBe(5);
  });
  test("check if the method divide numbers", () => {
    expect(calc.divide()).toBe(2);
  });
  test("check if the method multiply numbers", () => {
    expect(calc.multiply()).toBe(50);
  });
});
