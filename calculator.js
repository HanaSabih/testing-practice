/*
[1]check if the method add numbers
[2]check if the method subtract numbers
[3]check if the method divide numbers
[4]check if the method multiply numbers

*/

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
}

module.exports = Calculator;
