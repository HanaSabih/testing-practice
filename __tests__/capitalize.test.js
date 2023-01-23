const capitalize = require("../capitalize");

describe("takes a string as an argument and returns that string with the first character capitalized", () => {
  test("returns that string with the first character capitalized", () => {
    expect(capitalize("hana")).toBe("Hana");
  });
});
