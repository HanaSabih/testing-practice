const stringLength = require("../stringLength");

describe("check if the string is at least 1 character long and not longer than 10 characters.", () => {
  test("check if the string is at least 1 character long", () => {
    expect(stringLength("hana")).toBeGreaterThan(1);
  });
  test("check if the string is not longer than 10 characters", () => {
    expect(stringLength("hana")).toBeLessThan(10);
  });
});
